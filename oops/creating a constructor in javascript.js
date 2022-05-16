'use strict'


const person=function(firstName,birthYear){

    this.firstName=firstName;
    this.birthYear=birthYear
//this refers to the current instance of the object


}

const p=new person('jonas',1997)//since new is placed person becomes  a constructor 

console.log(p.firstName)
