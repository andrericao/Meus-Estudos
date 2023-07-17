<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roadpedia</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/base/reset.css">
    <link rel="stylesheet" href="./css/layout/text.css">
    <link rel="stylesheet" href="./css/module/button.css">
    <link rel="stylesheet" href="./css/theme/default.css">
    <link rel="stylesheet" href="./css/theme/azul.css">
    <link rel="stylesheet" href="./css/state/is.css">
  </head>
  <body>
    <header>
      <p class="projetos text-center"><a href="index.php"><u>projetos</u> ... ></a></p>
      <nav class="navbar navbar-expand-lg nav-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.php">Roadpedia</a>
          <form class="pesquisa d-flex" role="search">
            <input class="bg-dark" type="search" placeholder="   Buscar..." aria-label="Search">
            <button class="btn" type="submit">
              <img src="./img/icon/recursos_visuais/search-icon.webp" class="img-fluid" alt="">
            </button>
          </form>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar ms-auto">
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="./index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Carreiras</a>
                <ul class="dropdown-menu">
                  <li class="bg-dark"><a href="./pages/1-concurso.php" class="dropdown-item menu-dropdown">Concurso</a></li>
                  <li class="bg-dark"><a href="./pages/2-esporte.php" class="dropdown-item menu-dropdown">Esporte</a></li>
                  <li class="bg-dark"><a href="./pages/3-artista.php" class="dropdown-item menu-dropdown">Artista</a></li>
                  <li class="bg-dark"><a href="./pages/4-superior.php" class="dropdown-item menu-dropdown">Superior</a></li>
                  <li class="bg-dark"><a href="./pages/5-tecnico.php" class="dropdown-item menu-dropdown">Técnico</a></li>
                </ul>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="./pages/sobre/sobre.html">Sobre</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="./pages/duvidas/duvidas.html">Dúvidas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./pages/login/login.html">Login</a>
              </li>
          </ul>                    
      </div>
        </div>
      </nav>
    </header>