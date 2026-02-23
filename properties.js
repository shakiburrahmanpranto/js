var shoppingCart = {
  books: 3,
  pen: 5,
  keyboard: 100,
  mouse: 23,
};
// titles are called keys and digits are called values

//
console.log(shoppingCart);

var properties = Object.keys(shoppingCart);
console.log(properties);

var properties = Object.values(shoppingCart);
console.log(properties);
