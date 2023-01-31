<?php
  session_start();
  //print_r($_SESSION);
  include_once('config.php');
  if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true))
  {
    unset($_SESSION['email']); 
    unset($_SESSION['senha']);
    header('Location: login.html');
  }
  $logado = $_SESSION['email'];

  $sql = "SELECT * FROM usuarios ORDER BY usuario_id DESC";

  $result = $conexao->query($sql);

  //print_r($result);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sistema</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="../style/sistema.css">
</head>
<body>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
  <div class="d-flex">
    <a href="sair.php" class="btn btn-danger me-5">Sair</a>
  </div>
</nav>
<br><br>
  <?php
    echo "<h1>Bem Vindo <u>$logado</u></h1>";
  ?>

  <div class="m-5">
     <table class="table text-white table-bg">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Senha</th>
          <th scope="col">Telefone</th>
          <th scope="col">Sexo</th>
          <th scope="col">Data de Nascimento</th>
          <th scope="col">Cidade</th>
          <th scope="col">Estado</th>
          <th scope="col">Endereço</th>
          <th scope="col">...</th>
        </tr>
      </thead>
      <tbody>
        <?php
            while($user_data = mysqli_fetch_assoc($result))
            {
              echo "<td>".$user_data['usuario_id']."</td>";
              echo "<td>".$user_data['nome']."</td>";
              echo "<td>".$user_data['email']."</td>";
              echo "<td>".$user_data['senha']."</td>";
              echo "<td>".$user_data['telefone']."</td>";
              echo "<td>".$user_data['sexo']."</td>";
              echo "<td>".$user_data['data_nasc']."</td>";
              echo "<td>".$user_data['cidade']."</td>";
              echo "<td>".$user_data['estado']."</td>";
              echo "<td>".$user_data['endereco']."</td>";
              echo "<td>ações</td>";
            }
        ?>
      </tbody>
    </table>
  </div>
</body>
</html>