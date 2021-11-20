// To continuously watch a file instead of constantly compiling it, run tsc --watch app.ts
// To create a TS config file, run tsc --init (change 'target' to ES6)
// To use TS with React, run npx create-react-app my-app --template typescript

let id: number = 5
let company: string = 'Starbucks'
let isPublished: boolean = true
let z:any = 'Hello'
let ids: number[] = [1,2,3,4,5]
let tup: [number, string, boolean] = [1, 'hello', true]  // <---- TUPLE
let pid: string | number = 5     // <---- UNION
enum Direction { up = 1, down, left, right }     // <---- ENUM
console.log(Direction.left)
function addNum(a:number, b:number): number {      // <---- FUNCTION TYPE
    return a + b
}


// Interfaces (similar to Aliase defined below)
interface DrinkInterface {
    id: number
    name: string
    color?: string   // '?' makes this an optional key/value
    readonly maker: string   // readonly makes this key unchangeable
}

const drink1: DrinkInterface = {
    id: 5,
    name: 'San Pellegrino',
    maker: 'Nestle'
}
console.log(drink1)


// Using Types
function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    if(showResult){
        console.log(phrase + (num1 - num2))
    } else {
        console.log(phrase + (num1 + num2))
    }
}

const number1 = 3
const number2 = 7
const printResult = Math.random() > 0.5
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase)


// Object type
// const person: {
//     name: string;
//     age: number
//     hobbies: string[],
//     role: [number, string]  <--- THIS IS A TUPLE TYPE; SPECIAL ARRAY WITH EXACTLY 2 ELEMENTS WITH 1ST ELEM NUM AND 2ND A STRING
// } = {
    // Better TS Syntax
    const person = {
    name: 'Rabie',
    age: 23,
    hobbies: ['reading', 'tennis']
}

console.log(person.name)


// Array Type
let favoriteActivities: string[];  //Must be an array of strings
let random: any[];  //Can be an array of any values


// ENUMS
enum Position{ GK, DEF, MID, FWD };

const player = {
    name: 'Mo Salah',
    team: 'Liverpool',
    position: Position.FWD  //returns 3
}

console.log(player)



// Union Types (When you want to accept more than 1 value types)
function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    console.log(result)
}
combine(12,54)
combine('Anna', 'Lou')



// Literal Types



// Aliase Type (used to prevent repitition for union types)
type Combinable = number | string;

function aliase(input1: Combinable, input2: Combinable) {
    console.log(input1, input2)
}
aliase(5, 'chicken')



// Function types
function subtract(n1: number, n2: number) {
    return n1 - n2
}

// let subtractedValue: Function  //This is very general; we are saying subtractedValue can be ANY function
let subtractedValue: (a: number, b: number) => number  // Here we specify subtractedValue is a function that take 2 params and returns a number
subtractedValue = subtract
console.log(subtractedValue(15, 5))



// Class Types
class City {
    name: string
    country: string

    constructor(name: string, country: string) {
        this.name = name
        this.country = country
    }
}

const paris = new City('Paris', 'France')
console.log(paris)