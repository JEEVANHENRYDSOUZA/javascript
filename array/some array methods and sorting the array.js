'use strict'
//arrays are objects in javascript hence they have some methods associated with it
let arr=[1,2,3,4]
//let b=arr.slice[2]
console.log(arr.slice(1))
console.log(arr.slice(-2))//negative indexing means we are travelling from the end to the start
console.log(arr)//the original array remains as it is no modification
//creating a shallow copy

//splice method will modify the original array declared

console.log(arr.splice(-1))
console.log(arr)//the original array is modified


//us the mdn documentation if we want to learn more about arrays

//reverse
let arr2=[1,2,3,4]
console.log(arr2)
console.log(arr2.reverse())
console.log(arr2)//array is changed
const numbers=arr.concat(arr2)//the concat method will be called on the array arr to concat it with arr2
console.log(numbers)
//new method in es6
let jeevan=[1000,12,3]

//console.log(jeevan.at(0))
//forEach method
 

//console.log(jeevan.sort())//sorting happens based on strings in javqscript

// in order to sort it based on numbers we need to do the following steps


var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a-b;////this for sorting numbers in ascending order
});

console.log(numArray);



numArray.sort(function(a, b) {
    return b-a;////this for sorting numbers in descending order
  });

console.log(numArray)




numArray.sort(function(a, b) {
    if(a>b)return 1;////this for sorting numbers in ascending order
    if(b>a)return -1;
  });


console.log(numArray)




numArray.sort(function(a, b) {
    
    if(a>b)return -1;////this for sorting numbers in descending order
    if(b>a)return 1;

  });

console.log(numArray)
