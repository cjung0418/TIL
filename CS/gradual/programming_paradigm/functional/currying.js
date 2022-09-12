function _curry(fn) {
  return function(a) {
    return function(b) {
      return fn(a,b)
    }
  }
}

function _curry2(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a,b) : function(b) {return fn(a,b)};
  }
}

const multi = _curry(function(a,b) {
  return a*b;
});

console.log(multi(10)(2));
