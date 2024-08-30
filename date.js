// 系統設置的當前時間
const now1 = new Date();
// const now2 = Date();
// console.log(now1, typeof now1, now2, typeof now2);

// console.log(Date.length);

// class Test {

//   constructor(a, b, c, d = 4) {
//     console.log(new Date());
//   }
// }

// console.log(Test.length);

// getDate 是從1開始
// getDate()
// console.log(now1.getDate());
// index sunday is 0
// console.log(now1.getDay());
// toString()
// toDateString()
// toTimeString()
// toISOString()
// toLocaleDateString()
// toLocaleString()
// toLocaleTimeString()
// toUTCString()

console.log("toString", now1.toString());
console.log("toISOString", now1.toISOString());
console.log("toLocaleString", now1.toLocaleString());
console.log("toUTCString", now1.toUTCString());
