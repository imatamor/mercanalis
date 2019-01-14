<?php

//header("Content-Type: text/html;charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Content-type:application/json");
include('db.php');

extract($_REQUEST);

$db 		= new db();
$sql 		= "SELECT * FROM elector;";
$response 	= $db->Select(utf8_decode($sql));

header("Content-Type: application/json",true);
echo json_encode(utf8_converter($response));



function utf8_converter($array)
{
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
                $item = utf8_encode($item);
        }
    });

    return $array;
}

?>