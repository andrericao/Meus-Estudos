/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let array = [];
  for(let i = 1; i <= n; i++) {
    if(i % 3 == 0 && n % 5 == 0) {
      array.push('FizzBuzz')
    } else if(i % 3 == 0) {
      array.push('Fizz')
    } else if(i % 5 == 0) {
      array.push('Buzz')
    } else array.push(i.toString())
  }
  return array
};

console.log(fizzBuzz(100));