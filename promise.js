const pro = new Promise((resolve, reject) => {
  resolve("pro");
});
pro
  .then((value) => {
    console.log(value + "then1");
    return value + "then1";
  })
  .then((value) => {
    console.log(value + "then2");
  });

// 併發
// any all
