// Instructions
// Self Assessment link:  https://forms.office.com/Pages/ResponsePage.aspx?id=YRSVFYB0cUK2kPzj-IE3q95FGFteHSVFv56O0HIfxWVUOEtKSFFNTDBHUVM0TzZJNTBKU0FLTUNWUC4u



let studentObject1 = {
name: 'Tim',
id: 1,
age: 22
}

let studentObject2 = {
name: 'Lisa',
id: 2,
age: 19
}

// PROBLEM #1
// Using the first studentObject1 above, 
// create a function that returns the string, 'Tim is 22 years old'
function string (him){
    for (let key in him){
        let name = him.name
        let age = him.age
       return `${name} is ${age} years old`
    }
}
console.log(string(studentObject1));

//In Class Answer
function string (him){
        let name = him.name
        let age = him.age
       return `${name} is ${age} years old`
}
console.log(string(studentObject1));


//  PROBLEM #2
//  Create a function that takes in the two objects above, 
//  check to see if the person is above the age of 21 or not.
//  If they are 21+, return the string, 'welcome, (name)!'
//  If not, return the string, 'try again in a couple years'
function twoObjects (aboveA){
    let person = aboveA.name
    let age = aboveA.age 
    if (age >= 21){
        return `welcome, ${person}!`
    }else{
        return 'try again in a couple years'
    }
}
 console.log(twoObjects(studentObject1));
 console.log(twoObjects(studentObject2));

// function twoObjects (aboveA){
//     let person = aboveA.name
//     let age = aboveA.age 
//     if (age >= 21){
//         return `welcome, ${person}!`
//     }else{
//         return 'try again in a couple years'
//     }
// }
//  console.log(twoObjects(studentObject1, studentObject2));
 
//NOTE: This is the initial solution I used for the syntax!
//  function twoObjects (aboveA, aboveB){
//     if (age >= 21){
//         return 'welcome, (name)!'
//     }else{
//         return 'try again in a couple years'
//     }
// }
//  console.log(twoObjects());
//  console.log(twoObjects());
 //SPECIFICALLY ASK ABOUT THIS SOLUTION!!!


//  PROBLEM #3
//  A) Create a function that returns the keys in an array.
//  B) Create a function that return the values in an array.
            //A//
// PSEUDO CODE:
let studentObject1 = {      
    name: 'Tim',
    id: 1,
    age: 22
}
function returnArrays (keys){
        return  Object.keys(keys)
}
console.log(returnArrays(studentObject1));

            //B//
//PSEUDO CODE:
// let studentObject2 = {
//                 name: 'Lisa',
//                 id: 2,
//                 age: 19
//                 }
// function arraysReturn (values){
//         return (Object.values(values))
        
// }
// console.log(arraysReturn(studentObject2));


// //  PROBLEM #4
// //  Create a function that deletes the 'id' key value pairs.
function deletes (keyValue){
    delete keyValue.id
    return keyValue
}
console.log(deletes(studentObject1));


// //  PROBLEM #5
// //  Create a function that takes in the student objects above and 
// //      their birthdates (come up with their birthdates) as parameters.
// //  This function will add a new birthdate key value pair to the object.
function students (objects){
    objects['']
    return objects
}
console.log(students(studentObject1));

//In Class Answer
function students (objects, birthdate){
    objects['DOB'] = birthdate
    return objects
}
console.log(students(studentObject1, '11/4/1985'));
console.log(students(studentObject2, '11/5/1988'));