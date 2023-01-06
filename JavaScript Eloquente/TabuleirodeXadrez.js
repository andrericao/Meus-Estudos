/*
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres. 
A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um tabuleiro de xadrez.

Passando esta string para o console.log deve mostrar algo como isto:

  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #

Quando você tiver o programa que gere este padrão, defina a variável size = 8 e altere 
programa para que ele funcione para qualquer size, a saída da grade de largura e altura.
*/

var size = 8;
var line = '';

for(var i = 0; i < size; i++) {

    for(var j = 0; j < size; j++){

    if ((i + j) % 2 == 0) {
    line += "#";
    } else {
    line += " ";
    }
  } line += "\n"

}

console.log(line);


/* TEST
AQUI NÃO HOUVE A SOMA DE "I" COM "J" ==> HERE THERE WAS NO SUM OF "I" WITH "J"
for (var j = 0; j < size + 16; j++){
  for (var i = 0; i < size + 16; i++) {
    (i % 2 == 0) ? line += "#" : line += " "
  } line += "\n experiência \n" 
}
*/
console.log(line)