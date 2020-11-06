// INSTRUCTIONS

//PROBLEM 1
// Define a variable name and assign your name to it 
// let seef = "Tauseef";
// console.log(seef); // Tauseef
// let chels = 'Chelsea'
// let num = 8


// //Using the variable name, create a function that returns your name 
// function nameFunction(cheese){
//     return cheese; //Tauseef
// }
// console.log(nameFunction(seef)); //Tauseef
// console.log(nameFunction(chels)); // Chelsea
// console.log(nameFunction(num)) //8


//Define a variable name and assign your name to it
let ruthie = "Anitria";
console.log(ruthie); 
let chels = 'Chelsea';
console.log('chels');
let num = 8;;
console.log(num);
let neech = 'Nitria';
console.log(neech);


//Create a function that returns your name
function nameFunction(cheese){
       return cheese; 
}
console.log(nameFunction(ruthie)); 
console.log(nameFunction(chels)); 
console.log(nameFunction(num)); 


//PROBLEM 2
//Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers
// function adding(num1, num2){
//     return num1 + num2
// }
// console.log(adding(4, 10)) //14 
 

//PROBLEM 3
//Create a function that returns the type of any argument that is being called in the function
//Create a function that returns the type of any argument that is being called in the function 
// function namesRandom(names){
//     return typeof names
// }
// console.log(namesRandom('Jasmine')) //string
// console.log(namesRandom(19)) //number 
// console.log(namesRandom(true)) //boolean

//example: 
//type(400) //=> 'number' 

//type('hi') //=> 'string' 


//PROBLEM 4
//var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
/ let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']

//Using the array above, create a funciton that returns the 4th element in the array. 

// function fourthElement(singleFruit){
//  return `the fourth fruit is ${singleFruit}`
// }
// console.log(fourthElement(fruits[3]))

//Create a function that returns only the last element in the fruits array 

// function lastFruit (juice){
//     console.log(juice) //['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'] 
//     return juice[juice.length-1] //watermelon
//     // return juice.pop() //watermelon
// }
// console.log(lastFruit(fruits)) //undefined 
Create a function that returns ['peach', 'lemon', 'plum', 'grape'] 

// function fourFruits (fruity) {
//     return fruity.splice(2, 4)
// }
// console.log(fourFruits(fruits)) //[ 'peach', 'lemon', 'plum', 'grape' ]

// function section (fruitSlice){
//     return fruitSlice.slice(2, 6)
// }
// console.log(section(fruits)) //[ 'peach', 'lemon', 'plum', 'grape' ]

// let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']

//Create a function that adds another furit to the end of the array and returns the new array 

// function addFruit (fruit){
//     fruit.push('berry')
//     return fruit
// }
// console.log(addFruit(fruits)) // ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']

//Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon' 

// function string (fruits){
//     return fruits.join(' and ')
// }
// console.log(string(fruits))



//Using the array above, create a funciton that returns the 4th element in the array.

//Create a function that returns only the last element in the fruits array

//Create a function that returns [peach', 'lemon', 'plum', 'grape']

//Create a function that adds another furit to the end of the array and returns the new array

//Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'


//PROBLEM 5
//var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy'] 

//Using the array above, create a function that returns the string, 'Hello Maurice and Chelsea!' 

// Declaring/creating a function called hiMaurice
// function hiMaurice(studentNames){
//     console.log(studentNames) // ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy'] 
//     console.log(studentNames[1]) // Maurice
//     console.log(studentNames[2]) // Chelsea

//     return 'Hello ' + studentNames[1] + ' and ' + studentNames[2] + '!' //Hello Maurice and Chelsea!
//  }
// // invoking the funciton
// console.log(hiMaurice(names))

//Create a funciton that returns the string, 'Hi Jasmine and Daja!' 

// function welcome(names){
//     console.log(names[0]) //Jasmine
//     console.log(names[5]) // Daja
//     return `hi ${names[0]} and ${names[5]}!` 
// }
// console.log(welcome(names))


//Create a function that returns the string, 'Howdy Eddy!' 

// function howdyEd (name){
//     console.log(name[6]) //Eddy
//     return `howdy ${name[6]}!` 
// }
// console.log(howdyEd(names)) //howdy Eddy!

//Create a function that returns the string, 'Happy Monday, Anitria!'

function name (girlsBoys){
    return `Happy Monday, ${girlsBoys}!` 
}
console.log(name(names[3])) // Happy Monday, Anitria!

//Create a function that returns the string, 'Hey Tauseef!'

function wednesday (tauseef){
    return `Hey ${tauseef}!`;
}
console.log(wednesday(names[4])); //Hey Tauseef!





//Using the array above, create a fucntion that returns the string, 'Hello Maurice and Chelsea!'

//Create a funciton that returns the string, 'Hi Jasmine and Daja!'

//Create a function that returns the string, 'Howdy Eddy!'

//Create a function that returns the string, 'Happy Monday, Anitria!'

//Create a function that returns the string, 'Hey Tauseef!'



