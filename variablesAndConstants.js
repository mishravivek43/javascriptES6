/*
Variable is a placeholder for information(data);
we can assign and reassign variable as many times we want in js

There are three types of Identifier declaration possible in js
var, let and const

var =>var is function scoped 
let => let is block scoped
const => const is also block scoped

both var and let variables can be declared and defined seperately
but const must be defined at the time of declaration.
in js identifiers const can not be rebounded once bind

In other words const arrays and const objects are still mutable 

Primitive values => i.e. numbers, strings, booleans, symbols, null or undefined are always immutable when declared as const.
 to make Object immutable we use Object.freez() property 

*/
//decalring varible value=undefined
var firstVariable;

//declaring and defining variable
var secondVariable = 'second';

// = is assignment operator




const newFunction = function () {
   

    let letOne = "Humanity is best";

    const S = " ";
    varOne = "Saare Jahan se acha";
   
    let letTwo = "Religion";
    if(true){
        var varTwo = "Hindostan Hamara";
       let letThree = "Indeed";
    }
    //var is function scoped so this console recognises varTwo
    console.log(varOne + S + varTwo);
//Where as the following line will not recognise and will give you an error;

 //console.log(letThree) => This will give error;   

 //This will work fine
    console.log(letOne + S+ letTwo);

//You can not change primitive value of const
S = "Javascript"; 
//This wont work it will not give u an error but will not work either   
console.log("I Love "+S);
 /*
*** Example of Javascript Hoisting   ***  
Variable Defined first and Declared Later
*/
var varOne;    

}

newFunction();
//console.log(varOne+s+constOne+s+letOne+s+letTwo+s+constTwo+s);
