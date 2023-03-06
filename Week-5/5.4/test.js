const mathFunction = {
  sum: (a, b) => {
    return a + b;
  },

  sub: (a, b) => {
    return a - b;
  },
 
  mul: (a, b) => {
    return a * b;
  },
};

test("Adding two numbers", () => {
  expect(mathFunction.sum(1, 2)).toBe(3);
});

test("Subtracting two numbers", () => {
  expect(mathFunction.sub(2, 1)).toBe(1);
});

test("Adding two numbers", () => {
  expect(mathFunction.mul(5, 2)).toBe(10);
});
