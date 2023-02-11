function memorise(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }

    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function sum(...args) {
  return args.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

const memoriseAdd = memorise(sum);

console.log(memoriseAdd(10)); // => 10
console.log(memoriseAdd(10, 100, 7)); // => 117
console.log(memoriseAdd(10, 100)); // => 110
