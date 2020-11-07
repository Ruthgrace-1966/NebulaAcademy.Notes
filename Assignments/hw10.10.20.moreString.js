// STRING METHODS

// *Create a new file in your VS Code
// *Copy and paste the problems below and code out the solutions!
// *After you're done, 
// 1)add; 
// 2)commit; 
// 3)push your work into GitHub and 
// 4)paste your link into your code.

// LEVEL 0
//     Q0: Declare a string with the value equal to your name
//   myQ0: Declare a variable and assign it a string value equal to your name
// let myName = 'Anitria Blue';
// console.log(myName);        // answer:  Anitria Blue

//     Q1: Given the string, 'WE ARE SHOUTING!' log 'we are shouting'
// let shout = 'WE ARE SHOUTING';
// console.log(shout);         //  answer:  WE ARE SHOUTING!


// let shout = 'WE ARE SHOUTING!';
// console.log(shout);
// console.log(shout.toLowerCase());


// LEVEL 1
//     Q2: Declare a string and log its length 
// let software = 'Engineers are special!';
// console.log(software.length)            //22
// // The .length is a property and NOT a method.

// //     Q3: Given the string 'Hello World!', log the 6th character.
// let earth = 'Hello World!';
// console.log(earth[6]);          //W
// console.log(earth[7]);

// LEVEL 2
//     Q4: Given the string 'Welcome World?', replace the question mark with an exclamation
// let land = 'Welcome World?';
// console.log(land.replace("?", "!"));    //Welcome World!

// LEVEL 3
//     Q5: Given any string, log the first and last characters
// let anyString = 'Nebula Academy';
// console.log(anyString[0]);  //N     and  //y   
// console.log(anyString[13]);
// console.log(anyString[anyString.length -1]);

// LEVEL 4
//     Q6: Given the string 'welcome to my website', what is the character at the 7th index? 
let website = 'welcome to my website';
console.log(website.charAt(6));         //e
// chartAt is a method because of the parenthese
console.log(website.charAt(7));  // Renders a space
console.log(website[7]);          //Renders a space
console.log(website[6]);            //Renders an e
