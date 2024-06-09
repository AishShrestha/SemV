const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(`The length of given array is ${size}`);
// console.log(`The string form of given array is ${fruits.toString()}`);
// console.log(`The third element of the given array is ${fruits.at(2)}`);
// console.log(`Joining the array with * : ${fruits.join("*")}`);
// console.log(`The popped element of the array is ${fruits.pop()}`);
// console.log(fruits);
// fruits.push("Strawberry");
// console.log(`The new array after pushing new element : ${fruits}`);
// console.log(`The shifted element from the array is ${fruits.shift()}`);
// console.log(fruits);
// fruits.unshift("Watermelon");
// console.log(`the new array after performing unshift operation: ${fruits}`)


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(`New array after concatination: ${myChildren}`);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(`New array after splice: ${fruits}`)
