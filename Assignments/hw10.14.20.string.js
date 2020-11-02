// Read Chapters 1 and 2 in Eloquent JavaScript: Eloquent_JavaScript  (Web view)


// As well as COMPLETING THE PROBLEMS BELOW.

// You will need to console.log for each problem

// 2. Create a variable and assign the string: "we are software engineers at nebula academy"
// Using the string…

// LOG the index of 'software'
let stringVar = "we are software engineers at nebula academy";
console.log(stringVar.indexOf('software'));     //7

// LOG the index of 's'
// I'm going to assume that the Index of 's' is referring to the word "software" instead of the 's' at the end of 'engineers' 
console.log(stringVar.indexOf('s'));     //7

//LOG the index of 'web'
console.log(stringVar.indexOf('web'));     //-1

// Does the string include 'z'? (log true or false)
console.log(stringVar.includes('z'))     //false

// Does the string include 'engineer'? (log true or false)
console.log(stringVar.includes('engineer'));     //true

// Split the words in the string into an array
console.log(stringVar.split(' '));     //['we', 'are', 'software', 'engineers', 'at', 'nebula', 'academy']

// Extract the word 'software' and log it
console.log(stringVar.slice(7,15));

// Extract the word 'academy' and log it
// console.log(stringVar.splice(36,43));
console.log(stringVar.slice(-7));


// 2. CREATE a variable and assign the string: "we are learning new string methods"
let stringMethods = "we are learning new string methods";
console.log(stringMethods);

// USING THE STRING...
// Log the length of the string
console.log(stringMethods.length);

// Log the last character of the string
console.log(stringMethods[stringMethods.length - 1]);

// Log the character at index 5
console.log(stringMethods[5]);

// Replace all a's  with a '-'
console.log(stringMethods.replace(/a/g,'-'));

// Uppercase everything in the string
console.log(stringMethods.toUpperCase());

// Lowercase everything in the string
console.log(stringMethods.toLowerCase());

//3. Create a new variable with your favorite ice cream flavor
// Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'

let favIcecream = "strawberry"
console.log(favIcecream);
console.log(`My favorite ice cream flavor is ${favIcecream}`);
console.log('My favorite ice cream flavor is ' + favIcecream);


// Submit by uploading to GitHub and linking your solution 

 

// Please do Group reflections!