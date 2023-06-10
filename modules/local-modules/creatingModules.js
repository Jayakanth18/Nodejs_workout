let myName = 'Jayakanth';
let myAge = 22;

function greet(userName){
    console.log('Hello',userName)
}

const object = {
    Name : 'Arun',
    Roll_No : 1,
    Ph_No: 9998887776,
    Address : 'Chennai'
}

class Car{
    constructor(model,color){
        this.model = model
        this.color = color
    }  
}


module.exports.myName = myName;
module.exports.myAge = myAge;
module.exports.greet = greet;
module.exports.car = Car;
