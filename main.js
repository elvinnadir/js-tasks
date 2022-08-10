// task1  print hello world
// console.log("Hello World");

// task2 return square a number
// console.log(Math.sqrt(16));


// task3 reverse number
// function reversedNum(num) {
//     return (
//         num.toString()
//         .split('')
//         .reverse()
//         .join('')
//     )                 
//   }
//   console.log(reversedNum(1345))

// task4 a given number 13
// function myNum(a){
//     if(a<13){
//         return 13-a;
//     }
//     else{
//         return a*2;
//     }
// }
// console.log(myNum(18));


// task5 array length > 5 add element/delet 
let a = [13, 14, 34, 54, 46, 41, 44];
if (a.length > 5) {
    a.unshift("first title");
} else {
    a.pop();
}
console.log(a);


