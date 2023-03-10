const containerRef = document.querySelectorAll('.posts');

const itens = [

    {
        img: './imagens/godfrey.png',
        titulo: 'Godfrey, the first Elden Lord ',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },
    
    {
        img: './imagens/malenia.png',
        titulo: 'Malenia Blade of Miquella',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },

    {
        img: './imagens/starscourge.png',
        titulo: 'Starscourge Radahn',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'    
    },

    {
        img: './imagens/ranni.png',
        titulo: 'Ranni the Witch',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },

    {
        img: './imagens/ballid.png',
        titulo: 'Balidd',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    },

    {
        img: './imagens/mohg.png',
        titulo: 'Mohg, Lord of Blood',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet, ipsa soluta debitis sed consectetur temporibus fugit maiores eum labore explicabo voluptates doloremque illo accusantium eius cupiditate aliquid amet facilis!'
    }

    
]

for (let item of itens) 
{

    containerRef.innerHTML += 
    `
        <div class="item">

            <img src="${item.img}">
            <h2>${item.titulo}</h2>
            <p>${item.descricao}</p>

        </div>
    `

};
// ================================================

const tituloRef = document.querySelector('#titulo');
const urlImgRef = document.querySelector('#url');
const descricaoRef = document.querySelector('#descricao');
const botaoPostarRef = document.querySelector('#postar') ;

let teste = [];

function Post(titulo, urlImg, descricao) {
    
    this.tituloRef = titulo;
    this.urlImg = urlImg;
    this.descricao = descricao;

};

function criarPost(titulo, urlImg, descricao) 
{
    //var novoPost = new Post(titulo, urlImg, descricao);
    var novoPost = new Post(titulo, urlImg, descricao);
    itens.unshift(novoPost);
    
};

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

botaoPostarRef.addEventListener('click', (event) => criarPost(event.target.value, event.target.value, event.target.value));

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