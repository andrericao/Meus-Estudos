/*
Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:

#
##
###
####
#####
######
####### 
*/

var hastag =''
var count = 0
while(count < 7) {
	hastag += '#'
	count++
	console.log(hastag)
}

//console.log(hastag)