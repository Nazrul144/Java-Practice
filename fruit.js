// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let fruitItems = ['Apple', 'Orange', 'Banana', 'Jack Fruit', 'Mango'];
console.log(fruitItems); //Here I have printed all elements of the array.
console.log(fruitItems[3]); // Here I have printed the third element of the array.

// Replacing 2nd element of the array and placing there another items.

let index = 2;
let newItems = 'Strawberry';

fruitItems[index] = newItems; // Here I have added new item "Strawberry" in the place of 2nd index of the array.
console.log(fruitItems);