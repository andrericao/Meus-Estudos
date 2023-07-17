<?php

  $dbHost = 'localhost';
  $dbUserName = 'root';
  $dbPassword = '';
  $dbName = 'formulario_gn';

  $conexao = new mysqli($dbHost,$dbUserName,$dbPassword,$dbName);

  /*if($conexao->connect_errno)
  {
    echo "Erro";
  }
  else
  {
    echo "Conexão efetuada com sucesso!";
  }*/


?>