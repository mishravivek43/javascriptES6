/*
*Author=>Vivek Mishra 
*The Fizzbuzz program
* The program wil determine if the number is divisible by 3 or 5 or both 
* and it will also determine the prime number
* 
* 

*/
//Prime Number a number which is divisible by 1 and itself
//In program use a reverse statement
//i.e Number is not divisible by any other number except 1 and itself
function isPrime(num) {
    counter = 0;
    if (num === 2) {
        return true;
    } else if (num < 2) {
        return false;
    } else {
        //Except 1 and itself so we start with 2 
        //other workarounds may be
        // for (let i = 2; i  < num; i++) { //=>slowest
        // for (let i = 2; i  < num/2; i++) { //=>better
        //The below one is one of the fastest
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                counter++;
                return false;
            }
        }
        return true;
    }
}

for(let i=1; i<=100;i++){
    if(isPrime(i)){
        console.log('prime');
    }else if(i % 15 === 0){
        console.log('fizzbuzz');
    }else if(i % 5 === 0){
        console.log('buzz');
    }else if(i % 3 === 0){
        console.log('fizz');
    }else{
       console.log(i);
    } 
}