var readline = require('readline');

var rl1 = readline.createInterface(process.stdin, process.stdout);
var rl2 = readline.createInterface(process.stdin, process.stdout);

rl1.question('1 - Celsius para Fahrenheit? ', (opcao) => {
  console.log('O resultado é' + opcao + '°C');
});

rl2.question('2 - Fahrenheit para Celsius? ', (graus) => {
  console.log('O resultado é' + graus + '°F');
});

/*
if (rl1 == )
// (0 °C × 9/5) + 32 = 32 °F

*/