
class Postage
{
    constructor(titulo, urlImg, descricao) 
    {
        
        this.tituloRef = titulo;
        this.urlImg = urlImg;
        this.descricao = descricao;

    }

    cadastrar()
    {
        this.lerDados();
    }

    lerDados()
    {
        alert('Funcionou!');
    }
}

var postage = new Postage();

  document.querySelector('#postar').addEventListener('click', (event) => postage.cadastrar(event));
