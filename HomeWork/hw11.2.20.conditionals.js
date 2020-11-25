// INSTRUCTIONS

// Q1:
// Given the variable: let string = 'Nebula Academy'
// Create a function that checks to see if the letter 'a' exists in the string - 
// If it does exist, return the string: 'The letter a exists in the string: (string)'
// If it does not exist, return the string: 'the letter a does not exist'
// let string = 'Nebula Academy';
// function school (greatness){
//     if (greatness.indexOf('a') >= 0){
//         return 'The letter a exists in the string'
//     }else {
//         return 'the letter a does not exist'
//     }
// }
// console.log(school(string))

// Q2:
// Create a function that checks to see if the argument passed into this function is an array or not.
// If it is an array, return the string: 'it's an array!'
// If it's not an array, return the string: 'It's not an array!'
// function fruit (orange){
//     if (Array.isArray(orange)){
//         return 'It is an array!'
//     }else{
//         return 'It is not an array!'
//     }
// }
// console.log(fruit('string'));                           //It is  an array!
// console.log(fruit(['string', 'array', 'function']));    //It is an array!
// console.log(fruit(5,3,7));                              //It is not an array!
// console.log(fruit([7, 5, 3]));                          //It is an array!

// Q3:
// Create a function that checks to see if any number passed into this function is an even number or an odd number.
// If the number is an even number, return the string: '(number) is an even number'
// If the number is an odd number, return the string: '(number) is an odd number'
// function isNumEven (num){
//     if (num % 2 === 1 ){
//         return `${num} is an odd number`
//     } 
//     if (num % 2 === 0){
//         return `${num} is an even number`
//     } else {
//         return 'this is not a number'
//     }
// }
// console.log(isNumEven(16))
// console.log(isNumEven(15))
// console.log(isNumEven(26))
// console.log(isNumEven('string'))


// function moduloFour (num){
//     if (num % 4 === 0){
//         return `${num} is an even number`
//     }
//     if (num % 4 === 2){
//         return `${num} is an even number`
//     }
//     else {
//         return `${num} is an odd number`
//     }
// }

// console.log(moduloFour(26))
// console.log(moduloFour(38))

function evenOdd (number){
    if (number % 2 === 1){
        return `${number} is an odd number`
    }
    if (number % 2 === 0){
        return `${number} is an even number`
    }else {
    return 'this is not a number '
    }
}
console.log(evenOdd(3));
console.log(evenOdd(54));
console.log(evenOdd(7));
console.log(evenOdd(44));

// Q4:
// Create a function that checks the data type of any argument passed into this function.
// If the argument is a number, return the string: 'it's a number'
// If the argument is a string, return the string: 'it's a string'
// If the argument is a boolean, return the string: 'it's a boolean'
function checkingDataType(data){
    if (typeof data === 'number'){
        return 'it is a number'
    }
    if (typeof data === 'string'){
        return 'it is a string'
    }
    if (typeof data === 'boolean'){
        return 'it is a boolean'
    }
}
console.log(checkingDataType(7));
console.log(checkingDataType('love'));
console.log(checkingDataType(true));
console.log(checkingDataType(3));
console.log(checkingDataType(false));
console.log(checkingDataType('unconditional'));

// Q5:
// Create a function that takes in two numbers as parameters: num1 and num2.
// If num1 is greater than num2, return the string: '(num1) is greater than (num2)'
// If num1 is less than num2, return the string: (num1) is less than (num2)'
// And if num1 and num2 are equal to each other, return the string, '(num1) and (num2) are equal'
function parameters (num1, num2){
    if (num1 > num2) {
        return '(num1) is greater than (num2)'
    }
    if (num2 < num1) {
        return '(num1) is less than (num2)'
    }
    if (num1 == num2){
        return '(num1) and (num2) are equal'
    }
}
console.log(parameters(3, 7));
console.log(parameters(7, 3));
console.log(parameters(54, 44));
console.log(parameters(44, 54));
console.log(parameters(9, 9));
console.log(parameters(2, 1));
console.log(parameters(5, 5));
console.log(parameters(3, 3));