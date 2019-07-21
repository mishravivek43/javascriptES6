/*
Author=>Vivek Mishra
syllogism =>
1.
All Men are Mortals
Soretes is a men
Socrate is mortal


2.
Cake can either be chocolate or vannila 
This cake is not chocolate
Therefore cake is vanilla

*/




//Intiate Constructor For Men
function MenConstructor(name, age) {
    this.name = name;
    this.age = age;
    //All Men are Mortals
    this.mortal = true;
}
const gandhi = new MenConstructor('Gandhi', 60);

//Soretes is a men
const socrates = new MenConstructor('Socrates', 40);
const washington = new MenConstructor('Washington', 50);
const mandela = new MenConstructor('Mandela', 80);

let Men = [gandhi, socrates, washington, mandela];


//Socrate is mortal
// if (socrates.mortal) {
//     console.log(socrates.name + ' is Mortal');
// }


//Defining the function
let checkMortality = function (name) {
    if (typeof name === 'string') {
        let nameExists = Men.filter((man) => man.name === name);
        if (nameExists.length >= 1) {
            if (nameExists[0].mortal) {
                console.log(name + ' is mortal');
            } else {
                //this will never be true unless mortal is false
                console.log(name + ' is not mortal');
            }
        } else {
            console.log('We could not find ' + name);
        }
    } else {
        console.log('Entered name is not a string');
    }
}

let man = 'Gandhi',
    animal = 'dog',
    notDefined;
    checkMortality(man);
    checkMortality(animal);
    checkMortality(notDefined);

console.log('**********************');
console.log('Cake Problem');
console.log('**********************');
//Intiate Constructor For Cake
function CakeConstructor(sweetness) {

    this.sweetness = sweetness;
    //Cake can either be chocolate or vannila 
    if (this.sweetness > 6) {
        this.type = "vannila"
    } else {
        this.type = "chocolate";
    }


}

const cake1 = new CakeConstructor(9);
const cake2 = new CakeConstructor(6);


let cakes = [cake1,cake2];

const getTypeOfCake= (cakeArr,isChocolate) => {
    //typeof array is equal to 'object' in js
    if(Array.isArray(cakeArr)){
    //Ternary Function    
    let myCake = isChocolate ? cakeArr.filter((cake) =>cake.type === 'chocolate') : cakeArr.filter((cake) =>cake.type !== 'chocolate');

    if(myCake.length > 0){
        console.log(myCake);
        return 'Yeah, we got the  '+myCake[0].type +' flavour';

    }else{

        return 'Sorry! The '+ isChocolate ? 'chocolate':'vanilla' + ' is nnot available'  ; 
    }    
    } else{
        
     return "Oh! You are out of cakes now"   
    }

}
console.log(getTypeOfCake(cakes,true));
console.log(getTypeOfCake(cakes,false));
console.log(getTypeOfCake('Fruit Jam',true));
/*
//if(This cake is not chocolate)
if (cake1.type !== 'chocolate') {
    //Therefore cake is vanilla
    console.log('This cake is vanilla');
} else {
    //else cake is chocolate
    console.log('This cake is chocolate');
}
*/