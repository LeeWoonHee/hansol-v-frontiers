<?php
/**
 * Simple Forms Files Upload Handler
 *
 * @link http://projects.lucas-games.com/simple-forms/
 *
 * @package simpleforms
 */

error_reporting(0);

// /temp-uploads folder will be created in the same folder where is this file located
define('upload_folder_name', 'temp-uploads');

// here will be stored uploaded file path, Example: temp_form_files/5f1061bd1927d-filename.jpg
$temp_file_path = '';

// max allowed file size in MB
$max_file_size = 24;

// allowed files extensions
$allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'tif', 'webp', 'svg', 'doc', 'docx', 'xls', 'zip', 'rar', 'txt', 'pdf', 'mp4', 'mp3', 'mov'];

// prepare response array, here are stored upload status and errors if any
$response = [];
$response['status'] = 'success';

// strings array, multilingual friendly, feel free to add your translations
$info_strings['en'] = [
    'success'         => 'Success',
    'move_error'      => 'failed to move uploaded file',
    'max_size_error'  => 'Max file size: <b>' . $max_file_size . 'MB</b>',
    'extension_error' => ' files not allowed'
];

$info_strings['ro'] = [
    'success'         => 'Success',
    'move_error'      => 'Transferarea fisierului nu a reusit',
    'max_size_error'  => 'Marimea limita este: <b>' . $max_file_size . 'MB</b>',
    'extension_error' => ' fisiere nu sunt acceptate'
];


// set default language to English
$lang = 'en';

function bytes_to_mb($size){
    if(!empty($size)) return $fileSize = number_format(round($size / 1024 / 1024,4), 1);
    return 0;
}

foreach ($_FILES as $k => $v){
    if(is_array($v) and !empty($v['name']) ){
        $file_name      = preg_replace('/\s+/', '_', $v['name']);
        $original_size  = $v['size'];
        $file_size      = bytes_to_mb($v['size']);
        $file_extension = pathinfo($file_name, PATHINFO_EXTENSION);
        $new_name       = uniqid() . '-' . $file_name;
        $path           = upload_folder_name . '/' . $new_name;

        // validate max file size
        if( $file_size > $max_file_size) {
            $response['errors'][] = $info_strings[$lang]['max_size_error'];
        }

        // validate file extension
        if( empty($file_name) or !in_array($file_extension, $allowed_extensions)){
            $response['errors'][] = $file_extension . $info_strings[$lang]['extension_error'];
        }

        // create upload folder if not exist
        if (!file_exists(upload_folder_name)) {
            mkdir(upload_folder_name, 0777, true);
        }

        // move uploaded file to the folder
        if(move_uploaded_file($v['tmp_name'], $path)){
            $temp_file_path = $path;
        }
        else $response['errors'][] = strtolower($info_strings[$lang]['move_error'] . " [$file_name]");
    }
}

if( isset($response['errors']) and count($response['errors']) > 0){
    $response['status'] = 'error';
    print json_encode($response, JSON_FORCE_OBJECT);
}
else{
    $response['status'] = 'success';
    $response['url']    = $temp_file_path;
    $response['name']   = $file_name;
    $response['size']   = $original_size;
    print json_encode($response, JSON_FORCE_OBJECT);
}