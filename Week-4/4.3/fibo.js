const fibo = (n) => ({
  [Symbol.iterator]: () => {
    let i = 0;
    let prev = 0,
      next = 0;
    return {
      next: () => {
        if (i++ < n) {
          [prev, next] = [next, prev + next || 1];
          return {
            value: prev,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
});

console.log([...fibo(10)]);
