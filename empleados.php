<?php
    header('Access-Control-Allow-Origin: *');
    $servidor = "localhost:33065";
    $usuario="root";
    $password="";
    $bd="empleados";
    $mysql=new mysqli($servidor,$usuario,$password,$bd);
    if($_REQUEST['accion']=="leer"){
        $arreglo=array();

        $consulta="SELECT id,nombre,puesto,edad FROM empleados";

        if($resultado=$mysql->query($consulta)){
            while($row = $resultado->fetch_array(MYSQLI_ASSOC)){
                $arreglo[]=$row;
            }
            echo json_encode($arreglo);
        }
        $resultado->close();
    }
    else if($_REQUEST['accion']=="insertar") {
        $sql="INSERT into empleados (nombre,puesto,edad) values ('".$_POST["nombre"]."', '".$_POST["puesto"]."' , '".$_POST["edad"]."')";
        if($mysql->query($sql) === TRUE){
            echo "1";
        }else {
            echo "0";
        }
    }
    else if($_REQUEST['accion']=="editar") {
        $sql="UPDATE empleados set nombre='".$_POST["nombre"]."',puesto='".$_POST["puesto"]."',edad='".$_POST["edad"]."' WHERE id='".$_POST["id"]."' "; 
        if($mysql->query($sql) === TRUE){
            echo "1";
        }else {
            echo "0";
        }
    }
    $mysql->close();

?>