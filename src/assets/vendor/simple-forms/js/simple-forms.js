(function (global){
    "use strict";

    var errorsDefaults = {
        en: {
            invalidSelector:     "[SimpleForms Alert] - Invalid selector passed:",
            invalidFormSelector: "[SimpleForms Alert] - Selected element is not a form: ",
            invalidSitekey:      "[SimpleForms Alert] - Please check your reCaptcha SITE KEY or create a new SITE KEY here: https://www.google.com/recaptcha/admin/create | See http://projects.lucas-games.com/simple-forms/#docs for more info.",
        }
    };

    global.SimpleForms = function(selector, opts){
        if(!selector || document.querySelector(selector) == null) return console.log(errorsDefaults.en.invalidSelector + selector);
        if( document.querySelector(selector).nodeName.toLowerCase() !== "form") throw errorsDefaults.en.invalidFormSelector + selector;

        var self = {};
        self.selector = selector;
        self.element  = document.querySelectorAll(self.selector);
        var forms = self.element;
        self.responseMessageTimeout;
        self.lang = "en";

        self.extend = function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                var obj = arguments[i];

                if (!obj) continue;

                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (typeof obj[key] === "object"){
                            if(obj[key] instanceof Array)
                                out[key] = obj[key].slice(0);
                            else out[key] = self.extend(out[key], obj[key]);
                        }
                        else out[key] = obj[key];
                    }
                }
            }
            return out;
        };

        var defaults = {
            action: "", // form action attribute
            defaultAction: "simple-forms/sendmail.php", // default action attribute value
            theme: "white", // default color theme
            fieldsStyle: "default-style", // form field style
            ajaxSubmit: true, // send form using AJAX
            validate: true, // validate form fields before submit
            browserValidation: false, // toggle browser validation
            validateOnKeyup: true, // validate on keyUp event
            tooltips: true, // show validation errors as tooltips
            showErrors: true, // show validation errors
            errorClass: "error", // default error clas
            debug: true, // enable debugging (console logs)
            redirect: {
                enabled: false, // enable redirect after submit
                url: "/", // URL where to redirect ?
                timeout: 3 // redirect timeout in seconds
            },
            validator: {
                rules: {} // custom validation rules for fields
            },
            // files: {
            //     enabled: true, // add files upload support
            //     extensions: "jpg, jpeg, png, svg, txt, pdf, zip, mp4", // allowed extionsions
            //     min: 0, // require min {n} files to upload
            //     max: 20, // allow max {n} files to upload
            //     maxFileSize: 24, // MB
            //     filesUploadHandler: "simple-forms/files-upload-handler.php", // handler of the uploaded files
            // },
            responseMessageHideTimeout: 4, // form messages hide timeout
            hideFormAfterSubmit: false, // form messages hide timeout
            customSuccessMessage: "",   // replace server response with custom message
            captcha: {
                enabled: true, // use captcha
                type: "math", // possible values: math | recaptcha-v2 | recaptcha-v3
                siteKey: "",
                theme: "light" //possible values: light | dark
            },
            accessibility: {
              escapeReset: false, // press ESC to reset the form and stop files uploading
              tabHighlight: false // press TAB to highlight form fields
            },
            consent: false, // enable submit button when agree with terms
            lang: "en" // default language
        };

        var options = self.extend({}, defaults, opts);

        self.objectSize = function(obj) {
            var size = 0, key;
            for (key in obj) { if (obj.hasOwnProperty(key)) size++; }
            return size;
        };
        self.getParam = function (paramName) {
            var result = null, tmp = [];
            location.search.substr(1).split("&").forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === paramName) result = decodeURIComponent(tmp[1]);
            });
            return result;
        };
        self.hasChild = function(el, child){
            return el !== child && el.contains(child);
        };
        self.truncateName = function(n, len){
            var ext = n.substring(n.lastIndexOf(".") + 1, n.length).toLowerCase(),
                filename = n.replace('.' + ext,'');
            if(filename.length <= len) {
                return n;
            }
            filename = filename.substr(0, len) + (n.length > len ? '...' : '');
            return filename + '.' + ext;
        };
        self.getRandomInt = function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        // self.getFileSize = function (bytes, decimalPlaces) {
        //     if( !decimalPlaces ) {
        //         decimalPlaces = 2;
        //     }
        //     if(bytes){
        //         if( parseInt(bytes) < 1024 ) {
        //             return bytes + " B";
        //         }
        //         else if( parseInt(bytes) >= 1024 && parseInt(bytes) < 1000000) {
        //             return ( bytes / 1024).toFixed(decimalPlaces) + " Kb";
        //         }
        //         else if( parseInt(bytes) >= 1000000 && parseInt(bytes) < 1000000000) {
        //             return ( bytes / 1048576).toFixed(decimalPlaces) + " Mb";
        //         }
        //         else if( parseInt(bytes) >= 1000000000 ) {
        //             return ( bytes / 1073741824).toFixed(decimalPlaces) + " Gb";
        //         }
        //     }
        //     else return 0 + " Mb";
        // };
        self.createObjectURL = function (data){
            if(data !== undefined) {
                return URL.createObjectURL(data);
            }
            else {
                return "";
            }
        };
        self.getLang = function () {
            var url, lang_param, name;
            name = 'lang';
            url = location.href;
            var regexS  = "[\\?&]"+name+"=([^&#]*)",
                regex   = new RegExp( regexS ),
                results = regex.exec( url );
            if( results ) lang_param = results[1];
            else lang_param = null;

            if (lang_param !== null && lang_param !== "") {
                return lang_param;
            }
            else if(options.lang !== null && options.lang !== "") {
                return options.lang;
            }
            else {
                return "en";
            }
        };

        self.getFormID = function(form){
            if( form && form.getAttribute("data-simple-form-id") ) return form.getAttribute("data-simple-form-id");
            else return null;
        };

        self.xhrArray = [];

        self.getFormTargetResponse = function (form){
            if(form){
                var formTargetResponse = form.querySelector(".server-response");

                if( formTargetResponse) return formTargetResponse;
                else{
                    var newTargetResponse = document.createElement("div");
                    newTargetResponse.classList.add("server-response");

                    form.appendChild(newTargetResponse);
                }
            }
            else return null;
        };
        self.findParent = function(el, sel){
            if(el && sel){
                while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
                return el;
            }
            return false;
        };
        self.getNodeIndex = function (node) {
            var index = 0;
            while ( (node = node.previousSibling) ) {
                if (node.nodeType !== 3 || !/^\s*$/.test(node.data)) {
                    index++;
                }
            }
            return index;
        };
        self.setErrorMessage = function(field, error_description, type){ // warning | error
            if(field && options.showErrors){
                var errorClass = options.errorClass || "error";
                    field.classList.add(errorClass);
                    field.setAttribute("aria-invalid", true);

                var errorTag, prevErrorTag, fieldParent;

                errorTag = document.createElement("span");
                errorTag.classList.add("simple-error-label");

                if( type === "error") {
                    errorTag.classList.add("simple-alert");
                }
                if( options.tooltips ) {
                    field.parentNode.style.position = "relative";
                    errorTag.classList.add("simple-tooltip");
                }

                errorTag.innerHTML = error_description;

                fieldParent = field.parentNode;
                prevErrorTag = fieldParent.querySelector(".simple-error-label");

                if( prevErrorTag ) {
                    prevErrorTag = fieldParent.replaceChild(errorTag, prevErrorTag);
                }
                else {
                    field.parentNode.insertBefore(errorTag, field.nextSibling);
                }

                field.parentNode.classList.add("invalid-field");
            }
        };
        self.cleanErrorMessage = function(field){
            if(field){
                var errorClass = options.errorClass || "error";
                field.classList.remove(errorClass);
                field.setAttribute("aria-invalid", false);

                var prevErrorTag = field.parentNode.querySelector(".simple-error-label");
                if( prevErrorTag ) {
                    prevErrorTag.parentNode.removeChild(prevErrorTag);
                }
                field.parentNode.classList.remove("invalid-field");
            }
        };
        self.isExcluded = function(field){
            var excluded = false;
            if(field != null){
                var excluded_types = ["hidden", "file", "submit"],
                    excluded_class = ["ignore", "novalidate", "no-validate", "no_validate"];

                excluded_types.forEach(function() {
                    if( excluded_types.indexOf(field.type) >= 0 ) {
                        excluded = true; return true;
                    }
                });

                excluded_class.forEach(function(className) {
                    if( field.classList.contains(className) ) {
                        excluded = true; return true;
                    }
                });
            }
            return excluded;
        };
        self.isValid = function(value, type){
            if(value && type){
                switch (type) {
                    case "name":
                        return /^([^0-9]*)$/.test(value);
                    case "phone":
                        return value.replace(/\D/g, "").length >= 8;
                    case "email":
                        return /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value);
                    case "date":
                        return ( /^\d{2}([./-])\d{2}\1\d{4}$/.test(value) || /^\d{4}([./-])\d{2}\1\d{2}$/.test(value) || /^\d{2}([./-])\d{2}\1\d{2}$/.test(value) );
                    case "url":
                        var no_protocol_url = value;
                        var protocol_url    = "//" + value;
                        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(no_protocol_url) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(protocol_url);
                    default:
                        return true;
                }
            }
            return false;
        };
        self.isValidForm = function(form){
            if( form && form.nodeName.toLowerCase() === "form"){
               var errorsSelector = form.querySelectorAll("." + options.errorClass || "error");
               return errorsSelector.length <= 0;
            }
            else return false;
        };
        self.validateForm = function(form){
            if( form.nodeName.toLowerCase() === "form" ){
                var fields_array = ["input", "select", "textarea"];

                fields_array.forEach(function (field) {
                    var all_fields = form.querySelectorAll(field);

                    if( all_fields ){
                        for(var i = 0; i < all_fields.length; i++){
                            var current_field = all_fields[i];

                            self.validate(current_field);
                            current_field.dispatchEvent( new Event("change") );
                        }
                    }
                });
            }
        };
        self.validate = function (field, validation_type) {
            if(field !== null){
                if( !self.isExcluded(field) ){
                    // basic validation, min, max, required
                    var minAttr  = field.getAttribute("minlength") || field.getAttribute("min"),
                        maxAttr  = field.getAttribute("maxlength") || field.getAttribute("max"),
                        min = parseInt(minAttr),
                        max = parseInt(maxAttr),
                        required = field.hasAttribute("required");

                    var error = {}, statusObj = {};

                    if(required && field.value.length < 1 ){
                        if( field.type === "textarea" ) {
                            error.description = "Please drop us a line...";
                            self.setErrorMessage(field, translations[self.lang].textareaRequiredMessage, "error");
                        }
                        else if( field.type === "select-one" ) {
                            error.description = "Please choose an option.";
                            self.setErrorMessage(field, translations[self.lang].chooseOption, "error");
                        }
                        else {
                            error.description = "This field is required.";
                            self.setErrorMessage(field, translations[self.lang].requiredField, "error");
                        }
                    }
                    else if( minAttr && field.value.length < min ){
                        error.description = "Min required characters: ("+ min +")";
                        self.setErrorMessage(field, translations[self.lang].minRequiredCharacters + " ("+ min +")", "warning");
                    }
                    else if( maxAttr && field.value.length > max ){
                        error.description = "Max allowed characters (" + max +")";
                        self.setErrorMessage(field, translations[self.lang].maxAllowedCharacters +" (" + max +")", "warning");
                    }
                    else if( validation_type ){ // if there is a specific validation type given
                        validation_type = validation_type.trim().toLowerCase();

                        switch (validation_type) {
                            case "name" :
                                if( !self.isValid(field.value, "name") ){
                                    error.description = "Invalid name field.";
                                    self.setErrorMessage(field, translations[self.lang].invalidNameField, "warning");
                                }
                                break;
                            case "phone" :
                                if( !self.isValid(field.value, "phone") ){
                                    error.description = "Invalid phone field.";
                                    self.setErrorMessage(field, translations[self.lang].invalidPhoneField, "warning");
                                }
                                break;
                            case "email" :
                                if( !self.isValid(field.value, "email") ){
                                    error.description = "Invalid email field.";
                                    self.setErrorMessage(field, translations[self.lang].invalidEmailField, "warning");
                                }
                                break;
                            case "url" :
                                if( !self.isValid(field.value, "url") ){
                                    error.description = "Invalid url field.";
                                    self.setErrorMessage(field, translations[self.lang].invalidUrlField, "warning");
                                }
                                break;
                            case "date" :
                                if( !self.isValid(field.value, "date") ){
                                    error.description = "Invalid date field.";
                                    self.setErrorMessage(field, translations[self.lang].invalidDateField, "warning");
                                }
                                break;
                            default :
                                return false;
                        }
                    }

                    statusObj = {target: field, errors: error};
                    if( self.objectSize(error) < 1 ) {
                        self.cleanErrorMessage(field);
                    }
                }
            }
        };
        self.handleFieldValidation = function(field, validationType){
            validationType = validationType.trim();

            if(field && options.validate && validationType.length ){
                field.addEventListener("change", function(){ self.validate(field, validationType); }, false);

                if( options.validateOnKeyup ) {
                    field.addEventListener("keyup", function () { self.validate(field, validationType); }, false);
                }
            }
            else {
                return false;
            }
        };
        self.initValidation = function (form) {
            if( form != null){
                var fields_array = ["input", "select", "textarea"];

                fields_array.forEach(function (field) {
                    var all_fields = form.querySelectorAll(field);

                    if( all_fields ){
                        for(var i = 0; i < all_fields.length; i++){
                            var current_field = all_fields[i];

                            if( !current_field.getAttribute("title") ) {
                                current_field.setAttribute("title", "");
                            }

                            if ( options.validate ){
                                current_field.onchange = function(e){ self.validate(e.target); };

                                if( options.validateOnKeyup ) {
                                    current_field.onkeyup = function(e){ self.validate(e.target); };
                                }
                            }
                        }
                    }
                });

                form.onchange = function(){
                    if(options.captcha.enabled && options.captcha.type === "recaptcha-v3") {
                        self.updateCaptcha(form);
                    }
                };

                var validatorRules = options.validator.rules;

                for (var rule_selector in validatorRules) {
                    if (validatorRules.hasOwnProperty(rule_selector)) {
                        var s = rule_selector, // selector
                            r = validatorRules[s]; // rules

                        var el = form.querySelector(s.trim());

                        if( el != null ){
                            if( self.objectSize(r) > 0){
                                for( var key in r){
                                    if (r.hasOwnProperty(key)) {
                                        var propertyValue = r[key];

                                        switch (key) {
                                            case "required":
                                                if(options.validate && propertyValue) {
                                                    el.setAttribute("required", "required");
                                                }
                                                else {
                                                    el.removeAttribute("required");
                                                }
                                                break;
                                            case "min":
                                                if(options.validate && propertyValue >= 0) {
                                                    el.setAttribute("min", parseInt(propertyValue));
                                                }
                                                break;
                                            case "max":
                                                if(options.validate && propertyValue >= 0) {
                                                    el.setAttribute("max", parseInt(propertyValue));
                                                }
                                                break;
                                            case "name":
                                                if(options.validate) {
                                                    self.handleFieldValidation(el, "name");
                                                }

                                                el.addEventListener("validationCheck", function (e) { self.handleFieldValidation(el, "name"); }, false);
                                                break;
                                            case "phone":
                                                if(options.validate) self.handleFieldValidation(el, "phone");
                                                break;
                                            case "email":
                                                if(options.validate) self.handleFieldValidation(el, "email");
                                                break;
                                            case "url":
                                                if(options.validate) self.handleFieldValidation(el, "url");
                                                break;
                                            case "date":
                                                if(options.validate) self.handleFieldValidation(el, "date");
                                                break;
                                            default :
                                                return false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        self.disableSubmitButton = function(form){
            if(form){
                var submitBtn = form.querySelector("[type=\"submit\"]");
                if( submitBtn ) submitBtn.classList.add("disabled")
            }
        };
        self.enableSubmitButton = function(form){
            if(form){
                var submitBtn = form.querySelector("[type=\"submit\"]");
                if( submitBtn ) submitBtn.classList.remove("disabled")
            }
        };
        self.updateMathCaptcha = function(form){
            if(form){
                var math_captcha_wrapper = form.querySelector(".simple-captcha-wrapper");

                if( math_captcha_wrapper ){
                    math_captcha_wrapper.remove();
                }

                self.initMathCaptcha(form);
            }
        };
        self.initMathCaptcha = function(form){
            if(form){
                var math_captcha_wrapper = form.querySelector(".simple-captcha-wrapper");

                if( !math_captcha_wrapper ){
                    math_captcha_wrapper = document.createElement("div");
                    math_captcha_wrapper.classList.add("simple-captcha-wrapper");

                    var submitBtn = form.querySelector("[type=\"submit\"]");

                    if( submitBtn ){
                        var submitBtnParent = submitBtn.parentNode;
                        if( submitBtnParent !== form ) form.insertBefore(math_captcha_wrapper, submitBtnParent);
                        else form.appendChild(math_captcha_wrapper);
                    }
                    else form.appendChild(math_captcha_wrapper);

                    console.warn("[Simple Forms Warning] .math_captcha_wrapper element missing!");
                }

                var min         = document.createElement("input"),
                    max         = document.createElement("input"),
                    math_solver = document.createElement("input"),
                    n_min       = self.getRandomInt(0, 5),
                    n_max       = self.getRandomInt(1, 5),
                    sum         = parseInt(n_min + n_max),
                    placeholder = n_min + " + " + n_max + " = ?";

                var errorClass = options.errorClass || "error";

                min.setAttribute("value", n_min);
                min.setAttribute("type", "hidden");
                min.setAttribute("name", "math-solver-min");

                max.setAttribute("value", n_max);
                max.setAttribute("type", "hidden");
                max.setAttribute("name", "math-solver-max");

                math_solver.classList.add("math-solver");
                math_solver.setAttribute("type", "text");
                math_solver.setAttribute("name", "math-solver");
                math_solver.setAttribute("required", "required");
                math_solver.setAttribute("placeholder", placeholder);

                math_captcha_wrapper.appendChild(min);
                math_captcha_wrapper.appendChild(max);
                math_captcha_wrapper.appendChild(math_solver);

                var solver = form.querySelector("[name=\"math-solver\"]");

                var handleMathCaptchaResponse = function(){
                    if( parseInt(solver.value) === sum ) {
                        solver.classList.remove(errorClass);
                        self.cleanErrorMessage(solver);
                    }
                    else {
                        solver.classList.add(errorClass);
                        self.setErrorMessage(solver, translations[self.lang].requiredField, "error");
                    }
                };

                if( solver ){
                    solver.addEventListener("change", handleMathCaptchaResponse, false);
                    solver.addEventListener("keyup", handleMathCaptchaResponse, false);
                    solver.addEventListener("paste", handleMathCaptchaResponse, false);
                }
            }
        };
        self.initRecaptcha = function(form, version){
            if(form){
                if( version === "v2" ){
                    if(!options.captcha.siteKey.length) {
                        throw errorsDefaults.en.invalidSitekey;
                    }

                    var captcha_v2_script = document.querySelector("#simple-forms-recaptcha-api-v2");

                    if( !captcha_v2_script ){
                        var siteKeyV2 = options.captcha.siteKey,
                            d = document.createElement("div");
                        d.classList.add('g-recaptcha');
                        d.setAttribute("data-sitekey", siteKeyV2);
                        d.setAttribute("data-theme", options.captcha.theme || "light");

                        var captcha_wrapper = form.querySelector(".simple-captcha-wrapper");
                        if( captcha_wrapper ) captcha_wrapper.appendChild(d);
                        else form.appendChild(d);

                        var captchaAPIScriptV2 = document.createElement("script");
                        captchaAPIScriptV2.id = "simple-forms-recaptcha-api-v2";
                        captchaAPIScriptV2.src = "//www.google.com/recaptcha/api.js";
                        captchaAPIScriptV2.async = true;
                        captchaAPIScriptV2.defer = true;
                        document.head.appendChild(captchaAPIScriptV2);
                    }
                }
                else if( version === "v3" ){
                    if(!options.captcha.siteKey.length) {
                        throw errorsDefaults.en.invalidSitekey;
                    }

                    var captcha_v3_script = document.querySelector('#simple-forms-recaptcha-api-v3');

                    if( !captcha_v3_script ){
                        var siteKeyV3 = options.captcha.siteKey,
                            captchaAPIScriptV3 = document.createElement("script");

                        captchaAPIScriptV3.id = "simple-forms-recaptcha-api-v3";
                        captchaAPIScriptV3.src = "//www.google.com/recaptcha/api.js?render=" + siteKeyV3;
                        captchaAPIScriptV3.async = true;
                        captchaAPIScriptV3.defer = true;
                        document.body.appendChild(captchaAPIScriptV3);
                    }
                }
                else {
                    return false;
                }

                // append captcha version input to form
                var version_input = document.createElement("input");
                version_input.type = "hidden";
                version_input.name = "sf-recaptcha-version";

                if( version === "v3" )      version_input.value = "v3";
                else if( version === "v2" ) version_input.value = "v2";

                form.appendChild(version_input);
            }
        };
        self.initCaptcha = function(form){
            if( form && options.captcha.enabled){
                switch (options.captcha.type) {
                    case 'math' :
                            self.initMathCaptcha(form);
                        break;
                    case 'recaptcha-v2' :
                            self.initRecaptcha(form, 'v2');
                        break;
                    case 'recaptcha-v3' :
                            self.initRecaptcha(form, 'v3');
                        break;
                    default :
                        return false;
                }
            }
        }
        self.updateCaptcha = function(form){
            if( form ){
                if( options.captcha.enabled ){
                    switch (options.captcha.type) {
                        case "math":
                            self.initMathCaptcha(form);
                            self.updateMathCaptcha(form);
                            break;
                        case "recaptcha-v3":
                            if(!options.captcha.siteKey.length) {
                                throw errorsDefaults.en.invalidSitekey;
                            }

                            if( typeof grecaptcha !== typeof undefined){
                                grecaptcha.ready(function() {
                                    grecaptcha.execute(options.captcha.siteKey, {action: "homepage"}).then(function(token) {
                                        var response_field = document.querySelector(".g_response_field"), response_input;
                                        if(response_field) {
                                            response_field.parentNode.removeChild(response_field);
                                        }

                                        response_input = document.createElement("input");
                                        response_input.type = "hidden";
                                        response_input.name = "g-recaptcha-response";
                                        response_input.classList.add("g_response_field")
                                        response_input.value = token;

                                        form.appendChild(response_input);
                                    });
                                });
                            }
                            break;
                        default :
                            return false;
                    }
                }
            }
        };
        self.initConsent = function(form){
            if( form && options.consent ){
                var submit_btn       = form.querySelector("[type=\"submit\"]"),
                    consent_checkbox = form.querySelector(".simple-consent-checkbox");

                if( !consent_checkbox ){
                   if( options.debug ) console.warn("[Simple Forms Warning] Consent checkbox is missing or has wrong class! Please add .simple-consent-checkbox class to your consent checkbox.");
                }

                var consentHandler = function () {
                    if( consent_checkbox.checked ) submit_btn.classList.remove("disabled");
                    else submit_btn.classList.add("disabled");
                };

                if( submit_btn && consent_checkbox ){
                    consentHandler();
                    consent_checkbox.addEventListener("change", consentHandler, false);
                }
            }
        };
        // self.removeFilesList = function(form){
        //     if( form ){
        //         var fl = form.querySelector(".sf-list");
        //         if( fl ) fl.remove();
        //     }
        // };
        self.resetForm = function(form){
            if( form.nodeName.toLowerCase() === "form" ){
                form.reset();

                var fields_array = ["input", "select", "textarea"];

                fields_array.forEach(function (field) {
                    var all_fields = form.querySelectorAll(field);

                    if( all_fields ){
                        for(var i = 0; i < all_fields.length; i++){
                            var current_field = all_fields[i];

                            self.cleanErrorMessage(current_field);
                        }
                    }
                });

                // self.deleteFormFiles(form);
                // self.removeFilesList(form);
                form.classList.remove("tab_highlight");

            }
        };
        self.initAccessibility = function(form){
            if( form ){
                form.onkeyup = function(e) {
                    if (e.key === "Escape" && options.accessibility.escapeReset) {
                        self.resetForm(e.target.form);
                    }

                    if (e.key === "Tab" && options.accessibility.tabHighlight) {
                        e.target.form.classList.add("tab_highlight");
                    }
                };
            }
        };
        // self.getFileExtension = function(fileName){
        //     if(fileName) {
        //         fileName = encodeURI(fileName);
        //         return fileName.split('.').pop();
        //     }
        // };
        self.isJSON = function(something){
            if( !something.length ) return false;
            return (/^[\],:{}\s]*$/.test(something.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')));
        };
        // self.initFilesList = function (form){
        //     if(form){
        //         if( form.tagName === "FORM" ){
        //             var simple_files = form.querySelector(".simple-files");

        //             if( simple_files ){
        //                 var files_list_exist = form.querySelector(".sf-list");

        //                 if( !files_list_exist ){
        //                     var new_files_list   = document.createElement("div");
        //                         new_files_list.classList.add("sf-list");
        //                         new_files_list.innerHTML = `<div class="sf-header">
        //                             <div>
        //                                <div class="sf-counter">
        //                                     <span class="sf-counter-number">
        //                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path fill="#B8B8B8" d="M240 216V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224H248a8 8 0 01-8-8z"/><path fill="#B8B8B8" d="M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z"/></svg>
        //                                         <span class="sf-files-count">0</span>
        //                                     </span>
        //                                     <span class="sf-counter-size"> (<span class="sf-files-size">0 Mb</span>) </span>
        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <span class="sf-closer sf-ajax-abort">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z"/></svg>
        //                                 </span>
        //                             </div>
        //                         </div>
        //                         <div class="sf-items simple-scrollbar"></div>`;

        //                     simple_files.appendChild(new_files_list);
        //                 }
        //             }
        //             else console.warn("[Simple Forms Warning] Cannot update files list! .simple-files element missing, please check your form HTML markup");
        //         }
        //         else console.warn("[Simple Forms Warning] Cannot init files list, invalid form selector provided!");
        //     }
        // };
        // self.setSuccessFile = function (form, file){
        //   if(form && file){
        //       var targetFile = form.querySelector(`.sf-file-item[data-filename="${file.name}"]`);
        //       if( targetFile ) targetFile.classList.add("sf-upload-success");
        //   }
        // };
        // self.setErrorFile = function (form, file, errors){
        //     if( form && file ) {
        //         var targetFile   = form.querySelector(`.sf-file-item[data-filename="${file.name}"]`),
        //             tooltip      = targetFile.querySelector(".simple-tip"),
        //             errorStrings = "";

        //         if( errors.length ){
        //             for(var e=0; e<errors.length; e++){
        //                 errorStrings += `<span>${errors[e]}</span>`;
        //             }
        //         }

        //         if( targetFile ){
        //             targetFile.classList.add("sf-upload-error");

        //             if( tooltip ){
        //                 tooltip.innerHTML = errorStrings;
        //             }
        //             else{
        //                 var errorTip = document.createElement("span");
        //                     errorTip.classList.add("simple-tip");

        //                 if( errors.length ){
        //                     errorTip.innerHTML = errorStrings;
        //                     targetFile.appendChild(errorTip);
        //                 }
        //             }
        //         }
        //     }
        // };
        // self.addErrorInfo = function (form, file, errors){
        //     if( form && file ) {
        //         var formTargetResponse = self.getFormTargetResponse(form);

        //         if( formTargetResponse ){
        //             var errorDescription = "";

        //            if( errors.length ){
        //                for(var e=0; e<errors.length; e++){
        //                    var err = errors[e];
        //                    errorDescription += `<span>${err}</span>`;
        //                }
        //            }

        //            self.showMessage(form, errorDescription, "error", true);
        //         }
        //     }
        //     else {
        //         return console.warn("[Simple Forms Warning] Bad form selector or try to upload invalid files");
        //     }
        // };
        // self.updateFilesCount = function (form) {
        //     if( form ){
        //         var targetFilesCount = form.querySelector(".sf-files-count"),
        //             targetFilesSize  = form.querySelector(".sf-files-size"),
        //             filesInList      = form.querySelectorAll(".sf-file-item"),
        //             filesTotalAmount = 0,
        //             filesTotalSize   = 0;

        //         if( filesInList ){
        //             filesTotalAmount = filesInList.length;

        //             for(var i=0; i<filesInList.length; i++){
        //                 var fileItem = filesInList[i],
        //                     fileSize = parseInt( fileItem.getAttribute("data-filesize") );

        //                 filesTotalSize += fileSize;
        //             }
        //         }

        //         if( targetFilesCount ) targetFilesCount.innerHTML = filesTotalAmount;
        //         if( targetFilesSize )  targetFilesSize.innerHTML = self.getFileSize(filesTotalSize, 0);
        //     }
        // };
        // self.addFileToList = function (form, file) {
        //     if( form && file){
        //         var files_list_test = form.querySelector(".sf-items");
        //         if( !files_list_test ) self.initFilesList(form);

        //         var files_list = form.querySelector(".sf-items");

        //         if( files_list ){
        //             var fileName      = self.truncateName(file.name || "", 16),
        //                 fileSize      = file.size || 0,
        //                 formattedFileSize = self.getFileSize(file.size),
        //                 isImage = (/\.(?=gif|jpg|png|jpeg|svg|webp)/gi).test(file.name),
        //                 imageURL,
        //                 previewImg = "";

        //             if ( isImage ){
        //                 imageURL = self.createObjectURL(file);
        //                 if( imageURL ) previewImg = `<span class="simple-tip"> <span class="sf-preview-image"> <img src="${imageURL}" alt="" draggable="false"> </span> </span>`;
        //             }

        //             var newFileItem = document.createElement("div");
        //                 newFileItem.classList.add("sf-file-item");
        //                 newFileItem.setAttribute("data-filename", file.name);
        //                 newFileItem.setAttribute("data-filesize", fileSize);
        //                 newFileItem.innerHTML = `<div class="sf-col-left">
        //                                                 <span class="sf-file-info">${fileName} <span class="sf-file-size">(${formattedFileSize})</span></span>
        //                                             </div>
        //                                             <div class="sf-col-right"><span class="sf-closer sf-item-cancel"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"/></svg></span></div>
        //                                             <div class="sf-item-progress">
        //                                                 <div class="sf-progress" style="width: 0%"></div>
        //                                             </div>
        //                                         ${previewImg}`;

        //             files_list.append(newFileItem);

        //             // update files count / size
        //             self.updateFilesCount(form);
        //         }
        //         else{
        //             if( options.debug ) console.warn("[Simple Forms Warning] Undefined files list.");
        //         }
        //     }
        // }
        // self.getFileProgressBar = function (form, file) {
        //     if( form && file ){
        //         var fileItem = form.querySelector(`.sf-file-item[data-filename="${file.name}"]`),
        //             fileItemProgressBar = fileItem.querySelector(".sf-progress");

        //         if( fileItemProgressBar ) return fileItemProgressBar;
        //         else return null;
        //     }
        //     else return null;
        // };
        // self.updateFileProgress = function (e, fileProgressBar) {
        //     if (e.lengthComputable && fileProgressBar) {
        //         var progressValue = parseInt( (e.loaded * 100.0 / e.total) || 100 );
        //             fileProgressBar.style.width = progressValue + "%";
        //     }
        // };
        // self.uploadFile = function (form, file) {
        //     var url = options.files.filesUploadHandler || 'simple-forms/files-upload-handler.php',
        //         fileXHR = new XMLHttpRequest(),
        //         fileFormData = new FormData(),
        //         uploadErrors = [],
        //         err;

        //     var formID = self.getFormID(form);
        //     self.xhrArray[formID].push(fileXHR);

        //     fileFormData.append('file', file);
        //     fileXHR.open("POST", url);

        //     // disable submit button
        //     self.disableSubmitButton(form);

        //     //add file to list
        //     self.addFileToList(form, file);

        //     // get file progress bar element
        //     var fileProgressBar = self.getFileProgressBar(form, file);

        //     if( fileProgressBar ){
        //         fileXHR.upload.addEventListener("progress", function(e) {
        //             self.updateFileProgress(e, fileProgressBar);
        //         })
        //     }

        //     fileXHR.send(fileFormData);

        //     fileXHR.onloadend = function (event) {
        //         self.enableSubmitButton(form);

        //         if (event.target.status === 0) {
        //             err = translations[self.lang].uploadFailed;
        //             var consoleErr = ` [Simple Forms Warning] ${file.name} Upload failed... Please try again.`;
        //             uploadErrors.push(err);

        //             self.setErrorFile(form, file, uploadErrors);
        //             console.warn( consoleErr );
        //         }
        //         else if (event.target.status === 400) {
        //             err = "Bad request.. Please try again";
        //             uploadErrors.push(err);

        //             self.setErrorFile(form, file, uploadErrors);
        //             console.warn( err );
        //         }
        //         else if (event.target.status === 200) {
        //             if( self.isJSON(event.target.response) ){
        //                 var response = JSON.parse(event.target.response);

        //                 switch (response.status) {
        //                     case "success":
        //                     {
        //                         if( response.url && response.name && response.size){
        //                             var newAjaxFile = document.createElement("input");
        //                                 newAjaxFile.type = "hidden";
        //                                 newAjaxFile.name = "ajax-file[]";
        //                                 newAjaxFile.value = response.url;
        //                                 newAjaxFile.classList.add("sf-ajax-file");
        //                                 newAjaxFile.setAttribute("data-name", response.name);
        //                                 newAjaxFile.setAttribute("data-size", response.size);

        //                             form.append(newAjaxFile);

        //                             self.setSuccessFile(form, file);
        //                         }
        //                         break;
        //                     }
        //                     case "error":
        //                     {
        //                         var unknownError = translations[self.lang].unknownServerError,
        //                             res = response.errors;

        //                         if( typeof res === "object" ){
        //                             for(var e=0; e<self.objectSize(res); e++){
        //                                 uploadErrors.push(res[e]);
        //                             }
        //                         }
        //                         else uploadErrors.push(unknownError);

        //                         self.setErrorFile(form, file, uploadErrors);
        //                         self.showMessage(form, unknownError, "error");
        //                         break;
        //                     }
        //                     default :
        //                     {
        //                         uploadErrors.push("Unknown Server Error... Please try again")
        //                         self.setErrorFile(form, file, uploadErrors);

        //                         console.error("[Simple Forms Alert!] Invalid JSON format. Please check your files upload handler");
        //                         console.log(response);
        //                         break;
        //                     }
        //                 }
        //             }
        //             else{
        //                 console.error("[Simple Forms Alert!] Server response is not a valid JSON. Please check your files upload handler");
        //                 console.log(event.target.response);
        //             }
        //         }
        //     }
        // };
        // self.fileExist = function(form, file){
        //     if( form && file ){
        //         var fileName = file.name,
        //             fileExistSelector = form.querySelector(`.sf-file-item[data-filename="${fileName}"]`);
        //         return !!fileExistSelector;
        //     }
        //     return false;
        // };
        // self.getFilesCount = function(form){
        //     if( form ){
        //         var filesCount = form.querySelectorAll(".sf-file-item");
        //         return filesCount.length;
        //     }
        //     return -1;
        // };
        // self.validateFiles = function(form, files){
        //     if(form && typeof files === "object" ){
        //         for(var i=0; i<files.length; i++){
        //             var file           = files[i],
        //                 fileExtension  = self.getFileExtension(file.name),
        //                 fileSize       = file.size || 0,
        //                 sizeLimitBytes = parseInt(options.files.maxFileSize) * 1048576,
        //                 sizeLimit      = parseInt(options.files.maxFileSize);

        //             var validationErrors = [];

        //             if( fileSize > sizeLimitBytes ){
        //                 var size_error = translations[self.lang].maxAllowedFileSize + `${sizeLimit}Mb`;
        //                 validationErrors.push(size_error);
        //             }

        //             if( options.files.extensions.length ){
        //                 var extensions = options.files.extensions;
        //                 var allowed_extensions = extensions.split(" ");

        //                 if( allowed_extensions.length ){
        //                     if( allowed_extensions.indexOf(fileExtension) === -1 ) {
        //                         var ext_error = `${fileExtension} - ` + translations[self.lang].filesNotAllowed;
        //                         validationErrors.push(ext_error);
        //                     }
        //                 }
        //             }

        //            if( self.fileExist(form, file) ){
        //                var fileName = self.truncateName(file.name, 10),
        //                    exist_error = `(${fileName}) - ` + translations[self.lang].fileAlreadyExist;
        //                validationErrors.push(exist_error);
        //            }

        //            var maxFilesLimit = parseInt(options.files.max);

        //             if( maxFilesLimit > 0 && parseInt( self.getFilesCount(form) ) > (maxFilesLimit - 1) ){
        //                 var max_error = translations[self.lang].maxAllowedFiles + ` (${maxFilesLimit}) !`;
        //                 validationErrors.push(max_error);
        //             }

        //             if( validationErrors.length ){
        //                 if(options.debug) console.log( validationErrors );
        //                 self.addErrorInfo(form, file, validationErrors);
        //             }
        //             else{
        //                 self.uploadFile(form, file);
        //             }
        //         }
        //     }
        //     else{
        //         self.showMessage(form, translations[self.lang].invalidFiles, "error");
        //     }
        // }
        // self.deleteFileItem = function(form, fileListItem){
        //     if( form && fileListItem ){
        //         var itemIndex   = self.getNodeIndex(fileListItem),
        //             formID      = self.getFormID(form),
        //             filename    = fileListItem.getAttribute("data-filename"),
        //             targetInput = form.querySelector(`input.sf-ajax-file[data-name="${filename}"]`);

        //         if( itemIndex >= 0 ){
        //             self.xhrArray[formID][itemIndex].abort();
        //             self.xhrArray[formID].splice(itemIndex, 1);
        //         }

        //         if( targetInput ) targetInput.remove();
        //         if( fileListItem ) fileListItem.remove();

        //         self.updateFilesCount(form);
        //     }
        //     else return false;
        // };
        // self.deleteFormFiles = function(form){
        //     if( form ){
        //         var items       = form.querySelectorAll(".sf-file-item"),
        //             inputs      = form.querySelectorAll(".sf-ajax-file"),
        //             formID      = self.getFormID(form);

        //         if( items ){
        //             for (var f=0; f<items.length; f++){
        //                 var fileListItem = items[f],
        //                     fileListIndex = self.getNodeIndex(fileListItem);

        //                 if( fileListIndex >= 0){
        //                     self.xhrArray[formID][fileListIndex].abort();
        //                 }
        //             }

        //             // empty files array
        //             self.xhrArray[formID] = [];

        //             // delete items
        //             for (var d=0; d<items.length; d++){
        //                 items[d].remove();
        //             }
        //         }

        //         if( inputs ){
        //             // delete hidden inputs
        //             for (var h=0; h<inputs.length; h++){
        //                 inputs[h].remove();
        //             }
        //         }

        //         self.updateFilesCount(form);
        //     }
        //     else return false;
        // };
        // self.initFiles = function(form){
        //     if( form ){
        //         var preventDefaults =  function (e) {
        //             e.preventDefault();
        //             e.stopPropagation();
        //         }

        //         var highlight   = function () {form.classList.add('highlight', 'drop-area')}
        //         var unhighlight = function() {form.classList.remove('highlight', 'drop-area')}

        //         var handleDrop = function (e) {
        //             var dt    = e.dataTransfer,
        //                 files = dt.files,
        //                 form;

        //             if( e.target.tagName === "FORM" ) form = e.target;
        //             else form = e.target.form;

        //             self.validateFiles(form, files);
        //         };

        //         var handleSelect = function (e) {
        //             if( e.target ){
        //                 var files = e.target.files;
        //                     self.validateFiles(form, files);
        //                     e.target.value = "";
        //             }
        //         };

        //         var xhr        = new XMLHttpRequest(),
        //             fileSelect = form.querySelector("input[type=file]");

        //         if( xhr.upload ){
        //             form.addEventListener('drop', handleDrop, false);

        //             ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => { form.addEventListener(eventName, preventDefaults, false) });
        //             ['dragenter', 'dragover'].forEach(eventName => { form.addEventListener(eventName, highlight, false) });
        //             ['dragleave', 'drop'].forEach(eventName => { form.addEventListener(eventName, unhighlight, false) });

        //             fileSelect.addEventListener('change', handleSelect, false);
        //         }
        //         else{
        //             if( options.debug ) console.warn("[Simple Forms Alert] XMLHttpRequest Upload not available.");
        //         }

        //         // prepare files array
        //         var formID = self.getFormID(form);
        //             self.xhrArray[formID] = [];

        //         if( parseInt(options.files.min) > 0 ){
        //             self.initFilesList(form);
        //         }

        //         // file item cancel uploading
        //         form.onclick = function (e) {
        //             if( e.target.classList.contains("sf-item-cancel") ){
        //                 var parentItem = self.findParent(e.target, ".sf-file-item");
        //                     self.deleteFileItem(form, parentItem);
        //             }

        //             if( e.target.classList.contains("sf-ajax-abort") ){
        //                 self.deleteFormFiles(form);
        //                 self.removeFilesList(form);
        //             }
        //         }
        //     }
        // };
        self.showMessage = function(form, message, type, hide){
            if( !type ) type = "info";

            if(form && message ){
                if( message.length ){
                    var sr_check = form.querySelector(".server-response");

                    if( !sr_check ){
                        var sr = document.createElement("div");
                        sr.classList.add("server-response");
                        form.appendChild(sr);
                    }

                    var server_response_selector = form.querySelector(".server-response");

                    server_response_selector.innerHTML = "";
                    server_response_selector.innerHTML = `<div class="sf-message sf-${type}-message"><span>${message}</span></div>`;

                    if( parseInt(options.responseMessageHideTimeout) > 0 && hide ){
                        var timeout = parseInt(options.responseMessageHideTimeout) * 1000;

                        clearTimeout( self.responseMessageTimeout );

                        self.responseMessageTimeout = setTimeout(function () {
                            var msg = server_response_selector.querySelector(".sf-message");
                            msg.classList.add("sf-hide");
                        }, timeout);
                    }
                }
            }
        };
        self.handleFormSubmit = function(form){
            if( form ){
                var onSubmit = function(event) {
                    if (options.ajaxSubmit ) {
                        event.preventDefault();
                    }

                    // validate before submit
                    self.validateForm(form);

                    if( self.isValidForm(form) ){
                        // check for min required files
                        // var minRequiredFiles = parseInt(options.files.min);
                        // if( minRequiredFiles > 0 && parseInt( self.getFilesCount(form) ) < minRequiredFiles ){
                        //     var minError = translations[self.lang].minRequiredFiles + ` (${minRequiredFiles}) !`;
                        //         self.showMessage(form, minError, "error", true);

                        //     console.warn(minError);
                        //     return false;
                        // }

                        // if all OK send form data
                        var xhr      = new XMLHttpRequest(),
                            formData = new FormData(form),
                            action   = form.getAttribute("action") || options.defaultAction,
                            err,
                            consoleErr,
                            response,
                            errorsString = "";

                        xhr.open("POST", action);
                        xhr.send(formData);
                        xhr.onerror = function(e) {
                            console.warn( translations[self.lang].submissionFailed );
                            console.log(e);
                        };

                        document.onkeyup = function(e) {
                            if (e.key === "Escape") {
                                xhr.abort();
                                console.warn("[Simple Forms Warning] Form submission aborted.");
                            }
                        };

                        xhr.onloadend = function (event) {
                            if (event.target.status === 0) {
                                err        = translations[self.lang].submissionFailed;
                                consoleErr = translations[self.lang].submissionFailed;

                                self.showMessage(form, err, "error", true);
                                if(options.debug) console.warn( consoleErr );
                            }
                            else if (event.target.status === 400) {
                                err        = translations[self.lang].badRequest;
                                consoleErr = translations[self.lang].badRequest;

                                self.showMessage(form, err, "error", true);
                                if(options.debug) console.warn( consoleErr );
                            }
                            else if (event.target.status === 200) {
                                if( self.isJSON(event.target.response) ){
                                    response = JSON.parse(event.target.response);

                                    switch (response.status) {
                                        case "success":
                                        {
                                            if( options.customSuccessMessage && options.customSuccessMessage.length > 0 ){
                                                response.message = options.customSuccessMessage;
                                            }

                                            if( options.hideFormAfterSubmit ){
                                                var p = document.createElement("p");
                                                p.classList.add("sf-short-response");
                                                p.innerHTML = response.message;
                                                form.parentNode.appendChild(p);
                                                form.remove();
                                            }

                                            // success server response
                                            if( response.message ) self.showMessage(form, response.message, "success", true);

                                            if( options.redirect.enabled ){
                                                var timeout = options.redirect.timeout > 0 ? parseInt( options.redirect.timeout ) * 1000 : 0,
                                                    url     = options.redirect.url !== "" ? options.redirect.url : window.location.href;

                                                if(timeout <= 0) {
                                                    window.location.href = url;
                                                    return;
                                                }
                                                else{
                                                    setTimeout(function () {
                                                        window.location.href = url;
                                                    }, timeout);
                                                }
                                            }

                                            self.resetForm(form);
                                            self.updateCaptcha(form)
                                            break;
                                        }
                                        case "error":
                                        {
                                            // error server response
                                            var unknownError = translations[self.lang].unknownServerError,
                                                res = response.errors;

                                            if( typeof res === "object" ){
                                                for(var e=0; e<self.objectSize(res); e++){
                                                    errorsString +=  `<span>${res[e]}</span>`;
                                                }

                                                self.showMessage(form, errorsString, "error");
                                            }
                                            else self.showMessage(form, unknownError, "error");

                                            break;
                                        }
                                        default :
                                        {
                                            // default state of server response
                                            self.showMessage(form, response, "error", true);

                                            if( options.debug ) console.error( "[Simple Forms Alert] Invalid JSON response format. Please check your form handler." );
                                            break;
                                        }
                                    }

                                    if( options.debug && response ) console.log( response );
                                }
                                else{
                                    consoleErr = "[Simple Forms Alert] Server response is not a valid JSON. Please check your form handler";
                                    self.showMessage(form, event.target.response, "info", true);

                                    if(options.debug){
                                        console.error(consoleErr);
                                        console.log(event.target.response);
                                    }
                                }
                            }
                        };
                    }
                    else{
                        if(options.debug) console.log( translations[self.lang].invalidForm );
                        self.showMessage(form, translations[self.lang].invalidForm, "error");
                    }
                };

                form.addEventListener("submit", onSubmit, false);
                form.submit = onSubmit;
            }
        };

        self.initForm = function (form) {
            if( !form.classList.contains("simple-form") ) form.classList.add("simple-form");

            if( options.theme ) {
                var formThemes = ['white', 'dark', 'purple', 'red', 'green', 'blue', 'faded-light', 'faded-dark', 'custom'];

                if( formThemes.indexOf(options.theme) >= 0 ) {
                    form.classList.add(options.theme);
                }
                else{
                    form.classList.add("white");
                }
            }

            if( options.fieldsStyle ){
                var fieldsStyles = ['default', 'classic', 'classic-rounded', 'modern', 'modern-rounded', 'custom']

                if( fieldsStyles.indexOf(options.fieldsStyle) >= 0 ) {
                    form.classList.add(options.fieldsStyle + '-style');
                }
                else{
                    form.classList.add("default-style");
                }
            }

            if( options.action ){
                form.setAttribute("action", options.action || options.defaultAction);
            }
            else{
                if( !form.getAttribute("action") ) {
                    form.setAttribute("action", options.defaultAction);
                }
            }

            // init language
            self.lang = self.getLang() || "en";

            if( !form.getAttribute("enctype") ) form.setAttribute("enctype", "multipart/form-data");
            if( !form.getAttribute("method") ) form.setAttribute("method", "post");
            form.setAttribute("data-simple-form-id", "sf-" + self.getRandomInt(201, 999));
            form.setAttribute("data-lang", self.lang);

            var langInput = document.createElement("input");
                langInput.type = "hidden";
                langInput.name = "sf-language";
                langInput.value = self.lang;
                form.appendChild(langInput);

            if( options.browserValidation === false ) {
                form.setAttribute("novalidate", "");
            }

            if( options.formCSS && options.formCSS.length ) {
                form.setAttribute("style", options.formCSS);
            }

            self.initValidation(form);
            self.initCaptcha(form);
            self.initConsent(form);
            // self.initFiles(form);
            self.initAccessibility(form);
            self.handleFormSubmit(form);
        };

        // init each form
        if(forms.length){
            for(var f = 0; f < forms.length; f++){
                self.initForm(forms[f]);
            }
        }

        return self;
    }

})(window);