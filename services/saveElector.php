<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

extract($_REQUEST);

include('db.php');


$db = new db();
$sql = "INSERT INTO `elector`(`id`, `nombre`, `apellido`, `cedula`, `nombre_carnet`, `nombre_familia`, `ciudad`, `canton`, `parroquia`, `barrio`, `sector`, `direccion`, `estado_civil`, `numero_hijos`, `tiene_discapacidad`, `discapacidad`, `ocupacion`, `profesion`, `nivel_escolaridad`, `capacitacion_deseada`, `tiene_bono_gobierno`, `tiene_bono_municipio`, `telefono_convencional`, `telefono_celular`, `telefono_compania`, `tiene_whatsapp`, `whatsapp`, `tiene_facebook`, `facebook`, `tiene_instagram`, `instagram`, `tiene_twitter`, `twitter`, `correo_electronico`, `tiene_casa_propia`, `tiene_vehiculo`, `placa`, `seguro_medico`, `credito_agricola`, `otros`, `numero_contrato`, `image`, `creado`, `editado`, `borrado`, `activo`) VALUES (1,'".$db->parametro($nombre)."','".$db->parametro($apellido)."','".$db->parametro($cedula)."','".$db->parametro($nombre_carnet)."','".$db->parametro($nombre_familia)."','".$db->parametro($ciudad)."','".$db->parametro($canton)."','".$db->parametro($parroquia)."','".$db->parametro($barrio)."','".$db->parametro($sector)."','".$db->parametro($direccion)."','".$db->parametro($estado_civil)."','".$db->parametro($numero_hijos)."','".$db->parametro($tiene_discapacidad)."','".$db->parametro($discapacidad)."','".$db->parametro($ocupacion)."','".$db->parametro($profesion)."','".$db->parametro($nivel_escolaridad)."','".$db->parametro($capacitacion_deseada)."','".$db->parametro($tiene_bono_gobierno)."','".$db->parametro($tiene_bono_municipio)."','".$db->parametro($telefono_convencional)."','".$db->parametro($telefono_celular)."','".$db->parametro($telefono_compania)."','".$db->parametro($tiene_whatsapp)."','".$db->parametro($whatsapp)."','".$db->parametro($tiene_facebook)."','".$db->parametro($facebook)."','".$db->parametro($tiene_instagram)."','".$db->parametro($instagram)."','".$db->parametro($tiene_twitter)."','".$db->parametro($twitter)."','".$db->parametro($correo_electronico)."','".$db->parametro($tiene_casa_propia)."','".$db->parametro($tiene_vehiculo)."','".$db->parametro($placa)."','".$db->parametro($seguro_medico)."','".$db->parametro($credito_agricola)."','".$db->parametro($otros)."','".$db->parametro($numero_contrato)."','".$db->parametro($image)."',NOW(),'','',1);";

$response  = $db->Insert($sql);

header("Content-Type: application/json",true);
echo json_encode($response);

?>
