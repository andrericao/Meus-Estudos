var head = [1,2,3,4,5]
// MEU CÓDIGO
var middleNode = function(head) {
  let byTwo = head.length
if(byTwo % 2 == 0) {
  byTwo = (byTwo / 2)
} else {
  byTwo = ((byTwo - 1) / 2) 
}
  byTwo--
  let limit = byTwo
for(byTwo; byTwo <= limit && byTwo >= 0; byTwo--) {
  head.shift(head[byTwo])
}
return head
};
console.log('MEU CÓDIGO')
console.log(middleNode(head));

// RESPOSTA POSTADA NO LEETCODE 1
var middleNode1 = function(head) {
  let lo = head, hi = head;
  while (hi && hi.next) {
      lo = lo.next;
      hi = hi.next.next;
  }
  return lo;
};
console.log('RESPOSTA POSTADA NO LEETCODE 1')
console.log(middleNode1(head));

// RESPOSTA POSTADA NO LEETCODE 2

let middleNode2 = function(head) {
  let hi = head, count = 1;
  while (hi.next) {
      hi = hi.next;
      count++;
  }
  console.log(count,'count');
  count = parseInt(count / 2);

  while(count){
      head=head.next;
      count--;
  }
  return head;
};
console.log('RESPOSTA POSTADA NO LEETCODE 2')
console.log(middleNode2(head));