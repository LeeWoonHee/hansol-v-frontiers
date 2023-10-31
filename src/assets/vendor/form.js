/**
 * FORM SETUP - PARTICLE THEME - DELIVERY
 * --------------------------------------
 * NOTE: This is the adaptation of the original code, form Particle theme.
 * ONLY CHANGE 1: siteKey (ctrl+f CHANGEME)
 * possibly change customSuccessMessage if you want
 * change debug if you want to look for errors
 * change lang, but follow orignial documentation as we don't provide
 * support for this.
 * ---------------------------------------------------------------------
 * Original code is available at http://projects.lucas-games.com/simple-forms/
 * but these are the options we used. If you want to build a custom form
 * You will need to completely remove our integration and follow the
 * Documentation on the link above. Alternatively, you can try to
 * modify our existing forms but we will not provide support for that.
 */

var simple_forms = new SimpleForms("#contact-form", {
    action: "assets/vendor/simple-forms/sendmail.php", // (!!Don't change in Particle) set form action attribute, default value: simple-forms/sendmail.php
    lang: "en",                          // language for error/info strings
    theme: "faded-dark",                 // (!!Don't change in Particle) form color theme, options: white | dark | purple | red | green | blue | faded-light | faded-dark
    fieldsStyle: "default",              // (!!Don't change in Particle) form fields style, options: default | classic | classic-rounded | modern | modern-rounded
    ajaxSubmit: true,                    // (!!Don't change in Particle) send form using AJAX (no page reload)
    validate: true,                      // (!!Don't change in Particle) enable form fields validation
    validateOnKeyup: true,               // (!!Don't change in Particle) validate form fields On KeyUp Event
    browserValidation: false,            // (!!Don't change in Particle) use browser validation
    tooltips: true,                      // (!!Don't change in Particle) show validation errors as tooltips, if false will show errors as strings bellow the field
    showErrors: true,                    // (!!Don't change in Particle) show validation errors
    debug: false,                         // enable debugging mode (will show errors in browser console)
    hideFormAfterSubmit: false,          // (!!Don't change in Particle) hide the form after submit
    customSuccessMessage: "",            // overwrite server response with a custom message
    formCSS: "",                         // (!!Don't change in Particle) add css styles to the form, example: box-shadow: none;
    redirect: {
        enabled: false,                  //  (!!Don't change in Particle) enable redirect after form submit
        url: "success.html",             //  (!!Don't change in Particle) url to redirect to
        timeout: 3                       //  (!!Don't change in Particle) redirect timeout (seconds), leave 0 for instant redirect
    },
    captcha: {							 // (!! Particle, we used (and tested) recaptcha-v3)
        enabled: true,                   // enable captcha
        type: "recaptcha-v3",            // set captcha type, options: math | recaptcha-v2 | recaptcha-v3
        siteKey: "CHANGEME",                     // recaptcha SITE KEY, generate here: https://www.google.com/recaptcha/admin/create
        theme: "light"                   // recaptcha theme color, options: light | dark
    },
    accessibility: {
        escapeReset: true,               // press ESC key to reset/clear all form fields and files
        tabHighlight: false              // press tab to highlight form fields
    },
    consent: false,                     // enable submit button after consent checkbox is checked
    validator: {
        rules: {                        // add custom validation rules
            ".validate-name": {         //  (!!Don't change in Particle) select form field with class .validate-name
                required: true,         //  (!!Don't change in Particle) add required attribute to form field
                min: 2,                 //  (!!Don't change in Particle) set field min attribute
                max: 30,                //  (!!Don't change in Particle) set field max attribute
                name: true              //  (!!Don't change in Particle) attach NAME validation
            },
            ".validate-email": {
                required: true,
                min: 8,
                email: true              //  (!!Don't change in Particle) attach EMAIL validation
            }
        }
    }
});