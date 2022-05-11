'use strict'
const friends=[2,3,4,5,6,7];
console.log(friends);
const years=new Array(1,2,3,4);//arrays are objects in javascript
console.log(years)
console.log(friends[0]);

console.log(friends.length)//not zero based same like in c language
//expression will evaluate to value
//.length is a method
friends[2]='jay'
console.log(friends)
//array in javascript can have different datatype as well
//we declared it as const but still we can change because only primitive data type is immutable
//we will learn about it in the module how javascript works behind the scenes

const jonas=[10,2030]
//array basic methods so that we get used to arrays

friends.push(90)//adds element to the end of the array
console.log(friends)
//the size of the array gets increased when we use push
//the push function will return the value of the new array
friends.unshift(20);
//returns the length of the array
console.log(friends)
//adds element to the start and increases the size of the array
friends.pop()
//removes the last element
//will returned the popped element
friends.shift()//will remove the first element
//returns the element that is returned
console.log(friends.indexOf(20))
//returns the index of the element 20 and element not present we will get -1
//include return true or false depending if element is present or not
