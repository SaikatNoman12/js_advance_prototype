/* 
1. First old prototype constructor function;
*/

let player = {
    eat(){
        return ('Person eating.');
    },
    sleep(){
        return ('Person sleeping.');
    },
    play(){
        return ('person playing.');
    }
}

function Person(name, age){
    // create object and player object in person object; 
    let person = Object.create(player);

    person.name = name;
    person.age = age;

    return person;
}

const firstPlayer = Person('Abdullah', 30);

// console.log(firstPlayer.eat()); // return output Person eating;



/* 
2. Second old prototype constructor function;
*/
function PersonTwo(name, age){
    let person = Object.create(PersonTwo.prototype);

    person.name = name;
    person.age = age;

    return person;
}

// this methods are set in PersonTwo function prototype;
PersonTwo.prototype = {
    eat(){
        return 'Person eating.';
    },
    play(){
        return 'Person playing.';
    },
    sleep(){
        return 'Person sleeping';
    }
}


const secondPlayer = PersonTwo('Abu Hasnat', 40);
console.log(secondPlayer.play());  // return output 'Person playing.' ;





