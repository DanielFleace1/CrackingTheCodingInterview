//  Brute force soln

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        return false;
      }
    }
    return true;
  }
};

// console.log(
//   isUnique("abcd"),
//   isUnique("aacd"),
//   isUnique("abca"),
//   isUnique("cbcd"),
//   isUnique("DanielDevs"),
//   isUnique("Danielvs")
// );

//  Brute Force:  O(N^2)

// CTCI_ SOLN 1
const isUnique2 = (str) => {
  const maxChar = 256;
  if (str.length > 256) return false;
  let ary = new Array(maxChar);
  for (let i = 0; i < maxChar; i++) {
    ary[i] = false;
  }

  for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt();
    if (ary[index]) return false;
    else {
      ary[index] = true;
    }
  }
  return true;
};

console.log(
  isUnique2("abcd"),
  isUnique2("aacd"),
  isUnique2("abca"),
  isUnique2("cbcd"),
  isUnique2("DanielDevs"),
  isUnique2("Danielvs")
);

// O(N) - Loops through string once ... Or could be O(1) because String will never be longer than 256 characters or will immediately return false

// Extra :: https://www.geeksforgeeks.org/determine-string-unique-characters/
