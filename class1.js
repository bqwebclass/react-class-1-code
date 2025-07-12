// console.log("Hello World!");

// // normal, arrow
// //   i = i + 1
// //   i += 10
// const sumFrom1To10 = (n) => {
//     if(n > 0 && n < 500){
//         let sum = 0;
//         for(let i=1; i <= 1000; i++){ // i = 1, 2, 3, 4, ... 11
//             // sum = 1 + 2
//             sum = sum + i
//         }
//         console.log(sum);
//     }
//     else if(n === 0){
//         console.log("Please enter n greater than 0")
//     }
//     else {
//         console.log("else")
//     }
// }

// // 1 TO n
// // SUM = n * (n+1) / 2

// // IIFE (Immediately Invoke function execution)

// sumFrom1To10(100)




// (()=>{
//     console.log("IIFE");
// })()

// let, var & const -> hoisting 

// function num(){
//     console.log(a);
//     var a = 10;
// }

// // change -> const redeclare/reassign 

// num();






// let rollNum = "test"

// student1[rollNum] = "BQ-0988";

// console.log(student1);

// console.log(Object.keys(student1)) 
// console.log(Object.values(student1)) 

// const student1 = {
//     name: 'Osama',
//     age: 26,
// };

// for (let myKey in student1) {
//     // key = 'name'
//     console.log(student1[myKey]);    // name
// }



// .map , .filter, .find

// const arr = [1, 2, 3, 4, 5];

// arr.forEach()

function myFunc(callback){
    for (let index = 0; index < 300; index++) {
        
        if(index == 200){
            callback()
        }
    }

}
// js is sync

//Async -> callback, .then (resolve) & .catch (reject) & .finally

// state of promise ->  pending, resolve, reject

const myCallBackFUN = ()=>{
    console.log("Callback Func Called");
}

// myFunc(myCallBackFUN)






new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("asjcasjcsa")
    }, 5000)
})