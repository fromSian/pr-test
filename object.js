const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { a: 5, e: 6, f: 7, g: 8 };
Object.assign(obj1, obj2);

console.log(Object.entries(obj1), Object.getOwnPropertyNames(obj1));
// console.log(obj1, obj2);

// hasOwn and hadOwnProperty are the same, and hasOwn will replace hadOwnProperty

/**
 * Object.create()
 * 第一個參數創建對象的原型對象 prototype
 * 第二个参数将键映射到属性描述符，这意味着你还可以控制每个属性的可枚举性、可配置性等，而这在字面量初始化对象语法中是做不到的
 *
 * 返回根據屬性和原型對象創建的新對象
 */

function Constructor() {
  this.x = "this is x";
}
const o1 = new Constructor();

const o2 = Object.create(Constructor.prototype);
// Object.create 創建的無法反映初始化代碼

// console.log(o1.x, o2.x);
//

// Object.is() 對於對象和數組要指向同一個對象才返回true

// Object.prototype.toString()

// Object.prototype.valueOf() 類型轉換

const func = (a, b, c) => {};
console.log(func.length);
console.log(func.name);
