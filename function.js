// 每個函數都是一個Function對象

// Function 動態創建函數
// console.log(globalThis);
/**
 * 
 *  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch]
}
 */

function add() {
  //   console.log(this, globalThis);
  console.log("new");
  this.xx = "jkj";
  return { x: "fd" };
}
add.call({ x: 2 });

const b = new add();
console.log(b);
