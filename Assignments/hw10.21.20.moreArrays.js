// MORE ARRAY METHODS

// Using this array: 
 let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 1. Log the length of the array
console.log(days.length);

// 2. Log the 4th element in the array
console.log(days[4]);

// 3. Remove the first element in the array. Log the new array and the element removed from the array
console.log(days.shift()); 
console.log(days);

// 4. Add 'Sunday' at the beginning of the array and log the new array
days.unshift('Sunday');
console.log(days); 

// 5. Remove the last element in the array. Log the new array and log the element removed
console.log(days.pop()); 
console.log(days); 

// 6. Add 'Saturday' to the end of the array and log the new array
days.push('Saturday');
console.log(days); 

// 7. Replace 'Thursday' with 'Friday Junior'
days.splice(-3, 1, 'Friday Junior');
console.log(days); 

// 8. Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let favDay = days.slice(0,1); 
console.log(favDay);
console.log('My faviorte day of the week is ' + favDay); 

// 9. Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone.concat(laptop));

// *Push work to GitHub account!
