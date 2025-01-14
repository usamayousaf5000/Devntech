

// let swap = () => {
//     let x = 20;
//     let y = 30;
//     // method 1
//     //   x = x - y;
//     //   y = x + y;
//     //   x = y - x;
//     console.log(x);
//     console.log(y);
// };
// swap();

// (()=>{
//     let arr = [1,2,3,3,5,5,7,8,9,9,10];
//     let res = [...new Set(arr)];
//     console.log(res);
// })();
// function findMissingNumber(arr) {
//     let n = arr.length;
//     let total = (n + 1) * (n + 2) / 2;
//     for (let i = 0; i < n; i++) {
//         total -= arr[i];
//     }
//     return total;
// }
// console.log(findMissingNumber(arr));

// function CenterElementOfArray(arr) {
//     let n = arr.length;
//     let mid = Math.floor(n / 2);
//     return arr[mid];
// }
// console.log(CenterElementOfArray(arr));
// let arr = [1, [2, 3], 4, [5, 6], 7, 8, [9, 10]];
// function flatternArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatternArray(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(flatternArray(arr));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(2);
// arr.push(3);
// arr.shift(2);
// arr.unshift(1);
// console.log(arr.at(2));
// console.log(arr);
// console.log(arr.indexOf(2));
// console.log(arr.splice(3, 6));
// console.log(arr.slice(1, 4));
// console.log(arr.filter((value) => value > 3));
// console.log(arr.includes(11));
// console.log(arr.map((value) => value * 2));
// console.log(arr.some((value) => value > 3));
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const result = words.filter(word => word.length > 6);
// console.log(result);


// function sum(a = 1, b = 2) {
//     // SyntaxError: "use strict" not allowed in function with default parameter
//     "use strict";
//     return a + b;
//   }
//   console.log(sum(3, 4));

// const myModule = {
//     x: 42,
//     getX: function () {
//       return this.x;
//     },
//   };
  
//   const unboundGetX = myModule.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   // Expected output: undefined
  
//   const boundGetX = unboundGetX.bind(myModule);
//   console.log(boundGetX());
//   // Expected output: 42


// console.log("Before delay");

// function delayBySeconds(sec) {
//     let start = now = Date.now()
//     while(now-start < (sec*1000)) {
//         now = Date.now();
//     }
// }

// delayBySeconds(5);

// // Executes after delay of 5 seconds
// console.log("After delay"); 


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const result = [...arr1, ...arr2];
// console.log(result)

// const myvehicle = {
//     make: "Ford",
//     model: "Mustang",
//     year: 1969
// };
// const updateMyvehicle = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// const updatedVehicle = { ...myvehicle, ...updateMyvehicle };
// console.log(updatedVehicle);

// const name = "Sarah";
// const age = 28;

// const person = { name, age };

// console.log(person); // { name: "Sarah", age: 28 }

// const obj = {
//     name: "Sarah",
//     age: 28,
//     height: "5'6"
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// let bob = { 
//     clothingChoice: 'cargo shorts',
//     complimentSelf: function() {
//       console.log(`${this.clothingChoice} are very stylish, so I am stylish.`);
//     },
//   };
  
//   let complimentBob = bob.complimentSelf.bind(bob);
//   complimentBob();


// const a = [10, 20,30, 40];

// console.log("Example 1");
// const [x, y, z, w] = a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);
// console.log(a[3]);

let marks = { x: 21, y: -34, z: 47 };

const { x, y, z } = marks;

console.log(x);
console.log(y);
console.log(z);
console.log(marks.z);
console.log(marks["z"]);

let myObject = {
    name: "John",
    age: 30,
}
const { name, age } = myObject;
console.log(myObject.toString());