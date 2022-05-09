const isPermutation_of_Palindrom = (str) => {
  //  To lower case
  const lowerStr = str.toLowerCase();
  // Create Mapping
  const charMap = {};
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (char !== " ") {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  }
  let oddCounter = 0;
  // Object can only have one key with an odd value
  for (const value in charMap) {
    if (charMap[value] % 2 !== 0) oddCounter++;
  }
  if (oddCounter > 1) return false;
  return true;
};

console.log(
  isPermutation_of_Palindrom("rACeCarad"),
  "::",
  isPermutation_of_Palindrom("rCCeaar"),
  "::",
  isPermutation_of_Palindrom("taco cat")
);
