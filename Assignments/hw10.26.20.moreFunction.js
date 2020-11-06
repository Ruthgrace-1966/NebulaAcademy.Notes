INSTRUCTIONS

// Read eloquent JavaScript Chapter 3

// TAUSEEF
// Problem #1
// Create a function called sumNum that takes in two parameters: num1 and num2.
// This function will return the sum of num1 and num2

// function sumNum(num1, num2){
//     return num1 + num2
// }
// console.log(sumNum(5, 5))


// ADDITIONAL EXAMPLE

// function sumTheeParams (a1, mb2, t3){
//     return a1 + mb2 + t3;
// }
// console.log(sumTheeParams(1, 1, 1)); //2
// console.log(sumTheeParams('Aston Marten', ' MB', ' Tesla')) //Aston Marten MB

// CHELSEA
// Problem #2
// Create a function called divisionRemainder that takes In two parameters: num1 and num2.
// This function will divide (num1 and num2), calculate the remainder of num1/num2 and return the string: This function will return the  string: "(num1) divided by (num2) is (number) with a remainder of (remainder)"

// function divisionRemainder (num1, num2){
//     let problem2 = num1/num2
//     return `${num1} divided by ${num2} is ${Math.floor(problem2)} with a remainder of ${num1 % num2}`
// }
// console.log(divisionRemainder(10, 4)) // 10 divided by 4 is 2 with a remainder of 2

// EDDY
// function divisionRemainder (num1 , num2){
//  let answer = num1/num2
//  console.log(answer, 'answer')
//  let remainder = num1 % num2
//  console.log(remainder, 'remainder')

//  return `${num1} divided by ${num2} is ${Math.floor(answer)} with a remainder of ${remainder}`
// }
// console.log(divisionRemainder(144, 11)) // 144 divided by 11 is 13 with a remainder of 1


// function remainder(calculate){
//     return calculate
// }

// TAUSEEF
// Problem #3
// Create a function called randomNums that returns a random number from 0 to 1000

// function randomNums (){
//     return (Math.random() * 1000);
// }
// console.log(randomNums());

// function randomNums(num){
//     return (Math.random() * num);
// }
// console.log(randomNums(1000))
// console.log(randomNums(50))


// DAJA
// Problem #4
// Create a function called theType that takes in one parameter called: dataType
// This function will return the type of any argument passed into this function 

// function theType(dataType){
//     return typeof dataType;
// }
// console.log(theType('hey')) //string
// console.log(theType(10)) // number
// console.log(theType(true)) // boolean 


// Problem #5
// Create a function called isItArray that takes in one parameter called: arrayChecker
// This function returns whether the argument passed into this function is an array or not (the function should evaluate to either true or false)

// function isItArray(arrayChecker){
//     return Array.isArray(arrayChecker)
// }
// console.log(isItArray(7)) //false
// console.log(isItArray('string')) //false
// console.log(isItArray([1, 2, 3])) //true 


// Problem #6 
// Create a function called  fifthIndex that takes in a string as a parameter 
// This function finds the  5th index of any string passed into this function
// let name = 'Eddy Duroseau'

// function fifthIndex(aString){
//     return aString[5]
// }
// console.log(fifthIndex('this is another string')) // i
// console.log(fifthIndex(name)) // D

// Problem #7
// Create a function called myInitials that takes in two parameters: firstName and lastName
// This function returns the initials of the first and last name

// let first = 'Daja'
// let last = 'Mitchner'
// let eddy = ['Eddy', 'Duroseau']

// function myInitials (firstName, lastName){
//     return firstName[0] + lastName[0]
// }
// console.log(myInitials(first, last)) //DM
// console.log(myInitials('Chelsea', 'Merrill')) //CM
// console.log(myInitials(eddy[0], eddy[1])) //ED

// Problem #8
// Create a function called upperCase that takes in a string as a parameter
// This function returns any strings passed into the function in all uppercase letters

// let ED = 'Eddy Duroseau'

function upperCase (zoo){
    return zoo.toUpperCase()
}
// console.log(upperCase(ED)); //EDDY DUROSEAU
// console.log(upperCase('jasmine')) //JASMINE

// Problem #9
// Create a function called lastChar that takes in a string as a parameter
// This function returns the last character of any string passed into this function

// let lastCharacter = 'Anitria'

// function lastChar (parameter){
//     // console.log(parameter.length) // 7
//     // console.log(parameter.length - 1) //6

//     // console.log(parameter[6]) // a
//     // console.log(parameter[parameter.length - 1]) // a
//     return parameter[parameter.length - 1] // a
// }
// console.log(lastChar(lastCharacter)) //a
// console.log(lastChar('Daja')) // a
// console.log(lastChar('Chelsea Merrill')) // a


// Problem #10

// Using this array: 

let countries = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'Spain', 'Aruba', 'India', 'Japan', 'Morocco', 'Vietnam']
// let numbers =[1, 2, 3, 4, 5, 6, 7]
// let array = [[], [[], []], ['a', 'b'], [1, 2, 3]]

// Create a function called lastElement that takes in an array as a parameter
// Find the last element in the array and assign it to a variable
// This function returns the string: 'the last element in the array is (country)'

// function lastElement (countries){
//     let lastCountry = countries[countries.length - 1]
//     // console.log(lastCountry)
//     return `the last element in the array is ${lastCountry}`
// }
// console.log(lastElement(countries)) // Vietnam
// console.log(lastElement(numbers)) // 7
// console.log(lastElement(array)) // 1, 2, 3


// Create a function called: favoriteCountry that takes in an array as a parameter
// Add your favorite country at the beginning of the array
// This function returns the string: 'My favorite country is (country)'

// function favoriteCountry (favCountry){
//     favCountry.unshift('Puero Rico') 
//     return `my favorite country is ${favCountry[0]}`
// }
// console.log(favoriteCountry(countries))