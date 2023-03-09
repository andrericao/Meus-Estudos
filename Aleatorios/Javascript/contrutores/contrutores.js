let containerRef = document.querySelector('.posts')

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
    },

    
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

}




// ================================================



function Usuario(valorId, valorName,valorIdade,valorAltura,valorPeso){
  this.id = valorId;
  this.name = valorName;
  this.idade = valorIdade;
  this.altura = valorAltura;
  this.peso = valorPeso;
}

const pessoas = [];

function adicionarPessoas()
{
  let pessoa = new Usuario(1,"João",18,1.9,87);
}
const jose = new Usuario(2,"José",19,1.8,77);

//console.log(joao);

pessoas.unshift(joao);
pessoas.unshift(jose);
 console.log(pessoas);
