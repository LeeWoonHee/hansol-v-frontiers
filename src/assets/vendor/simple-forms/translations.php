<?php
/**
 * Simple Forms Localization File
 *
 * @link http://projects.lucas-games.com/simple-forms/
 *
 * @package simpleforms
 */

/***********************************************************************************
 * Default language for server response
 ***********************************************************************************/
static $lang = 'en';


/***********************************************************************************
 * Fixme: array of strings
 *
 * please add translations for your language,
 * see examples bellow
 *
 * do not remove any translation item
 ***********************************************************************************/

$info_strings = []; // prepare translations array

// English
$info_strings['en'] = [
    'title_success'     => ' Success ',
    'message_success'   => ' Thanks for submitting the form',
    'title_error'       => ' Error ',
    'message_error'     => ' Something’s wrong! Check form fields for errors and try again. ',
    'email_send_error'  => ' Email send failed ... Please try again. ',
    'required'          => ' - field is required. ',
    'use_post'          => ' Please use a POST request. ',
    'phone_error'       => ' Please enter a valid phone number. ',
    'email_error'       => ' Please enter a valid e-mail address. ',
    'name_error'        => ' Please enter a valid name (letters and whitespace only). ',
    'date_error'        => ' Please enter valid date. ',
    'url_error'         => ' Please provide a valid url. ',
    'captcha_error'     => ' You are a BOT! '
];

// Русский 
$info_strings['ru'] = [
    'title_success'     => ' Форма отправлена ',
    'message_success'   => ' Форма отправлена. Проверьте Вашу почту',
    'title_error'       => ' Ошибка ',
    'message_error'     => ' Чтото пошло не так. Попробуйте снова...  ',
    'email_send_error'  => ' Чтото пошло не так. Попробуйте снова...  ',
    'required'          => ' - обязательно для заполнения. ',
    'use_post'          => ' Пожалуйста используйте POST запрос. ',
    'phone_error'       => ' пожалуйста, введите правильный номер телефона. ',
    'email_error'       => ' пожалуйста, введите действительный адрес электронной почты. ',
    'name_error'        => ' в поле имени допускаются только буквы и пробелы. ',
    'date_error'        => ' пожалуйста, введите правильную дату. ',
    'url_error'         => ' пожалуйста, введите корректный адрес URL. ',
    'captcha_error'     => ' Ты бот! '
];
