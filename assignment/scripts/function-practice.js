console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


//2. Function to return an personalized hello, using the `name` argument.
//for example 'Hello, Jo!', or 'Hello, Stacy!


//Remember to call the function to test
function helloName(name){
return `Hello, ${name}!`;
}
helloName('Jenny');
console.log('this should say Hello, Jenny!', helloName('Jenny') );

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('this should add 3 & 2 and equal 5:', addNumbers(3,2))

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
return numOne * numTwo * numThree;
}
console.log('This should equal 6:', multiplyThree(1,2,3));
console.log('Lets see if this works!:', multiplyThree(22,33,44));
console.log('Lets see if this works too!:', multiplyThree(10,20,30));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else
  return false;
}
console.log('this should be true:', isPositive(3));
console.log('this should be false:', isPositive(-3));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let fruitArray = ['apple', 'pear', 'grapes', 'oranges', 'bananas']
function getLast(array) {
return array[array.length - 1];
}
console.log('the last item in the fruit array is:', getLast(fruitArray))

let blankArray = []
console.log('this should return undefined:', getLast(blankArray))

// 7. Function to find a value in an array. Return true if the 
//  value is found and false otherwise. Use a loop;
//  DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array){
for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    return true
  } else {
    return false
   }
  }
  }

 
console.log('should return true:', find('apple', fruitArray))
console.log('should return false:', find('spinach', fruitArray))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) { 
  if (string[0] === letter) {
    return true 
     } else {
      return false

     }
}
console.log('should return true:', find('c', 'cat'))
console.log('should return false:', find('a', 'cat'))

// 9. Function to return the sum of all numbers in an array


  // TODO: loop to add items

  // TODO: return the sum
  let numArray = [10, 20, 30, 40];
  function sumAll(array) {
    let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
  }
  return sum;
  }
  console.log('this should be 100:', sumAll(numArray) )

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
