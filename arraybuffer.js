// 字節數組

const buffer = new ArrayBuffer(9);
console.log(buffer);

const dataView = new DataView(buffer);
console.log(dataView);

// int8 16 32 bigint64
// u 不帶符號 就是正數
// float 16 32 64
