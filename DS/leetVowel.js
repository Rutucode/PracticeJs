function isVowel(ch) {
  if (
    ch === "a" ||
    ch === "A" ||
    ch === "e" ||
    ch === "E" ||
    ch === "i" ||
    ch === "I" ||
    ch === "o" ||
    ch === "O" ||
    ch === "u" ||
    ch === "U"
  ) {
    return true;
  } else {
    return false;
  }
}
var reverseVowels = function (s) {
  let start = 0;
  let end = s.length - 1;
  let arr = s.split("");
  while (start < end) {
    console.log(arr[end]);
    console.log(arr[start]);
    console.log("*" + isVowel(arr[end]));
    console.log(isVowel(arr[start]));

    if (!isVowel(arr[start])) {
      console.log("ABC");
      start++;
      continue;
    }
    if (!isVowel(arr[end])) {
      console.log("donkey");
      end--;
      continue;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    console.log(arr[end]);
    console.log(arr[start]);
    start++;
    end--;
  }
  return arr.join("");
};
console.log(reverseVowels("IceCream"));

/*
IceCream
I = m 
 
*/
