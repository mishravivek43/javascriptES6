/*
Author=>Vivek Mishra
The time adder
it will yield out greater time unit when you add it.

*/



let timeAdder = (value1, label1, value2, label2) => {

    // console.log(typeof value1);
    // console.log(typeof label1);
    // console.log(typeof value2);
    // console.log(typeof label2);

    let selectSwitch = (value,label) => {
        let time = 0;
    switch(label){
        case 'second': case 'seconds':
        time = value;
        break;
        case 'minute': case 'minutes':
        time = value*60;
        break;
        case 'hour': case 'hours' :
        time = value*60*60;
        break;
        case 'day': case 'days' :
        time = value*60*60*24;
        break;
        default:
        return 0;
    }
        return time;
}
if(typeof value1 === 'number' && typeof value2 === 'number' && typeof label1 === 'string' && typeof label2 === 'string'){
    if(value1 > 1){
        if (label1.toLowerCase().charAt(label1.length-1) !== 's'){
            return 'The arguments passed is of unmatched type' ;
        }
    }else{
        if (label1.toLowerCase().charAt(label1.length-1) === 's'){
            return 'The arguments passed is of unmatched type' ;
        }
    }
    if(value2 > 1){
        if (label2.toLowerCase().charAt(label2.length-1) !== 's'){
            return 'The arguments passed is of unmatched type'; 
        }

    }else{
        if (label2.toLowerCase().charAt(label2.length-1) === 's'){
            return 'The arguments passed is of unmatched type' ;
        }
    }
    let time1 = selectSwitch(value1,label1);
    let time2 = selectSwitch(value2,label2);
    let totalTime = time1+time2 ;
    let finalTime = makeBiggerTime(totalTime);
    let finalTimeWithSingularityChack = singularityCheck(finalTime);
    return finalTimeWithSingularityChack;

}else{
    return 'The arguments passed is of wrong type'
}
}
function makeBiggerTime(timeT){
    // switch(timeT){
        if(timeT % (60*60*24) === 0){ 
        return [timeT / (60*60*24),'days'];
        }
        else if(timeT % (60*60) === 0){
        return [timeT / (60*60),'hours'];
        }
        else if(timeT % (60) === 0){
        return [timeT / 60,'minutes'];
        }
        else if(timeT % 1 === 0){
        return [timeT ,'seconds'];
        }
        else{
        return [0,'seconds'];
        }
    // }
}

function singularityCheck(array){
    if (array[0] <= 1){
        // array[1].charAt(array[1].length-1)
        array[1] = array[1].substring(0,array[1].length-1);
    }
    return array;
}
let totalTime = timeAdder(60,'seconds',70,'hours');
let totalTime2 = timeAdder(120,'minutes',22,'hours');
let totalTime3 = timeAdder(5,'second',4,'days');
let totalTime4 = timeAdder(true,false,4,'days');
let totalTime5 = timeAdder(1,'hours',9,'days');

console.log(totalTime,totalTime2,totalTime3,totalTime4,totalTime5);
//console.log(singularityCheck(makeBiggerTime(60)));
//console.log(singularityCheck(makeBiggerTime(60*60*24*5)));