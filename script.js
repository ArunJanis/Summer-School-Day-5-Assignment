console.log("=== Part 1: Variable and Data Types ===");

let nameVar = "Arun";
const ageConst = 20;
var isStudent = true;
let addressVar;
const scoreVar = null;

console.log(typeof nameVar);
console.log(typeof ageConst);
console.log(typeof isStudent);
console.log(typeof addressVar);
console.log(typeof scoreVar);










console.log("\n=== Part 2: Hoisting Demo ===");

console.log(aVar);
var aVar = 10;

let aLet = 20;

console.log("In JavaScript, variables declared with var are hoisted to the top of their scope and automatically initialized with undefined, so accessing them before their declaration doesn't cause an error, but gives undefined.");











console.log("\n=== Part 3: User Greeting - (Conditionals) ===");

let userName = prompt(" Enter NAME below:");
let userAge = parseInt(prompt(" Enter AGE below:"));

if (userAge < 18) {
  alert(`Hey ${userName}, you're a teen!`);
  console.log(`Hey ${userName}, you're a teen`);
} else if (userAge >= 18 && userAge <= 60) {
  alert(`Welcome ${userName}, you're an adult!`);
  console.log(`Hey ${userName}, you're a adult`);
} else {
  alert(`Hello ${userName}, you're a senior citizen!`);
  console.log(`Hey ${userName}, you're a senior citizon`);
}










console.log("\n=== Part 4: Looping Numbers ===");

console.log("For loop (1 to 10):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("While loop (even numbers 2 to 20):");
let even = 2;
while (even <= 20) {
  console.log(even);
  even += 2;
}

console.log("Do...while loop (10 down to 1):");
let down = 10;
do {
  console.log(down);
  down--;
} while (down >= 1);











console.log("\n=== Part 5: Functions ===");



function add(a, b) {
  return a + b;
}
let resultf1 = add(4, 5);
console.log("Sum of 4 and 5:", resultf1);



const square = function(n) {
  return n * n;
};
let resultf2 = square(6)
console.log("Square of 6:", resultf2);



const greet = (name) => {
  return `Hello, ${name}!`;
};
let resultf3 = greet("Arun")
console.log(resultf3);










console.log("\n=== Part 6: Callback Practice ===");

function processNum1(num, callback) {
  callback(num);
}

processNum1(5, function(n) {
  console.log("Double- 5*2 = ", n * 2);
});


function processNum2(num, callback) {
    callback(num)
}

processNum2(5, function(n) {
    console.log("Square- 5*5 =", n*n )
})

function processNum3(num, callback) {
    callback(num)
}

processNum3(5, function(n) {
    console.log("Cube- 5*5*5 =", n*n*n )
})





console.log("\n=== BONUS: Simple Calculator ===");

let num1 = parseFloat(prompt("CALC: Enter first number:"));
let num2 = parseFloat(prompt("CALC: Enter second number:"));
let operation = prompt("CALC: Choose operation: add (+), sub (-), mul (*), div (/)");

let result;

switch (operation) {
  case "add" :
  case "+" :
    result = num1 + num2;
    break;
  case "sub":
  case "-" :
    result = num1 - num2;
    break;
  case "mul":
  case "*" :
    result = num1 * num2;
    break;
  case "div":
  case "/" :
    result = num1 / num2;
    break;
  default:
    alert("Invalid operator");
}

if (result !== undefined) {
  alert(`Result: ${result}`);
}
