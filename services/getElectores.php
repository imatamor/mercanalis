<?php

//header("Content-Type: text/html;charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Content-type:application/json");
include('db.php');

extract($_REQUEST);

$db 		= new db();
$sql 		= "SELECT `usuario`, `nombre`, `apellido`, `cedula`, `fecha_nacimiento`, `nombre_carnet`, `nombre_familia`, `ciudad`, `canton`, `parroquia`, `barrio`, `sector`, `direccion`, `estado_civil`, `numero_hijos`, `tiene_discapacidad`, `discapacidad`, `ocupacion`, `profesion`, `nivel_escolaridad`, `capacitacion_deseada`, `tiene_bono_gobierno`, `tiene_bono_municipio`, `telefono_convencional`, `telefono_celular`, `telefono_compania`, `tiene_whatsapp`, `whatsapp`, `tiene_facebook`, `facebook`, `tiene_instagram`, `instagram`, `tiene_twitter`, `twitter`, `correo_electronico`, `tiene_casa_propia`, `tiene_vehiculo`, `placa`, `seguro_medico`, `credito_agricola`, `otros`, `numero_contrato`, `image`, `uploaded`, `creado`, `editado`, `borrado`, `activo` FROM elector;";

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