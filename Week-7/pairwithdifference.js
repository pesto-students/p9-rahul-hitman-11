function hasPairWithDifferenceB(A, B) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i] - B) || map.has(A[i] + B)) {
      return 1;
    }
    map.set(A[i], i);
  }

  return 0;
}
