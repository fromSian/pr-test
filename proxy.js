/**
 * handler
 *
 * get
 * set
 */

const obj = {
  a: 2,
  b: 4,
};

const handler = {
  get: (obj, prop) => {
    console.log(obj);
    return prop in obj ? obj[prop] : "I dont know";
  },
};

const p = new Proxy(obj, handler);
console.log(p.a); // 2
console.log(p.c); // I dont know
