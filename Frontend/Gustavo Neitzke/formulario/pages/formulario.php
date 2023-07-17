<?php

if(isset($_POST['submit']))
{
 /*   print_r('Nome: ' . $_POST['nome']);
    print_r('<br>');
    print_r('Email: ' . $_POST['email']);
    print_r('<br>');
    print_r('Telefone: ' . $_POST['telefone']);
    print_r('<br>');
    print_r('Sexo: ' . $_POST['genero']);
    print_r('<br>');
    print_r('Data de Nascimento: ' . $_POST['data_nascimento']);
    print_r('<br>');
    print_r('Cidade: ' . $_POST['cidade']);
    print_r('<br>');
    print_r('Estado: ' . $_POST['estado']);
    print_r('<br>');
    print_r('Endereço: ' . $_POST['endereco']);*/

    include_once('config.php');

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $telefone = $_POST['telefone'];
    $sexo = $_POST['genero'];
    $data_nascimento = $_POST['data_nascimento'];
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];
    $endereco = $_POST['endereco'];

    $result = mysqli_query($conexao, "INSERT INTO usuarios(nome,email,senha,telefone,sexo,data_nasc,cidade,estado,endereco) 
    VALUES ('$nome','$email','$senha','$telefone','$sexo','$data_nascimento','$cidade','$estado','$endereco')");
  }

  header('Location: login.html');
?> 

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário</title>
  <link rel="stylesheet" href="../style/style.css">
</head>
<body>
  <a href="home.html">voltar</a>
  <div class="form_box">
    <form action="formulario.php" method="post">
      <fieldset>
        <legend>
          <b>Formulário de Clientes</b>
        </legend>
          <br>
          <div class="form_box_input">
            <input type="text" name="nome" id="nome" class="form_box_inputUser" required>
            <label for="nome" class="form_box_label">Nome Completo</label>
          </div>
          <br>
          <br>
            <div class="form_box_input">
              <input type="text" name="email" id="email" class="form_box_inputUser" required>
              <label for="email" class="form_box_label">Email</label>
            </div>
            <br>
            <br>
            <div class="form_box_input">
              <input type="password" name="senha" id="senha" class="form_box_inputUser" required>
              <label for="senha" class="form_box_label">Senha</label>
            </div>
            <br>
            <br>
            <div class="form_box_input">
              <input type="tel" name="telefone" id="telefone" class="form_box_inputUser" required>
              <label for="telefone" class="form_box_label">Telefone</label>
            </div>
            <p>Sexo</p>
            <input type="radio" id="feminino" name="genero" value="feminino" required> 
            <label for="feminino">Feminino</label>
            <br>
            <input type="radio" id="masculino" name="genero" value="masculino" required> 
            <label for="masculino">Masculino</label>
            <br>
            <input type="radio" id="outro" name="genero" value="outro" required> 
            <label for="outro">Outro</label>
            <br>
            <br>
              <label for="data_nascimento"><b>Data de Nascimento:</b></label>
              <input type="date" name="data_nascimento" id="data_nascimento"required>
            <br>
            <br>
            <div class="form_box_input">
              <input type="text" name="cidade" id="cidade" class="form_box_inputUser" required>
              <label for="cidade" class="form_box_label">Cidade</label>
            </div>
            <br>
            <br>
            <div class="form_box_input">
              <input type="text" name="estado" id="estado" class="form_box_inputUser" required>
              <label for="estado" class="form_box_label">Estado</label>
            </div>
            <br>
            <br>
            <div class="form_box_input">
              <input type="text" name="endereco" id="endereco" class="form_box_inputUser" required>
              <label for="endereco" class="form_box_label">Endereço</label>
            </div>
            <br>
            <br>
            <input type="submit" name="submit" id="submit">
      </fieldset>
    </form>
  </div>
  
</body>
</html>