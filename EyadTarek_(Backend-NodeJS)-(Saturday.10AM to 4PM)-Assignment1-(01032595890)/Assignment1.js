// A. Part 1: Coding Questions:


//Q1:
let num = Number("123") + 7;
console.log(num);

//________________________________________________________//

 //Q2:
function check(value) {
  if (!value) {
    return "Invalid";
  }
  return "Valid";
}
console.log(check(0));

//________________________________________________________//

//Q3:
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//Q4:
const arr = [1, 2, 3, 4, 5];
const evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//________________________________________________________//

//Q5:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//________________________________________________________//

//Q6:
// Question 6
let numOfDay = 2;
switch (numOfDay) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

//________________________________________________________//

//Q7:
const array = ["a", "ab", "abc"];
const length = array.map((string) => string.length);
console.log(length);

//________________________________________________________//

//Q8:
function checkDivisibility(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "Divisible by both 3 and 5";
    }
    else {
        return "Not divisible by both 3 and 5";
    }
}
console.log(checkDivisibility(15));

//________________________________________________________//

//Q9:
const square = (number) => number * number;
console.log(square(5));

//________________________________________________________//

//Q10:
const user = {
    name: "Eyad",
    Age: 20
}

function getUserInfo(user) {
    const { name, Age } = user;
    return `${name} is ${Age} years old`;
}

console.log(getUserInfo(user));

//________________________________________________________//

//Q11:
function sumcalc(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(sumcalc([1, 2, 3, 4]));

//________________________________________________________//

//Q12:
function wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

wait().then((word) => {
    console.log(word);
});

//________________________________________________________//

//Q13:
function Max(num){
    let large = num[0];
    for (let i = 0; i < num.length; i++){
        if(num[i] > large){
            large = num[i];
        }
    }
    return large;
}

console.log(Max([1, 3, 7, 2, 4]));

//________________________________________________________//

//Q14:
function listKeys(object) {
    return Object.keys(object);
}
console.log(listKeys({ name: "Eyad", age: 20 }));

//________________________________________________________//

//Q15:
function splitWords(string) {
    return string.split(" ");
}
console.log(splitWords("The quick brown fox"));

//________________________________________________________//

//B. Part 2: Essay Questions:

//1.
/* forEach: an Array method that runs a callback on each element. Can't break/continue, and await inside it doesn't actually pause the loop. Only works on Arrays.
 for...of: a loop statement that works on any iterable (Arrays, Strings, Maps, Sets, etc). Supports break, continue, return, and works correctly with await.
 Use forEach for simple, full iteration with no early exit and no async.
 Use for...of when you need to break early, use async/await, or loop over something other than an array. */

//_________________________________________________________//

 //2.
// Hoisting: JS sees your variables and functions before running the code — like it scans everything first.

// console.log(x); // undefined
// var x = 5;

// TDZ: with let and const, if you try to use them before their declaration line, you get an error instead of `undefined`.

// console.log(y); // Error
// let y = 5;

// var → gives you `undefined` if used early. `let`/`const` → gives you an error if used before they're declared.

//_________________________________________________________//

//3.
// == can give you weird, sometimes unexpected results because of the type conversion. 
// === is safer and more predictable.

//_________________________________________________________//

//4.
// try-catch lets you run code that might fail without crashing the whole app — if something goes wrong, it jumps to the catch block and handles the error instead of stopping everything.
// Why it matters in async operations: async code (API calls, DB queries, file reads...) can fail in ways that are hard to predict — network issues, timeouts, bad responses. Without try-catch, one failed async operation can crash the whole server or leave things hanging with no response. With it, you catch the failure and handle it gracefully instead.

//_________________________________________________________//

//5.
// Type conversion: when you explicitly convert a value from one type to another yourself.

// const num = Number("5"); // "5" → 5, you did it on purpose
// const str = String(123); // 123 → "123"

// Type coercion: when JS automatically converts a type for you, usually without you asking for it.

// const result = "5" + 5; // "55", JS coerced the number into a string
// const check = "5" == 5; // true, JS coerced one side to compare them

// conversion is manual, you control it. Coercion is automatic, JS does it behind the scenes — and that's usually where the weird, unexpected bugs come from.