const prompt=require("prompt-sync")();
console.log("this will test the use of if else statement");
const marksBmi=28.3;
const johnsBmi=33
if(marksBmi > johnsBmi){
    const template=`mark has a greater bmi which is ${marksBmi} than johns which is ${johnsBmi}`;
    console.log(template);
}
else{
    const template2=`john has a greater bmi which is ${johnsBmi} than marks which is ${marksBmi}`;
    console.log(template2);
}

console.log("type conversion and coercion in javascript");
//when javascript automatically perform type conversion then it is called as coecrcion
//when we/the programmer write it in code then it is called as typecasting
//examples are below
const number=20;
var jeevan =2;
const finalvalue=Number("90")-10;
console.log(finalvalue);
//when javascript does it for us
const finalvalue2="90"-10;
console.log(finalvalue);
//when we have - ,*,/ operator in front of a string which is a number javascript will automatically convert it  to number
//but when we have + operator then javascript will treat it like a concatenation operator
