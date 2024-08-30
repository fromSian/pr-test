const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, [12, 3]];
const arr3 = arr1.concat(arr2);
// arr1.splice(1, 2, 8);
// console.log(arr3);

// every some
const everyFlag = arr1.every((item) => item < 5);
const someFlag = arr1.some((item) => item < 5);
// console.log(everyFlag, someFlag);

// fill 會改變原數組

const fillArr1 = arr1.fill(8, 1, 3);
// console.log(fillArr1, arr1);

// flatMap 先map再flat
const nest = [
  [1, 2, 3, 4, 5],
  [5, 6],
];

const flatMapArr = nest.flatMap((x) => x * 2);
console.log(flatMapArr);
