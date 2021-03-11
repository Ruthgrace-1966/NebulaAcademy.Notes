// 11.07.20 Loop Assignment
// Due November 9, 2020 11:59 PM
// Instructions


// 1.)  Create a function that loops through any string passed into the function.
// Log every character in this string.
// Once all characters are successfully logged, return the string, 'Done!'.

//function icecream (strawberry){
       //for (let i = 0; i < strawberry.length; i++){
            //console.log(strawberry[i])
       //}
   // return 'Done!' 

//}
//console.log(icecream('I love strawberry icecream.'));
//console.log(icecream('I love Hershey!'));
//console.log(icecream('Awesomeness is cool!'));


// 2.) Create a function that takes in a number as a parameter.
// This function will log from 1 to any number passed in this function as an argument.
// After all numbers are successfully logged, return the string, 'Done!'

 //function number (parameter){
     //for (let i = 1; i <= parameter; i++){
         //console.log(i)
     //}
     //return 'Done!'
 //}
 //console.log(number(7));


// 3.) Create a function that takes in an array as a parameter.
//      This function will Loop/Iterate through the array and log every element inside the array.
//      After all elements are logged, return the string, 'Done!'.

 //function takesIn(asParameter){
     //for (let i = 0; 1 < asParameter.length; i++){
          //console.log(asParameter[i])
     //}
 //}
 //console.log(takesIn([]))



//4.)  Create a function that takes in a string.
//      This function will loop through the string and log the indices of each character in the string.
//      After the indices are logged, return the string, 'Done!'.

let dog = 'I love Hershey'

function takesIn(string){
    for(let i = 0; i < string.length; i++) {
        console.log(string[i])
    }
    return 'Done!'   
}
console.log(takesIn('I love Hershey'))


// 5.) Create a function that only logs the even numbers from 1-10
// After the even numbers are logged, return the string, 'Done!'

//let numbers = [1,2,3,4,5,6,7,8,9,10]

//function onlyLogs(evenNums) {
     //for(let i = 1; i < evenNums.length; i+=2) {
//          console.log(numbers[i])
//      }
//      return 'Done!'
// }
// console.log(onlyLogs(numbers));

// function onlyLogs() {
//     for(let i = 2; i <= 10; i+=2){
//         console.log(i)
//     }
//      return 'Done!' 
// }
// console.log(onlyLogs());


