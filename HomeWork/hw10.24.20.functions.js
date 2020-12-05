// // // INSTRUCTIONS

// // //PROBLEM 1
// // // a.) Define a variable name and assign your name to it. 
let ruthie = "Anitria";
console.log(ruthie);            //Anitria

let neech = `Nitria`;
console.log(neech);             //Nitria

let ruth = "Grace";
console.log(ruth);              //Grace


// // // b.) Using the variable name, create a function that returns your name. 
function myName(bigNeech){
    return bigNeech;
}
console.log(myName(ruthie));         


// // //PROBLEM 2
// // //Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers.
function adding(num1, num2){
    return num1 + num2;
}
console.log(adding(3, 7));          //10


// // //PROBLEM 3
// // //Create a function that returns the type of any argument that is being called in the function.
// function classMates(names){
//     return typeof names
// }
// console.log(classMates("Jasmine"));                 //string
// console.log(classMates('Chelsea'));                 //string
// console.log(classMates(`Daja`));                    //string
// console.log(classMates(17));                        //number
// console.log(classMates(15));                        //number
// console.log(classMates(13));                        //number
// console.log(classMates(true));                      //Boolean
// console.log(classMates(false));                     //Boolean
// // // Example for the aformentioned problem: 
// // // //type(400) //=> 'number' 
// // // //type('hi') //=> 'string' 


// // PROBLEM 4
// var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// // a.) Using the array above, create a function that returns the 4th element in the array.
// function goodFruit(oneFruit){
//     return `The fourth element is ${oneFruit}`
// }
// console.log(goodFruit(fruits[4]));
// console.log(goodFruit(fruits[3]));

// // // //I learned that if you put a period after the Template Literals, that will show up on the log. Here's an example.
// function healthyFruit(firstFruit){
//     return `The fourth element is ${firstFruit}.`
// }
// console.log(healthyFruit(fruits[4]));
// console.log(healthyFruit(fruits[3]));

// // // b.) Create a function that returns only the last element in the fruits array. 
// //var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function fruityFruit(lastFruit){
//     console.log(lastFruit);                 // ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']
//     return lastFruit[lastFruit.length -1]
// }
// console.log(fruityFruit(fruits));           //watermelon


// // c.) Create a function that returns ['peach', 'lemon', 'plum', 'grape'] 
// //var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function fruitsFour(lightDark){
//     return lightDark.splice(2, 4)
// }
// console.log(fruitsFour(fruits));            //['peach', 'lemon', 'plum', 'grape']     


// // d.) Create a function that adds another fruit to the end of the array and returns the new array. 
// //var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function addingFruit(fruits){
//     fruits.push('pomegranite')
//     return fruits
// }
// console.log(addingFruit(fruits));   //['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon', 'pomegranite'];


// // e.) Create a function that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon' 
// function string (fruits){
//     return fruits.join(' and ')
// }
// console.log(string(fruits));

// //var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function fruitString(fruits){
//     return fruits.join(' and ')
// }
// console.log(fruitString(fruits));     //apple and orange and peach and lemon and plum and grape and watermelon


// // PROBLEM 5
// var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']

// //a.) Using the array above, create a function that returns the string, 'Hello Maurice and Chelsea!' 
// // // Declaring/creating a function called hiMaurice
// function hiMaurice(studentNames){
//     console.log(studentNames) // ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy'] 
//     console.log(studentNames[1]) // Maurice
//     console.log(studentNames[2]) // Chelsea
//     return 'Hello ' + studentNames[1] + ' and ' + studentNames[2] + '!' //Hello Maurice and Chelsea!
//  }
// // Invoking the function
// console.log(hiMaurice(names))

// //var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
// function greetingsStudents(peerNames){
//     console.log(peerNames)              //['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
//     console.log(peerNames[1])           //Maurice
//     console.log(peerNames[2])           //Chelsea
//     return 'Hello ' +  peerNames[1] + ' and ' + peerNames[2] + '!'  //Hello Maurice and Chelsea!
// }
// // Invoking the function
// console.log(greetingsStudents(names));     

// // b.) Create a function that returns the string, 'Hi Jasmine and Daja!'. 
// function welcome(names){
//     console.log(names[0]) //Jasmine
//     console.log(names[5]) // Daja
//     return `hi ${names[0]} and ${names[5]}!` 
// }
// console.log(welcome(names))

// //var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
// function helloThere(names){
//     console.log(names[0])                       //Jasmine      
//     console.log(names[5])                       //Daja
//     return `Hi ${names[0]} and ${names[5]}!`
// }
// console.log(helloThere(names));                 //Hi Jasmine and Daja!

// // c.) Create a function that returns the string, 'Howdy Eddy!' 

// function howdyEd (name){
//     console.log(name[6]) //Eddy
//     return `howdy ${name[6]}!` 
// }
// console.log(howdyEd(names)) //howdy Eddy!

// //var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
// function bigEddy(name){
//     console.log(name[6])
//     return `Howdy ${name[6]}!`
// }
// console.log(bigEddy(names));

// // d.) Create a function that returns the string, 'Happy Monday, Anitria!'
// function name (girlsBoys){
//     return `Happy Monday, ${girlsBoys}!` 
// }
// console.log(name(names[3])) // Happy Monday, Anitria!

// //var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
// function myName(weekday){
//     return `Happy Monday, ${weekday}!`
// }
// console.log(myName(names[3]));      //Happy Monday, Anitria!

// // e.) Create a function that returns the string, 'Hey Tauseef!'
// // function wednesday (tauseef){
// //     return `Hey ${tauseef}!`;
// // }
// // console.log(wednesday(names[4])); //Hey Tauseef!

// //var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
// function interestingName(Tauseef){
//     return `Hey, ${Tauseef}!`
// }
// console.log(interestingName(names[4]));


