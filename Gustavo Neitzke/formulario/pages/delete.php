<?php

if(!empty($_GET['usuario_id']))
{
  include_once('config.php');

  $usuario_id = $_GET['usuario_id'];

  $sqlSelect = "SELECT * FROM usuarios WHERE usuario_id = $usuario_id";

  $result = $conexao->query($sqlSelect);

    //print_r($result);

  if ($result->num_rows > 0) 
  {
    $sqlDelete = "DELETE FROM usuarios WHERE usuario_id=$usuario_id";
    $resultDelete = $conexao->query($sqlDelete);
  } 
}

header('Location: sistema.php');
?>