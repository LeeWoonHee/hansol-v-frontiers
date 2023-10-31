<?php
/**
 * Simple Forms Mail Sender Script
 *
 * @link http://projects.lucas-games.com/simple-forms/
 *
 * @package simpleforms
 */

/***********************************************************************************
 * Show/Hide all PHP errors for the user
 * recommended value, 0
 ***********************************************************************************/
error_reporting(0); // possible values: 0 | E_ALL


if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    /***********************************************************************************
     * Include Config, Translations & Simple Forms Core Scripts
     *
     * Please do not remove this lines
     ***********************************************************************************/

    include_once "config.php";
    include_once "translations.php";
    include_once "core/PHPMailerAutoload.php";
    include_once "core/simple-forms-core.php";



    /***********************************************************************************
     * Set the language for server response
     ***********************************************************************************/
    setLang();


    /*************************************************************************************
     * EMAIL BODY SETTINGS
     *
     * Here you can choose desired email template,
     * use available email templates from /email-templates/ folder
     *
     * options: default-email-template | minimal-email-template | modern-email-template
     ************************************************************************************/

    // build email body content
    $emailBody = prepare_email($_POST, "default-email-template");

    // read attachments
    $attachments = [];
    if( count($_POST['ajax-file']) > 0 ){
        $attachments = $_POST['ajax-file'];
    }

    // sending the mail
    if( send_mail(YOUR_EMAIL, EMAILS_SUBJECT, $emailBody, $attachments) ) {
        // if send mail success, do ...
        $response = [
            'status'  => 'success',
            'message' => $info_strings[$lang]['message_success']
        ];

        // send auto response
        send_autoresponse( secure($_POST['email']) );

        // return JSON response
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }
    else {
        // if send mail error, do ...
        $response = [
            'status'  => 'error',
            'message' => ['Error'],
            'errors'  => $info_strings[$lang]['email_send_error']
        ];

        // return JSON response
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }
}
else
{
    // Direct access of this file will trow use POST error
    $response = [
        'status'  => 'error',
        'message' => ['Error'],
        'errors'  => ['Please use a POST request']
    ];

    // return JSON response
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    return false;
}
