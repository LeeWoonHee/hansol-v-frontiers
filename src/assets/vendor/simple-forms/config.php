<?php
/**
 * Simple Forms Configuration File
 *
 * @link http://projects.lucas-games.com/simple-forms/
 *
 * @package simpleforms
 */

/***********************************************************************************
 * Fixme: DEFAULT MAILING SETTINGS
 *
 * customize your mailing options,
 * do not remove any option line
 ***********************************************************************************/

define('COMPANY_NAME',    "Simple Forms");          // not required, but recommended
define('YOUR_EMAIL',      "colealucas@gmail.com");  // * Required, your email address, for example my-email@gmail.com
define('EMAILS_SUBJECT',  "New Form Submission");   // * Required, email subject
define('SEND_COPY_TO',    "");                      // not required, comma separated emails: myemail@gmail.com, myemail2@gmail.com

/*************************************************************************************
 * SECURE SSL/TLS CONNECTION SETTINGS (* required if SMTP_AUTHENTICATION = true)
 *
 * Use SECURE CONNECTION to prevent emails to be dropped in SPAM folder
 * or/if your server/hosting does not support other mailing options
 *
 * If SMTP_AUTHENTICATION set to true please provide SMTP SETTINGS bellow
 * see docs for more info: http://projects.lucas-games.com/simple-forms/
 ************************************************************************************/

define('SMTP_AUTHENTICATION', false); // possible values: true | false

static $SMTP_SETTINGS = [
    "SMTP_HOST"     => "mail.hostname.com",
    "SMTP_USER"     => "user@domain.com",
    "SMTP_PASSWORD" => "***************",
    "SMTP_SECURE"   => "ssl", // possible values: ssl | tls
    "SMTP_PORT"     => 465,
    "SMTP_DEBUG"    => 0      // show errors description if connection failed, possible values: 0 | 1
];


/*************************************************************************************
 * GOOGLE RECAPTCHA (ANTI SPAM) SETTINGS
 *
 * Generate your keys here: https://www.google.com/recaptcha/admin/create
 ************************************************************************************/

define('USE_RECAPTCHA', true);                                                 // possible values: true | false
// define("RECAPTCHA_V2_SECRET_KEY", '6Le4190ZAAAAAORJ9la65XZQrKlw9ClIIXBptM4B'); // recaptcha version 2 SECRET_KEY
define("RECAPTCHA_V3_SECRET_KEY", '6Lek4_EUAAAAAOwXH8H2AX2MT7ePYLTSIEUlKun5'); // recaptcha version 3 SECRET_KEY



/*************************************************************************************
 * FILES SETTINGS
 *
 * Choose to delete or keep uploaded files after receiving emails
 ************************************************************************************/
define("DELETE_FILES_AFTER_MAIL", true);


