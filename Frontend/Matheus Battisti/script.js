const objs = [
  {
    nome: 'André',
    Idade: 30,
    Trabalha: true,
    detalhe_profissao: {
      profissao: 'programador',
      Empresa: 'XYZ'
    },
    Hobbie: ['Codar', 'Correr'],
  },
  {
    nome: 'Nathalia',
    Idade: 27,
    Trabalha: false,
    detalhe_profissao: {
      profissao: null,
      Empresa: null,
    },
    Hobbie: ['Ler', 'Instagram'],
  }
]

//console.log(objs)

//JSON
//Converter objetos para JSON

const jsondata = JSON.stringify(objs)
console.log(jsondata)

let series = require('./module')
console.log(series)