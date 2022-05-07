// Brute Force

const checkPermutaion = (a, b) => {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    let counterA = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        counterA++;
      }
    }
    let counterB = 0;
    for (let k = 0; k < b.length; k++) {
      if (a[i] === b[k]) {
        counterB++;
      }
    }
    if (counterA !== counterB) return false;
  }
  return true;
};

// console.log(checkPermutaion("abc", "efg"));

// CTCI soln 2 - Time Complexity O(N)

const checkPermutaion2 = (a, b) => {
  if (a.length !== b.length) return false;
  let ary = new Array(128);
  ary.fill(0);
  for (let i = 0; i < a.length; i++) {
    ary[a[i].charCodeAt()]++;
  }
  for (let i = 0; i < b.length; i++) {
    ary[b[i].charCodeAt()]--;
    if (ary[b[i].charCodeAt()] < 0) {
      return false;
    }
  }
  return true;
};

console.log(
  checkPermutaion2("abc", "cab"),
  checkPermutaion2("dog", "God"),
  checkPermutaion2("abc", "efg"),
  checkPermutaion2("abc", "efg"),
  checkPermutaion2("bcaaaaaa", "aaacbaaa")
);
