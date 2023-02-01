<?php

    include_once('config.php');

    if(isset($_POST['update']))
    {
      $usuario_id = $_POST['usuario_id'];
      $nome = $_POST['nome'];
      $email = $_POST['email'];
      $senha = $_POST['senha'];
      $telefone = $_POST['telefone'];
      $sexo = $_POST['genero'];
      $data_nascimento = $_POST['data_nascimento'];
      $cidade = $_POST['cidade'];
      $estado = $_POST['estado'];
      $endereco = $_POST['endereco'];

      $sqlUpdate = "UPDATE usuarios SET nome='$nome', email='$email',senha='$senha',telefone='$telefone',sexo='$sexo',data_nasc='$data_nascimento',cidade='$cidade',estado='$estado',endereco='$endereco' WHERE usuario_id='$usuario_id'";

      $result = $conexao->query($sqlUpdate);
    }

    header('Location: sistema.php')

?>