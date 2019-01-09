<?php

//header("Content-Type: text/html;charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

include('db.php');

extract($_REQUEST);

$db 		= new db();
$table		= "";
if($db->parametro($request_type) == 0)
	$table	= "background";
else if($db->parametro($request_type) == 1)
	$table	= "animation";
else if($db->parametro($request_type) == 2)
	$table	= "logo";
else if($db->parametro($request_type) == 3)
	$table	= "music";


$sql 		= "SELECT * FROM ".$table." INNER JOIN subcategory_relation ON ".$table.".ID = subcategory_relation.object_ID WHERE subcategory_relation.subcategory_ID ='".$db->parametro($subcategory_ID)."';";
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
