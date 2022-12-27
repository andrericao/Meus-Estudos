/*

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 */
/*
var isIsomorphic = function(s, t) {
  function getpairs(){
    var a = [];
    for (var i=0; i<s.length; i++){
      a[i] = s[i] + t[i];
      console.log(a)
    }
    return a;
  }
  if(s.length == t.length){
    
    var pairs = getpairs();
    //console.log(pairs('egg', 'add'));
    for (var i=0; i<s.length; i++){
      var index = s.indexOf(pairs[i][0]);
      console.log(index)
      if(t[index] !== pairs[i][1]){
        return false;
      }
      
      var index2 = t.indexOf(pairs[i][1]);
      console.log(index2)
      if(s[index2] !== pairs[i][0]){
        return false;
      }
    }
    
    
    return true;
  } else {
    return false;
  }

};
console.log(isIsomorphic('egg', 'add'))
*/
var isIsomorphic2 = function(s, t) {
  function getPairs(){
    var st = []
    let i = 0
    while(i < s.length) {
    st[i] = s[i] + t[i];
    console.log(st)
    i++
    } 
    return st
  }

  if(s.length == t.length) {

    var pairs = getPairs();
    let i = 0 
    while (i < s.length) {
    //for(let i = 0; i < s.length; i++) {
      var index = s.indexOf(pairs[i][0]);
      console.log(index)
      if(t[index] != pairs[i][1]) return false;

      var index2 = t.indexOf(pairs[i][1])
      console.log(index2)
      if(s[index2] != pairs[i][0] ) return false
      i++
    }
    return true
  } else true
};

console.log(isIsomorphic2('badc', 'baba')); // certo é false