<?php
    header('Access-Control-Allow-Origin: *');
    $servidor = "localhost:33065";
    $usuario="root";
    $password="";
    $bd="empleados";
    $mysql=new mysqli($servidor,$usuario,$password,$bd);

    $arreglo=array();

    $consulta="SELECT id,nombre,puesto,edad FROM empleados";

    if($resultado=$mysql->query($consulta)){
        while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
            $arreglo[]=$row;
        }
        echo json_encode($arreglo);
    }
    $resultado->close();
    $mysql->close();

?>