const containerRef = document.querySelector('.posts');

const itens = [

    {
        urlImg: './imagens/godfrey.png',
        titulo: 'Godfrey, the first Elden Lord ',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },
    
    {
        urlImg: './imagens/malenia.png',
        titulo: 'Malenia Blade of Miquella',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },

    {
        urlImg: './imagens/starscourge.png',
        titulo: 'Starscourge Radahn',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'    
    },

    {
        urlImg: './imagens/ranni.png',
        titulo: 'Ranni the Witch',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },

    {
        urlImg: './imagens/ballid.png',
        titulo: 'Balidd',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },

    {
        urlImg: './imagens/mohg.png',
        titulo: 'Mohg, Lord of Blood',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    }

    
]


// ================================================

const tituloRef = document.querySelector('#titulo');
const urlImgRef = document.querySelector('#url');
const descricaoRef = document.querySelector('#descricao');
const botaoPostarRef = document.querySelector('#postar') ;

let teste = [];

class Postage
{
    constructor() 
    {
        this.id = 1;
        this.arrayPostagem = [];

    }

    salvarPostagem()
    {
        let novoPost = this.lerDados();

       // if(this.validaCampos(novoPost))
        //{
           this.adicionarPostagem(novoPost);
       // }

        this.listaPostagens();

       // this.cancelar();
      
       // console.log(this.arrayPostagem);
    }

    listaPostagens()
    {
        let containerRef = document.querySelector('.posts');
        containerRef.innerHTML = '';

        for (let item of this.arrayPostagem) 
        {

            containerRef.innerHTML += 
            `
                <div class="item">

                    <img src="${item.urlImg}">
                    <h2>${item.titulo}</h2>
                    <p>${item.descricao}</p>

                </div>
            `

        };
    }

    adicionarPostagem(novoPost)
    {
        this.arrayPostagem.unshift(novoPost);
        this.id++;
    }

    lerDados()
    {
        let novoPost = {};
        novoPost.id = this.id
        novoPost.titulo = document.querySelector('#titulo').value;
        novoPost.urlImg = document.querySelector('#url').value;
        novoPost.descricao = document.querySelector('#descricao').value;

        return novoPost
    }

    login (event)
    {
        event.preventDefault();
    }

    /*validaCampos(novoPost)
    {
        let msg = '';


        if(novoPost.titulo == '')
        {
            msg += '- Preencha o titulo da postagem \n';
        }

        if(novoPost.urlImg == '')
        {
            msg += '- Preencha o endereço da imagem \n';
        }

        if(novoPost.descricao == '')
        {
            msg += '- Preencha a descrição da postagem\n';
        }

        if(msg != '')
        {
            alert(msg);
            return false;
        }
        return true
    }*/

    cancelar()
    {
        document.querySelector('#titulo').value = '';
        document.querySelector('#url').value = '';
        document.querySelector('#descricao').value = '';
    }
}

let novoPost = new Postage();

let nomeh2 = document.querySelector(h2);

if(novoPost != '')
{
    nomeh2.classlist.toggle("classeComDisplayNone")
}

document.querySelector('#postar').addEventListener('click', (event) => novoPost.login(event));

document.querySelector('#postar').addEventListener('click', (event) => novoPost.salvarPostagem(event));

//criarPost(tituloRef, urlImgRef, descricaoRef);

//criarPost('Senhor dos Anéis', 'Hobbit', 'Lorem Ipsus');

//console.log(teste);

function validarTitulo(titulo) {

    itens.titulo = titulo

}

function validarImg(urlImg) {

    itens.img = urlImg

}

function validarDescricao(descricao) {

    itens.descricao = descricao
}

tituloRef.addEventListener('keyup', (event) => validarTitulo(event.target.value));

urlImgRef.addEventListener('keyup', (event) => validarImg(event.target.value));

descricaoRef.addEventListener('keyup', (event) => validarDescricao(event.target.value));

//botaoPostarRef.addEventListener('click', (event) => criarPost(event.target.value, event.target.value, event.target.value));

/* CÓDIGO PROFESSSOR IVIN ÚLTIMA AULA


window.addEventListener('load', () => console.log('carregou'))

const userEmailRef = document.querySelector('#userEmail')
const userPasswordRef = document.querySelector('#userPassword')
const loginButtonRef = document.querySelector('#loginButton')

var userData = {
    email: '',
    password: ''
}

function validarSenha(senha) {

    userData.password = senha

}



function validarEmail(email) {

    userData.email = email

}



function login(event) {

    event.preventDefault()

}

userEmailRef.addEventListener('keyup', (event) => validarEmail(event.target.value))

userPasswordRef.addEventListener('keyup', (event) => validarSenha(event.target.value))

loginButtonRef.addEventListener('click', (event) => login(event))
*/


