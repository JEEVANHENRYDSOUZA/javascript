'use strict';//will help us debug easily by showing the errors
function calculate_age(birthYear){//this is function declaration
    return 3007-birthYear;

}
//console.log(calculate_age(30));


const calculation=function(birthyear){//this is an expression
    return 3007-birthyear;
}
console.log(calculation(1991));
//function in javascript are like values
//function declaration vs expression is can call the function before its declaration but we cant do the same with expression
//this happens because of hoisting
