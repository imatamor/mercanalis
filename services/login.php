<?php

include('db.php');

$db 		= new db();
$sql 		= "SELECT * FROM usuario where usuario = '".$_REQUEST['usuario']."' AND password = '".$_REQUEST['password']."' AND activo = '1';";
$response = $db->Select($sql);

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