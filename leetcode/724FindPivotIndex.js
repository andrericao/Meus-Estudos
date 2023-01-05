/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let i = 0
	//let soma = nums.reduce((a, b) => a + b, 0)
  let soma = 0
  while(i < nums.length) {
    soma += nums[i];
    i++
  }
	let left = 0
  i = 0
  //for(let i = 0; i < nums.length; i++) {
    while(i < nums.length) {
    let right = soma - left - nums[i]
    if (right == left) return i;
    left += nums[i];
    i++;
	} return i
};

let nums = [1,7,3,6,5,6]
let nums1 = [2,1,-1]
let nums2 = [1,2,3] 

console.log(pivotIndex(nums1))