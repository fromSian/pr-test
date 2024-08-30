let xx = {};
xx[Symbol(1)] = 1;
xx[Symbol(1)] = 3;
console.log(xx, JSON.stringify(xx));

// 對象屬性的標識符
