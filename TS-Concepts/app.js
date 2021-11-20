// To continuously watch a file instead of constantly compiling it, run tsc --watch app.ts
// To create a TS config file, run tsc --init (change 'target' to ES6)
// To use TS with React, run npx create-react-app my-app --template typescript
var id = 5;
var company = 'Starbucks';
var isPublished = true;
var z = 'Hello';
var ids = [1, 2, 3, 4, 5];
var tup = [1, 'hello', true]; // <---- TUPLE
var pid = 5; // <---- UNION
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {})); // <---- ENUM
console.log(Direction.left);
function addNum(a, b) {
    return a + b;
}
var drink1 = {
    id: 5,
    name: 'San Pellegrino',
    maker: 'Nestle'
};
console.log(drink1);
// Using Types
function add(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (num1 - num2));
    }
    else {
        console.log(phrase + (num1 + num2));
    }
}
var number1 = 3;
var number2 = 7;
var printResult = Math.random() > 0.5;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// Object type
// const person: {
//     name: string;
//     age: number
//     hobbies: string[],
//     role: [number, string]  <--- THIS IS A TUPLE TYPE; SPECIAL ARRAY WITH EXACTLY 2 ELEMENTS WITH 1ST ELEM NUM AND 2ND A STRING
// } = {
// Better TS Syntax
var person = {
    name: 'Rabie',
    age: 23,
    hobbies: ['reading', 'tennis']
};
console.log(person.name);
// Array Type
var favoriteActivities; //Must be an array of strings
var random; //Can be an array of any values
// ENUMS
var Position;
(function (Position) {
    Position[Position["GK"] = 0] = "GK";
    Position[Position["DEF"] = 1] = "DEF";
    Position[Position["MID"] = 2] = "MID";
    Position[Position["FWD"] = 3] = "FWD";
})(Position || (Position = {}));
;
var player = {
    name: 'Mo Salah',
    team: 'Liverpool',
    position: Position.FWD //returns 3
};
console.log(player);
// Union Types (When you want to accept more than 1 value types)
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log(result);
}
combine(12, 54);
combine('Anna', 'Lou');
function aliase(input1, input2) {
    console.log(input1, input2);
}
aliase(5, 'chicken');
// Function types
function subtract(n1, n2) {
    return n1 - n2;
}
// let subtractedValue: Function  //This is very general; we are saying subtractedValue can be ANY function
var subtractedValue; // Here we specify subtractedValue is a function that take 2 params and returns a number
subtractedValue = subtract;
console.log(subtractedValue(15, 5));
// Class Types
var City = /** @class */ (function () {
    function City(name, country) {
        this.name = name;
        this.country = country;
    }
    return City;
}());
var paris = new City('Paris', 'France');
console.log(paris);
