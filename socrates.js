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
console.log('**********************');
console.log('Socrates Problem');
console.log('**********************');
//Intiate Constructor For Men
function MenConstructor(name, age) {
    this.name = name;
    this.age = age;
    //All Men are Mortals
    this.mortal = true;
}
const gandhi = new MenConstructor('Gandhi', 60);

//soretes is a men
const socrates = new MenConstructor('Socrates', 40);
const washington = new MenConstructor('Washington', 50);
const mandela = new MenConstructor('Mandela', 80);

// let Men = [gandhi,socrates,washington,mandela];


//Socrate is mortal
if (socrates.mortal) {
    console.log(socrates.name + ' is Mortel');
}
console.log('**********************');
console.log('Cake Problem');
console.log('**********************');

//Intiate Constructor For Cake
function CakeConstructor(sweetness) {

    this.sweetness = sweetness;
    //cake can either be chocolate or vannila 
    if (this.sweetness > 6) {
        this.type = "vannila"
    } else {
        this.type = "chocolate";
    }


}

const cake1 = new CakeConstructor(9);

//soretes is a men
const cake2 = new CakeConstructor(6);

// let cakes = [cake1,cake2];
//if(This cake is not chocolate)
if (cake1.type !== 'chocolate'){
    //therefore cake is vanilla
    console.log('This cake is vanilla');
}else{
    //else cake is chocolate
    console.log('This cake is chocolate');
}