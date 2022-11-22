var readline = require('readline');

function somar (a, b) {
  return a + b
}

// console.log(somar(5, 9))

module.exports = somar;

var duvida = readline.createInterface(process.stdin, process.stdout)

duvida.question('Quer converter 1 - Celsius em Fahrenheit ou 2 - Fahrenheit em Celsius? ', (opcao) => {
if (opcao == 1) {  
var grauC = readline.createInterface(process.stdin, process.stdout)
grauC.question('Quantos graus quer converter?', (valorC) => {
  resF = (valorC * 9 / 5) + 32  
  console.log('O resultado é ' + resF + '°F');
  })
  } else if (opcao == 2) {
  var grauF = readline.createInterface(process.stdin, process.stdout)
  grauF.question('Quantos graus quer converter?', (valorF) => {
  resC = (valorF - 32) * 5 / 9 
  console.log('O resultado é ' + resC + '°C');
  });
} else console.log("Resposta Inválida!")
});