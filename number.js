
// The toString() Method
let x = 123;
stringX = x.toString();
console.log(stringX);
console.log(typeof(stringX));

// toExponential method
let num = 9.656;
let newNum = num.toExponential(2);
console.log(newNum);

// the toFixed() Method
console.log(`the fixed value: ${num.toFixed(4)}` );
// the toPrecison() Method
console.log(`the precised value: ${num.toPrecision(3)}`)
// the valueOf() Method
console.log(`the value of : ${num.valueOf()}`);
