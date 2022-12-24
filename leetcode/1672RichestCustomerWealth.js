/*You are given an m x n integer grid accounts where accounts[i][j] 
is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.*/

 let maisRico = function(array){
  let soma = 0
  for (let i = 0; i < array.length; i++){
    let acumulador = 0
    for(let j = 0; j < array[i].length; j++) {
      acumulador += array[i][j];
    }
    if (soma < acumulador) soma = acumulador
  } 
  return soma
 }

let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(maisRico(nums));
let oito = 8
let seis =  6
let nums2 = Math.max(oito, seis)
console.log(nums2)

var maximumWealth = function(accounts) {
 // var res = 0;
  let soma = 0
  for(var i = 0; i < accounts.length; i++){
      var temp = 0;
      for(var j = 0; j <accounts[i].length; j++){
          temp+=accounts[i][j];
      }
      if(temp > soma) soma = temp
      //res = Math.max(res,temp);
  }
  return soma;
};

console.log(maisRico(nums))

//console.log(addAoArray(nums));
/*
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    
    return nums;
};*/

// MAP
/*let runningSum = (A, sum = 0) => A.map(x => sum += x);

console.log(runningSum(1, sum=0));
*/