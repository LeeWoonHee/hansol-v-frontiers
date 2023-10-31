<?php
/**
 * The Simple Forms Core
 *
 * @link http://projects.lucas-games.com/simple-forms/
 *
 * @package simpleforms
 */

// prepare JSON response array
$response = [
    'status'  => '',
    'message' => '',
    'errors'  => []
];

function secure($var){
    if(!empty($var)) return stripslashes(htmlspecialchars(trim($var)));
    else return false;
}

function bytes_to_mb($size){
    if(!empty($size)) return $fileSize = number_format(round($size / 1024 / 1024,4), 1);
    return 0;
}

function is_valid_date($entry_date){
    if( !empty($entry_date) ){
        if( preg_match('/\d{4}\.\d{2}.\d{2}/', $entry_date)    ||
            preg_match('/\d{4}\-\d{2}-\d{2}/', $entry_date)    ||
            preg_match('/\d{4}\\/\d{2}\\/\d{2}/', $entry_date) ||

            preg_match('/\d{2}\.\d{2}.\d{4}/', $entry_date)    ||
            preg_match('/\d{2}\-\d{2}-\d{4}/', $entry_date)    ||
            preg_match('/\d{2}\\/\d{2}\\/\d{4}/', $entry_date)
        ){
            return true;
        }
        else return false;
    }
    return false;
}

function is_valid_url($url){
    if(substr($url, 0, 7) == 'http://' || substr($url, 0, 8) == 'https://'){
        if(preg_match('%^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@|\d{1,3}(?:\.\d{1,3}){3}|(?:(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)(?:\.(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)*(?:\.[a-z\x{00a1}-\x{ffff}]{2,6}))(?::\d+)?(?:[^\s]*)?$%iu', $url)){
            return true;
        }
    }
    else{
        $url = 'http://' . $url;
        if(preg_match('%^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@|\d{1,3}(?:\.\d{1,3}){3}|(?:(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)(?:\.(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)*(?:\.[a-z\x{00a1}-\x{ffff}]{2,6}))(?::\d+)?(?:[^\s]*)?$%iu', $url)){
            return true;
        }
    }

    return false;
}

function recaptcha_status($token = "", $secretKey = ""){
    if(!empty($token) and !empty($secretKey)){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => $secretKey, 'response' => $token)));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $rs = curl_exec($ch);
        curl_close($ch);
        $arrResponse = json_decode($rs, true);

        // prepare response array
        $response = [
            'status' => '',
            'score'  => 0,
            'errors' => []
        ];

        if( count($arrResponse["error-codes"]) > 0 ){
            $response['status'] = 'error';
            $response['errors'][] = 'reCaptcha: '. $arrResponse["error-codes"][0];
        }

        if($arrResponse["success"] == '1')  {
            if( !empty($arrResponse["score"] ) ) {
                $response['status'] = 'success';
                $response['score']  = $arrResponse["score"];
            }
            else{
                $response['status'] = 'success';
            }
        }

        return $response;
    }

    return false;
}

function prepare_email($postData = [], $emailTemplate = "default-email-template", $attachments = true, $autoResponder = false, $autoResponderTemplate = "default"){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if( is_array($postData) and count($postData) > 1 ){
            global $lang, $info_strings;

            // print_r($postData);

            // * required fields
            $required_fields = ['name', 'email', 'phone']; // add fields names here

            // FIXME: set your fields names which needs to be validated
            $phone_fields    = ['phone', 'tel', 'telephone'];                                         // phone fields
            $email_fields    = ['email', 'mail', 'e-mail'];                                           // e-mail fields
            $name_fields     = ['name', 'first-name', 'last-name', 'username', 'login'];              // name fields
            $date_fields     = ['date', 'start-date', 'end-date'];                                    // date fields
            $url_fields      = ['url', 'link', 'website', 'profile', 'profile-url', 'web', 'social']; // url fields

            // excluded fields will not appear on received email
            $excluded_fields = ['agree', 'accept-terms', 'consent', 'accept_terms',  'g-recaptcha-response', 'sf-recaptcha-version', 'math-solver-min', 'math-solver-max', 'math-solver', 'sf-language']; // add fields names

            // FIXME: validation patterns
            $name_pattern    = '~^[\p{L}\p{Z}]+$~u'; // only letters and white space allowed
            $email_pattern   = '/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,})$/i';

            // recaptcha settings
            $use_recaptcha  = USE_RECAPTCHA;


            // validate post data
            foreach ($_POST as $key => $value) {
                $value = secure($value);

                // check if required fields are not empty
                if( empty($value) and in_array($key, $required_fields) ){
                    $response['errors'][] = strtolower($key . $info_strings[$lang]['required']);
                }

                if( !empty($value) ){
                    // validate phone fields
                    if( in_array($key, $phone_fields) ){
                        $valid_number = filter_var($value, FILTER_SANITIZE_NUMBER_INT);

                        if (strlen($valid_number) < 8 || strlen($valid_number) > 14) {
                            $response['errors'][] = strtolower($info_strings[$lang]['phone_error']);
                        }
                    }

                    // validate email fields
                    if( in_array($key, $email_fields) and !preg_match($email_pattern, $value) ){
                        $response['errors'][] = strtolower($info_strings[$lang]['email_error']);
                    }

                    // validate name fields
                    if( in_array($key, $name_fields) and !preg_match($name_pattern, $value) ){
                        $response['errors'][] = strtolower($info_strings[$lang]['name_error']);
                    }

                    // validate date fields
                    if( in_array($key, $date_fields) and !is_valid_date($value)){
                        $response['errors'][] = strtolower($info_strings[$lang]['date_error']);
                    }

                    // validate url fields
                    if( in_array($key, $url_fields) and !is_valid_url($value)){
                        $response['errors'][] = strtolower($info_strings[$lang]['url_error']);
                    }
                }
            }

            // recaptcha status check
            if( $use_recaptcha and isset($postData['g-recaptcha-response']) ){
                if( $postData['sf-recaptcha-version'] == "v2" ){
                    $recaptcha_v2_status = recaptcha_status($postData['g-recaptcha-response'], RECAPTCHA_V2_SECRET_KEY);

                    if( is_array($recaptcha_v2_status) and $recaptcha_v2_status['status'] == "error" ){
                        $response['errors'][] = $recaptcha_v2_status['errors'][0];
                    }
                }
                else if( $postData['sf-recaptcha-version'] == "v3" ){
                    $recaptcha_v3_status = recaptcha_status($postData['g-recaptcha-response'], RECAPTCHA_V3_SECRET_KEY);

                    if( is_array($recaptcha_v3_status) and $recaptcha_v3_status['status'] == "error" ){
                        $response['errors'][] = $recaptcha_v3_status['errors'][0];
                    }
                }
            }

            // if errors found return errors info
            if( isset($response['errors']) and count($response['errors']) > 0 )
            {
                $response['status'] = 'error';
                print json_encode($response, JSON_UNESCAPED_UNICODE);
                exit();
            }
            else
            {
                // prepare form data
                $form_data = "";
                $form_extended_info = "";

                // write form data
                foreach ($_POST as $key => $value){
                    $value = secure($value);

                    if( !in_array($key, $excluded_fields) and !empty($value) ){
                        $form_data .= "<p><strong>".ucfirst($key).":</strong> <span>$value</span></p>";
                    }
                }

                // set additional form information
                $user_IP = $_SERVER['REMOTE_ADDR'];
                $actual_link = $_SERVER['HTTP_REFERER'];
                $form_extended_info .= "<p><strong>User IP:</strong> <span>$user_IP</span></p>";
                $form_extended_info .= "<p><strong>Page:</strong> <span>$actual_link</span></p>";
                $email_templates_path = __DIR__.'/../email-templates/';
                $email_tpl = "";

                if( !empty($emailTemplate) and file_exists($email_templates_path . $emailTemplate .'.html') ){
                    $email_tpl = $email_templates_path . $emailTemplate .'.html';
                }
                else{
                    $email_tpl = $email_templates_path . 'default-email-template.html';
                }

                // add form data to email template
                $content    = file_get_contents($email_tpl);
                $content    = str_replace('{%SUBJECT%}', EMAILS_SUBJECT, $content);
                $content    = str_replace('{%FORM_DATA%}', $form_data, $content);
                $content    = str_replace('{%FORM_EXTENDED_INFO%}', $form_extended_info, $content);
                $content    = str_replace('{%IP%}', $user_IP, $content);

                return $content;
            }
        }
        else return false;
    }
    else{
        // Direct access of this file will trow use POST error
        $response = [
            'status'  => 'error',
            'message' => ['Error'],
            'errors'  => ['Please use a POST request']
        ];

        print json_encode($response, JSON_UNESCAPED_UNICODE);
        return false;
    }
}

function send_autoresponse($toEmail){
    if( !empty($toEmail) ){
        $auto_responder_template = __DIR__.'/../email-templates/autoresponder-email-template.html';

        if( !file_exists($auto_responder_template) ){
           return false;
        }

        $content = file_get_contents($auto_responder_template);

        if( !empty($content) ){

            return send_mail($toEmail, COMPANY_NAME, $content, [], true);
        }
        else {
            return false;
        }
    }

    return false;
}

function setLang(){
    global $lang, $info_strings;

    if( !empty( secure($_POST['sf-language']) ) ){
        if( isset($info_strings[secure($_POST['sf-language'])]) ){
            $lang = secure($_POST['sf-language']);
        }
    }
}

function send_mail($toEmail, $subject = "", $body = "", $files = [], $autoresponder = false){
    if( !empty($body) ){
        $fromEmail = "do-not-reply@" . $_SERVER['SERVER_NAME'];
        $fromName  = COMPANY_NAME;
        $cc        = SEND_COPY_TO;
        $toEmail   = (!empty($toEmail) ? $toEmail : YOUR_EMAIL);
        $subject   = (!empty($subject) ? $subject : EMAILS_SUBJECT);

        global $SMTP_SETTINGS;
        $smtp = $SMTP_SETTINGS;

        $mail = new PHPMailer;

        if( SMTP_AUTHENTICATION and is_array($smtp) and count($smtp) > 1 ){
            $debug = (!empty($smtp['SMTP_DEBUG']) ? $smtp['SMTP_DEBUG'] : 0);

            if( !empty($smtp['SMTP_HOST']) and !empty($smtp['SMTP_USER']) and !empty($smtp['SMTP_PASSWORD']) and !empty($smtp['SMTP_PORT']) ){
                $mail->isSMTP();                                  // Enable Secure Connection
                $mail->SMTPDebug  = $debug;                       // Showw errors descriptions
                $mail->Host       = $smtp['SMTP_HOST'];           // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                         // Enable SMTP authentication
                $mail->Username   = $smtp['SMTP_USER'];           // SMTP username
                $mail->Password   = $smtp['SMTP_PASSWORD'];       // SMTP password
                $mail->SMTPSecure = $smtp['SMTP_SECURE'];         // Enable TLS encryption
                $mail->Port       = $smtp['SMTP_PORT'];           // TCP port to connect to
            }
        }

        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($toEmail);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!';
        $mail->isHTML(true);

        if( !empty($_SERVER['SERVER_NAME']) and empty($cc) and !$autoresponder ){
            if( $_SERVER['SERVER_NAME'] == "projects.lucas-games.com"){
                $cc = $_POST['email'];
            }
        }

        if( !empty($cc) ){
            $cc_array = explode(",", $cc);

            foreach ($cc_array as $item) {
                $mail->AddCC(trim($item));
            }
        }

        if( !empty($files) and count($files) > 0 ){
            foreach ($files as $file) {
                $mail->addAttachment($file);
            }
        }

        if(!$mail->send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }
        else {
            if( DELETE_FILES_AFTER_MAIL ){
                if( !empty($files) and count($files) > 0 ){
                    foreach ($files as $file) {
                        $filePath = $file;
                        if( file_exists($filePath) ) unlink($filePath);
                    }
                }
            }

            $mail->clearAddresses();
            $mail->clearAttachments();

            return true;
        }
    }

    return false;
}
