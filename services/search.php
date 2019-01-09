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


$keywords   = preg_split("/[\s,]+/", $db->parametro($search_text));
$exceptions = array("el","la","los","las","un","una","unos","unas");

$sql        = "SELECT ".$table.".ID, ".$table.".code FROM ".$table." INNER JOIN keyword ON ".$table.".ID = keyword.object_ID INNER JOIN subcategory ON keyword.subcategory_ID = subcategory.ID INNER JOIN category ON subcategory.category_ID = category.ID WHERE category.type = '".$db->parametro($request_type)."' AND ";

$valid_text = false;

for ($i=0; $i < sizeof($keywords) ; $i++) 
{   
    if(!in_array($keywords[$i],$exceptions))
    {
        $valid_text = true;
        $sql = $sql."keyword.text LIKE '%".$keywords[$i]."%' OR "; 
    }
}
$sql = substr($sql, 0, -4);

/*echo $sql;
die();*/
/*$sql        = "SELECT ".$table.".ID, ".$table.".code FROM ".$table." INNER JOIN keyword ON ".$table.".ID = keyword.object_ID INNER JOIN subcategory ON keyword.subcategory_ID = subcategory.ID INNER JOIN category ON subcategory.category_ID = category.ID WHERE category.type = '".$db->parametro($request_type)."' AND keyword.text LIKE '%".$db->parametro($search_text)."%';";*/
$response 	= $db->Select(utf8_decode($sql));

if ($db->parametro($search_text) == '' || !$valid_text)
    $response = '';

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
