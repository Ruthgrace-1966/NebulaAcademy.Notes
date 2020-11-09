// // Read Chapters 1 and 2 in Eloquent JavaScript: Eloquent_JavaScript  (Web view)
// // As well as COMPLETING THE PROBLEMS BELOW.

// // YOU WILL NEED TO CONSOLE.LOG FOR EACH PROBLEM! 

// //  Create a variable and assign the string: "we are software engineers at nebula academy"
// // Using the string…

//  LOG the index of 'software' 
    //Log the index of 'nebula'
let string = "we are software engineers at nebula academy"
console.log(string.indexOf('software'));        //7
console.log(string.indexOf('nebula'));          //29
// let stringVar = "we are software engineers at nebula academy";
// console.log(stringVar.indexOf('software'));     //7

// // LOG the index of 's'
//  I'm going to assume that the Index of 's' is referring to the word "software" instead of the 's' at the end of 'engineers' 
// console.log(stringVar.indexOf('s'));     //7
    // Log the index of 'w'
    // Log the index of 'g'
    console.log(string.indexOf('s'));   //7
    console.log(string.indexOf('w'));   //0
    console.log(string.indexOf('g'));   //18

// //LOG the index of 'web' from the string "we are software engineers at nebula academy"
//  Log the index of 'are'...
//  Log the index of 'at'...
//  Log the index of 'academy'...
console.log(string.indexOf('web'));     //-1 *The -1 exists because the word 'web' doesn't exist in the string.
console.log(string.indexOf('are'));     //3  
console.log(string.indexOf('at'));      //26
console.log(string.indexOf('academy'));     //36
// console.log(stringVar.indexOf('web'));     //-1

//  Does the string include 'z'? (log true or false)
//console.log(stringVar.includes('z'))     //false
//  Does the string include 'z'? (log true or false)
console.log(string.includes('z'));      //false
//  Does the string include 'a'? (log true or false)
console.log(string.includes('a'));
//  Does the string include 'f'? (log true or false)
console.log(string.includes('f'));
//  Does the string include 'h'? (log true or false)
console.log(string.includes('h'));
//  Does the string incldue 'm'? (log true or false)
console.log(string.includes('m'));
//  Does the string include 'c'? (log true or false)  
console.log(string.includes('c'));

// // Does the string include 'engineer'? (log true or false)
// console.log(stringVar.includes('engineer'));     //true
console.log(string.includes('engineer'));
//  Does the string include 'love'?     (log true or false)

// // Split the words in the string into an array
// console.log(stringVar.split(' '));     //['we', 'are', 'software', 'engineers', 'at', 'nebula', 'academy']
console.log(string.split(' '));
console.log(string.split(','));

// // Extract the word 'software' and log it
//  console.log(stringVar.slice(7,15));
console.log(string.slice(7,15));    //software
console.log(string.slice(8,15));    //oftware
console.log(string.slice(7,14));    //softwar
console.log(string.slice(6,16));    // software
console.log(string.slice(6,15));    // software

// // Extract the word 'academy' and log it
// // console.log(stringVar.splice(36,43));
// console.log(stringVar.slice(-7));
console.log(string.slice(36,42));   //academ
console.log(string.slice(36,43));   //academy
console.log(string.slice(36,44));   //academy
console.log(string.slice(35,42));   // academ
console.log(string.slice(35,43));   // academy


// // 2. CREATE a variable and assign the string: "we are learning new string methods"
//  let stringMethods = "we are learning new string methods";
//  console.log(stringMethods);
let learningString = "we are learning new string methods";
console.log(learningString);    //we are learning new string methods

// // USING THE STRING...
// // Log the length of the string
// console.log(stringMethods.length);
console.log(learningString.length);      //34

// // Log the last character of the string
// console.log(stringMethods[stringMethods.length - 1]);
console.log(learningString[learningString.length -1]);



// // Log the character at index 5
// console.log(stringMethods[5]);
//console.log(learningString(5)); //error: The variable is not a function.
console.log(learningString[5]);     //e

// // Replace all a's  with a '-'
// //console.log(stringMethods.replace(/a/g,'-'));
//console.log(learningString('a', '-'));  //error: The variable is not a function.
console.log(learningString.replace('a', '-'));  // we -re learning new string methods  //This function only replaces the a one word.
//console.log(learningString.replace(a/g, '-'));  // This is not defined.
console.log(learningString.replace(/a/g, '-')); // we -are le-rning new string methods  //This is the correct function.


// // Uppercase everything in the string
// console.log(stringMethods.toUpperCase());
console.log(learningString.toUpperCase());  //WE ARE LEARNING NEW STRING METHODS


// // Lowercase everything in the string
// console.log(stringMethods.toLowerCase());
console.log(learningString.toLowerCase());  //we are learning new string methods

// //3. Create a new variable with your favorite ice cream flavor
// // Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'
// let favIcecream = "strawberry"
// console.log(favIcecream);
// console.log(`My favorite ice cream flavor is ${favIcecream}`);
// console.log('My favorite ice cream flavor is ' + favIcecream);
let icecream = "strawberry";
console.log(icecream);
console.log('My favorite icecream flavor is' + icecream);  //My favorite icecream flavor is isstrawberry
console.log('My favorite icecream flavor is ' + icecream);  //My favorite icecream flavor is strawberry (There must be a space between the last character and the quotation mark if you want the words separated.)
console.log(`My favorite icecream flavor is  ${icecream}`); //My favorite icecream flavor is  strawberry (There is an extra space between the words "is" and "icecream that we don't want")
console.log(`My favorite icecream flavor is ${icecream}`);  //My favorite icecream flavor is strawberry


// Submit by uploading to GitHub and linking your solution 
// Please do Group reflections!





// PRACTICE NUMBER ONE (2)
// YOU WILL NEED TO CONSOLE.LOG FOR EACH PROBLEM! 

//  Create a variable and assign the string: "Nebula Academy has special Software Engineers."
// Using the string…

// LOG the index of 'Software'


// LOG the index of 's' in the word "special"


//LOG the index of 'Academy'


// Does the string include 'z'? (log true or false)


// Does the string include 'engineer'? (log true or false)


// Split the words in the string into an array


// Extract the word 'Academy' and log it


// Extract the word 'special' and log it
// 

// 2. CREATE a variable and assign the string: "String methods are fun to learn and practice."


// USING THE STRING...
// Log the length of the string


// Log the last character of the string


// Log the character at index 5


// Replace all a's  with a '-'


// Uppercase everything in the string


// Lowercase everything in the string


//3. Create a new variable with your favorite color.
// Log the string, 'My favorite color is (your favorite color)'


