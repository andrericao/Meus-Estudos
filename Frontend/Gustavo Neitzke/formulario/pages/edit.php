<?php

if (!empty($_GET['usuario_id'])) {

  include_once('config.php');

  $usuario_id = $_GET['usuario_id'];

  $sqlSelect = "SELECT * FROM usuarios WHERE usuario_id = $usuario_id";

  $result = $conexao->query($sqlSelect);

  //print_r($result);

  if ($result->num_rows > 0) {
    while ($user_data = mysqli_fetch_assoc($result)) {
      $nome = $user_data['nome'];
      $email = $user_data['email'];
      $senha = $user_data['senha'];
      $telefone = $user_data['telefone'];
      $sexo = $user_data['sexo'];
      $data_nascimento = $user_data['data_nasc'];
      $cidade = $user_data['cidade'];
      $estado = $user_data['estado'];
      $endereco = $user_data['endereco'];
    }
  } else
  {
    header('Location: sistema.php');
  }

}
else  
{
  header('Location: sistema.php');
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário | Edit</title>
  <link rel="stylesheet" href="../style/style.css">
</head>

<body>
  <a href="sistema.php">voltar</a>
  <div class="form_box">
    <form action="saveEdit.php" method="post">
      <fieldset>
        <legend>
          <b>Formulário de Clientes</b>
        </legend>
        <br>
        <div class="form_box_input">
          <input type="text" name="nome" id="nome" class="form_box_inputUser" value="<?php echo $nome ?>" required>
          <label for="nome" class="form_box_label">Nome Completo</label>
        </div>
        <br>
        <br>
        <div class="form_box_input">
          <input type="text" name="email" id="email" class="form_box_inputUser" value="<?php echo $email ?>" required>
          <label for="email" class="form_box_label">Email</label>
        </div>
        <br>
        <br>
        <div class="form_box_input">
          <input type="password" name="senha" id="senha" class="form_box_inputUser" value="<?php echo $senha ?>" required>
          <label for="senha" class="form_box_label">Senha</label>
        </div>
        <br>
        <br>
        <div class="form_box_input">
          <input type="tel" name="telefone" id="telefone" class="form_box_inputUser" value="<?php echo $telefone ?>" required>
          <label for="telefone" class="form_box_label">Telefone</label>
        </div>
        <p>Sexo</p>
        <input type="radio" id="feminino" name="genero" value="feminino" <?php echo ($sexo == 'feminino') ? 'checked' : '' ?> required>
        <label for="feminino">Feminino</label>
        <br>
        <input type="radio" id="masculino" name="genero" value="masculino" <?php echo ($sexo == 'masculino') ? 'checked' : '' ?> required>
        <label for="masculino">Masculino</label>
        <br>
        <input type="radio" id="outro" name="genero" value="outro" <?php echo ($sexo == 'outro') ? 'checked' : '' ?> required>
        <label for="outro">Outro</label>
        <br>
        <br>
        <label for="data_nascimento"><b>Data de Nascimento:</b></label>
        <input type="date" name="data_nascimento" id="data_nascimento" value="<?php echo $data_nascimento ?>" required>
        <br>
        <br>
        <div class="form_box_input">
          <input type="text" name="cidade" id="cidade" class="form_box_inputUser" value="<?php echo $cidade ?>" required>
          <label for="cidade" class="form_box_label">Cidade</label>
        </div>
        <br>
        <br>
        <div class="form_box_input">
          <input type="text" name="estado" id="estado" class="form_box_inputUser" value="<?php echo $estado ?>" required>
          <label for="estado" class="form_box_label">Estado</label>
        </div>
        <br>
        <br>
        <div class="form_box_input">
          <input type="text" name="endereco" id="endereco" class="form_box_inputUser" value="<?php echo $endereco ?>" required>
          <label for="endereco" class="form_box_label">Endereço</label>
        </div>
        <br>
        <br>
        <input type="hidden" name="usuario_id" value="<?php echo $usuario_id ?>">
        <input type="submit" name="update" id="update">
      </fieldset>
    </form>
  </div>

</body>

</html>