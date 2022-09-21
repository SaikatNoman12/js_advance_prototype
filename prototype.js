/*== 
1. First old prototype constructor function;
==*/
let player = {
    eat() {
        return ('Person eating.');
    },
    sleep() {
        return ('Person sleeping.');
    },
    play() {
        return ('person playing.');
    }
}

function Person(name, age) {
    // create object and player object in person object; 
    const person = Object.create(player);
    // set object property and value;
    person.name = name;
    person.age = age;
    // return person object;
    return person;
}

// set Person function in firstPlayer;
const firstPlayer = Person('Abdullah', 30);

// check firstPlayer object is work or not;
console.log(firstPlayer.name); // return output '30';
console.log(firstPlayer.eat()); // return output 'Person eating';



/*== 
2. Second old prototype constructor function;
==*/
function PersonTwo(name, age) {
    // create person object and set PersonTwo prototype value;
    const person = Object.create(PersonTwo.prototype);
    // set object property and value;
    person.name = name;
    person.age = age;
    // return person object;
    return person;
}

// this methods are set in PersonTwo function prototype;
PersonTwo.prototype = {
    eat() {
        return 'Person eating.';
    },
    play() {
        return 'Person playing.';
    },
    sleep() {
        return 'Person sleeping';
    }
}

// set PersonTwo function in secondPlayer;
const secondPlayer = PersonTwo('Abu Hasnat', 40);

// check secondPlayer object is work or not;
console.log(secondPlayer.name);  // return output 'Abu Hasnat';
console.log(secondPlayer.play());  // return output 'Person playing.' ;



/* ========= Note: This 1st and 2nd do not use in constructor function prototype ========= */



/*==
3. Always use this constructor function. and use prototype;
==*/
const ConstructorFunction = function (name, age, language) {
    this.name = name;
    this.age = age;
    this.language = language;
}


/* === Note: When we use single methods as prototypes, we cannot use a multiple prototypes method. === */

// add separate method in constructor function; 
ConstructorFunction.prototype.eat = function () {
    return 'hello sir.';
}
ConstructorFunction.prototype.sleep = function () {
    return 'hello sleep.';
}

// Add new property values; 
ConstructorFunction.prototype.school = 'Sahin Academy School and Collage';


// constructor function call in new keyword;
const playerThree = new ConstructorFunction('Abu Mahin', '30', 'Bangla');

// check our constructorFunction is work or not; 
console.log(playerThree.school);  // return out 'Sahin Academy School and Collage' 
console.log(playerThree.sleep()); // return output 'hello sir.';



/*==
4. Always use this constructor function. and use prototype;
==*/
const ConstructorFunctionTwo = function (name, age, language) {
    this.name = name;
    this.age = age;
    this.language = language;
}

/* === Note: When we use multiple methods as prototypes, we cannot use a single prototype method. === */

// add multiple method in constructor function; 
ConstructorFunctionTwo.prototype = {
    eat() {
        return 'Sir is eating';
    },
    play() {
        return 'Sir is playing';
    },
    sleeping() {
        return 'Sir is sleeping';
    }
}

// Add new property values; 
ConstructorFunctionTwo.prototype.collage = 'Feni Computer Institute';

// constructor function call in new keyword. PersonFive constructor function object data store in playerFive object;;
const playerFour = new ConstructorFunctionTwo('Abu Mahin', '30', 'Bangla');

// check our playerFour object is work or not; 
console.log(playerFour.collage); // return output 'hello sir.';
console.log(playerFour.play()); // return output 'Sir is playing.';



/*==
5. JavaScript Class;
==*/

class PersonFive {
    constructor(name, age, lang) {
        this.name = name;
        this.age = age;
        this.language = lang;
    }
    //  class function;
    eat() {
        return 'All person eating.';
    }
    play() {
        return 'All person playing.';
    }
}

// constructor function call in new keyword. PersonFive constructor function object data store in playerFive object; 
const playerFive = new PersonFive('Mehedi Hasan', 30, 'English');

// check our playerFive object is work or not;
console.log(playerFive.name);
console.log(playerFive.play());








