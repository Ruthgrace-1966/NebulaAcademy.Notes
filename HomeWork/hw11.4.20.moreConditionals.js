// //INSTRUCTIONS
 

// // PROBLEM #1
// // Create a function that checks the type of the argument as well as if the argument is an array or not.
// // IF it is a string, return the string passed in as the argument
// // IF it is a number, return the number passed in as the argument
// // IF it is a boolean, return the boolean passed in as the argument
// // IF it is an array, return the array passed in as the argument
// // function temperature (coldHot){
// //     if (typeof coldHot === 'string'){
// //         return coldHot
// //     }
// //     if (typeof coldHot === 'number'){
// //         return coldHot
// //     }
// //     if (typeof coldHot === 'boolean'){
// //         return coldHot
// //     }
// //     if (Array.isArray(coldHot)){
// //         return coldHot
// //     }
// // }
// // console.log(temperature('warm'));
// // console.log(temperature(75));
// // console.log(temperature(true));
// // console.log(temperature(['snow', 'rain', 'wind']));

// // PROBLEM #2
// // Create a function that takes in 2 parameters: num1 and num2
// // IF both of the numbers passed into the function as arguments are greater than 50, then return num1*num2
// // IF both of the numbers are less then 50, add the two numbers : return num1+num2
// // IF one of the numbers is greater than 50 and the other is less than 50, divide the two numbers: return num1/num2
// // function cooking (num1, num2){
 
// //             if (num1 > 50 && num2 > 50){
// //                 return num1 * num2
// //             } 
// //             if (num1 < 50 && num2 < 50){
// //                 return num1 + num2
// //             } 
// //             if (num1 > 50 || num2 < 50){
// //                 return num1 / num2
// //             }
// //             if (num1 > 50 || num2 < 50){
// //                 return num1 / num2
// //             }
// //         }
// //         console.log(cooking(75, 57));
// //         console.log(cooking(33, 42));
// //         console.log(cooking(54, 38));
// //         console.log(cooking(52, 51));


// // // PROBLEM #3
// // // Create a function that takes in 2 parameters that are numbers.
// // // IF the first number divided by the second number has a remainder, return the string: 'the remainder if (num1) divided by (num2) is (remainder)
// // // IF there is no remainder, return the string: '(num1) divided by (num2) has no remainders'
// function parameters (number1, number2){
//     if (number1 / number2   ){
//         return 'the remainder if(number1 divided by (number2) is (remainder)'
//     }
//     if (  ){
//         return '(number1) divided by (number2) has no remainders'
//     }
// }
// console.log(parameters(,));
// console.log(parameters(,));
// console.log(parameters(,));
// console.log(parameters(,));
// console.log(parameters(,));
// console.log(parameters(,));



// //function twoNumParams (num1, num2){
// //     let remainder = num1 % num2
// //     if (num1 % num2 === 1){
// //         return `the remainder of ${num1} divided by ${num2} is ${remainder}`
// //     }
// //     else {
// //         return `${num1} divided by ${num2} has no remainders`
// //     }
// // }

// // console.log(twoNumParams(16, 4)) // 16 divided by 4 has no remainders
// // console.log(twoNumParams(21, 4)) // the remainder of 21 divided by 4 is 1

 

// // // PROBLEM #4
// // // Create a function that takes in a string. This function will calculate the length of any string passed into this function.
// // // IF the length of the string is an odd number, return the string: 'the length of (string) is an odd number'
// // // IF it is an even number, return the string: 'the length of (string) is an even number'
// // function calculate (dismiss){

// //         if (dismiss.length % 2 === 1){
// //         return `the length of the string ${dismiss} is an odd number.`
// //         }
// //         if (dismiss.length % 2 === 0){
// //             return `the length of the string ${dismiss} is an even number`
// //         }
// //     }
    
// //     console.log(calculate('fullstack')) // the length of the string fullstack is an odd number.
// //     console.log(calculate('fullstacks')) // the length of the string fullstacks is an even number
    
    
// //     function jasSol (dismiss){
    
// //         if (dismiss.length % 2 !== 0){
// //         return `the length of the string ${dismiss} is an odd number.`
// //         } else {
// //             return `the length of the string ${dismiss} is an even number`
// //         }
// //     }
    
// //     console.log(jasSol('fullstack')) // the length of the string fullstack is an odd number.
// //     console.log(jasSol('fullstacks')) // the length of the string fullstacks is an even number 
    
 

// // // PROBLEM #5
// // // Create a function that takes in an array. This function calculates the length of the array.
// // // IF the length of the array is even, remove the last element of the array, add a new element at the beginning of the array and return the new array
// // // IF the length of the array is od, remove the first element of the array, add a new element to the end of the array and return the new array
// // [X] Create a function that takes in an array. 
// // [X] This function calculates the length of the array.
// // [X] IF the length of the array is even, 
// // [X] remove the last element of the array, 
// // [X] add a new element at the beginning of the array and 
// // [X] return the new array

// // IF the length of the array is odd, remove the first element of the array, add a new element to the end of the array and return the new array

// // let array = ['blue', 'orange', 'pink']
// // let arr = ['blue', 'orange', 'pink', 'yellow']

// // function colors (array2){
// //     if (array2.length % 2 === 0){
// //         array2.pop()
// //         array2.unshift('purple')
// //         return array2
// //     }
// //     if (array2.length % 2 === 1){
// //         array2.shift()
// //         array2.push('green')
// //         return array2
// //     }
// // }

// // console.log(colors(arr)) // [ 'purple', 'blue', 'orange', 'pink' ]
// // console.log(colors(array)) // [ 'orange', 'pink', 'green' ]


