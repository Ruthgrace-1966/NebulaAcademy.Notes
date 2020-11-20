// INSTRUCTIONS

// Q1:
// Given the variable: let string = 'Nebula Academy'
// Create a function that checks to see if the letter 'a' exists in the string - if it does exist, return the string: 'The letter a exists in the string: (string)'
// If it does not exist, return the string: 'the letter a does not exist'

let string = 'Nebula Academy'
function doesAExist (string){
    if (string.indexOf('a') === -1){
        return 'the letter a does not exist'
    }
    else {
        return `the letter a exists in the string ${string}`
    }
}
console.log(doesAExist(school)) //the letter a exists in the string nebula academy

// function doesExist (string){
//     if (string.indexOf('a') >= 0){
//         return `the letter a exists in the string ${string}`
//     }
//     else {
//         return 'the letter a does not exist'
//     }
// }
// console.log(doesExist(school)) // the letter a exists in the string nebula academy
// console.log(doesExist('string'))  // the letter a does not exist

// Q2:
// Create a function that checks to see if the argument passed into this function is an array or not. If it is an array, return the string: 'it's an array!'
// If it's not an array, return the string: 'It's not an array!'

function waterBottle (eddy){
    if (Array.isArray(eddy)) {
        return 'It\'s an array'
    } 
    else {
        return 'It\'s not an array!'
    }
}
console.log(waterBottle(true)) // It's not an array!
console.log(waterBottle(['Maurice', 'Array'])) // It's an array
console.log(waterBottle('string')) // It's not an array!


// Q3:
// Create a function that checks to see if any number passed into this function is an even number or an odd number.
// If the number is an even number, return the string: '(number) is an even number'
// If the number is an odd number, return the string: '(number) is an odd number'
function isNumEven (num){
    if (num % 2 === 1 ){
        return `${num} is an odd number`
    } 
    if (num % 2 === 0){
        return `${num} is an even number`
    } else {
        return 'this is not a number'
    }
}
console.log(isNumEven(16))
console.log(isNumEven(15))
console.log(isNumEven(26))
console.log(isNumEven('string'))


function moduloFour (num){
    if (num % 4 === 0){
        return `${num} is an even number`
    }
    if (num % 4 === 2){
        return `${num} is an even number`
    }
    else {
        return `${num} is an odd number`
    }
}

console.log(moduloFour(26))
console.log(moduloFour(38))

 

// Q4:
// Create a function that checks the data type of any argument passed into this function. If the argument is a number, return the string: 'it's a number'
// If the argument is a string, return the string: 'it's a string'
// If the argument is a boolean, return the string: 'it's a boolean'

function checkDataType(data){
    if (typeof data === 'number'){
        return 'it\'s a number'
    }
    if (typeof data === 'string'){
        return 'it\'s a string'
    }
    if (typeof data === 'boolean'){
        return 'it\'s a boolean'
    }
}
console.log(checkDataType(9))
console.log(checkDataType('a'))
console.log(checkDataType(true))

// Q5:
// Create a function that takes in two numbers as parameters: num1 and num2
// If num1 is greater than num2, return the string: '(num1) is greater than (num2)'
// If num1 is less than num2, return the string: (num1) is less than (num2)'
// And if num1 and num2 are equal to each other, return the string, '(num1) and (num2) are equal'


