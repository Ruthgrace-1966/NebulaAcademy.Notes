//INSTRUCTIONS
// Read "Eloquent JavaScript" Chapter 3

// PROBLEM #1
// Create a function called sumNum that takes in two parameters: num1 and num2.
// This function will return the sum of num1 and num2.
            //A//
function sumNum(num1, num2){
    return num1 + num2
}
console.log(sumNum(5, 5));          //10

function sumNum(param1, param2){
    return param1 + param2
}
console.log(sumNum(3, 7));          //10

function sumNum(word1, word2){
    return word1  + word2
}
console.log(sumNum(4, 3));          //7


//         //B//
function sumNumber(l1, ab2, b3){
    return l1 + ab2 + b3;
}
console.log(sumNumber(2, 3, 5));        //10
console.log(sumNumber('Mercedes', ' Jaguar ', 'Lexus'));        //Mercedes Jaguar Lexus


// PROBLEM #2
// Create a function called divisionRemainder that takes In two parameters: num1 and num2.
// This function will divide (num1 and num2), calculate the remainder of num1/num2 and return the string:
// This function will return the  string: "(num1) divided by (num2) is (number) with a remainder of (remainder)".
function divisionRemainder(num1, num2){
    let calculation3 = num1/num2
    return `${num1} divided by ${num2} is ${Math.floor(calculation3)} with a remainder of ${num1 % num2}`
}
console.log(divisionRemainder(12, 7));  //12 divided by 7 is 1 with a remainder of 5

function divisionRemainder (num1 , num2){
 let answer = num1/num2
 console.log(answer, 'answer')
 let remainder = num1 % num2
 console.log(remainder, 'remainder')
 return `${num1} divided by ${num2} is ${Math.floor(answer)} with a remainder of ${remainder}`
}
console.log(divisionRemainder(144, 11)) // 144 divided by 11 is 13 with a remainder of 1

// PROBLEM #3
// Create a function called randomNums that returns a random number from 0 to 1000.
        //A//
function randomNums(){
    return (Math.random() * 1000);
}
console.log(randomNums());

//         //B//
function randomNums(num){
    return (Math.random() * num);
}
console.log(randomNums(1000));
console.log(randomNums(75));


//PROBLEM #4
// Create a function called theType that takes in one parameter called: dataType.
// This function will return the type of any argument passed into this function. 
function theType(dataType){
    return typeof dataType;
}
console.log(theType('chocolate'));      //string
console.log(theType(7));                //number
console.log(theType(true));             //Boolean
console.log(theType(false));            //Boolean

// PROBLEM #5
// Create a function called isItArray that takes in one parameter called: arrayChecker.
// This function returns whether the argument passed into this function is an array or not (the function should evaluate to either true or false).
function isItArray(arrayChecker){
    return Array.isArray(arrayChecker)
}
console.log(isItArray('I love you'));       //false
console.log(isItArray(3));                  //false
console.log(isItArray("A new world"));      //false
console.log(isItArray([7, 3, 1]));          //true
console.log(isItArray());                   //false
console.log(isItArray([8,2]));              //true
console.log(isItArray(`love`));             //false

// PROBLEM #6 
// Create a function called  fifthIndex that takes in a string as a parameter. 
// This function finds the  5th index of any string passed into this function.
let string = 'Loving Life';
function fifthIndex(five){
    return five[5]
}
console.log(fifthIndex('I want this string to stick'));
console.log(fifthIndex(string));


// PROBLEM #7
// Create a function called myInitials that takes in two parameters: firstName and lastName.
// This function returns the initials of the first and last name.
let first = 'Anitria';
let last = 'Blue';
let leo = ['Leonard', 'Burwell'];

function myInitials (firstName, lastName){
    return firstName[0] + lastName[0]
}
console.log(myInitials(first, last));
console.log(myInitials('Jesus', 'Christ'));
console.log(myInitials(leo[0], leo[1]));


// PROBLEM #8
// Create a function called upperCase that takes in a string as a parameter.
// This function returns any strings passed into the function in all uppercase letters.
let RG = 'Ruth Grace'
function upperCase (goals){
    return goals.toUpperCase()
}
console.log(upperCase(RG));
console.log(upperCase('anitria'));

// PROBLEM #9
// Create a function called lastChar that takes in a string as a parameter.
// This function returns the last character of any string passed into this function.
// let lastCharacter = 'Anitria'
// function lastChar (parameter){
//     console.log(parameter.length) // 7
//     console.log(parameter.length - 1) //6

//     console.log(parameter[6]) // a
//     console.log(parameter[parameter.length - 1]) // a
//     return parameter[parameter.length - 1] // a
// }
// console.log(lastChar(lastCharacter)) //a
// console.log(lastChar('Daja')) // a
// console.log(lastChar('Chelsea Merrill')) // l

let character = 'Leoani'
function lastChar (ourName){
    console.log(ourName.length)         // 6
    console.log(ourName.length - 1)     // 5

    console.log(ourName[6])             //  
    console.log(ourName[ourName.length - 1]) 
    return ourName[ourName.length - 1]
}
console.log(lastChar(character));       //i
console.log(lastChar('lucky'));         //y
console.log(lastChar('My Myra'));       //a


// PROBLEM #10
// Using this array: 
let countries = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'Spain', 'Aruba', 'India', 'Japan', 'Morocco', 'Vietnam']
let numbers =[1, 2, 3, 4, 5, 6, 7]
let array = [[], [[], []], ['a', 'b'], [1, 2, 3]]

// a.) Create a function called lastElement that takes in an array as a parameter.
// Find the last element in the array and assign it to a variable.
// This function returns the string: 'the last element in the array is (country)'.

// function lastElement (countries){
//     let lastCountry = countries[countries.length - 1]
//     // console.log(lastCountry)
//     return `the last element in the array is ${lastCountry}`
// }
// console.log(lastElement(countries)) // Vietnam
// console.log(lastElement(numbers)) // 7
// console.log(lastElement(array)) // 1, 2, 3

function lastElement (countries){
    let theLastCountry = countries[countries.length - 1]        
    console.log(theLastCountry);
    return `The last element in the array is ${theLastCountry}` 
}
console.log(lastElement(countries));        //Vietnam
                                            //The last element in the array is Vietnam
console.log(lastElement(array));            //[ 1,2,3 ]
                                            //The last element in the array is 1,2,3
console.log(lastElement(numbers));          //7
                                            //The last element in the array is 7


// b.) Create a function called: favoriteCountry that takes in an array as a parameter.
// Add your favorite country at the beginning of the array.
// This function returns the string: 'My favorite country is (country)'.
function favoriteCountry (greatCountry){
    greatCountry.unshift('Norway')
    return `My favorite country is ${greatCountry[0]}`
}    
console.log(favoriteCountry(countries));

// function favoriteCountry (favCountry){
//     favCountry.unshift('Puero Rico') 
//     return `my favorite country is ${favCountry[0]}`
// }
// console.log(favoriteCountry(countries))