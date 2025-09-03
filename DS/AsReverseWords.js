function reverseWords(sentence) {
  // Split the sentence into words
  let words = sentence.split(" ");

  // Reverse each word
  let reversedWords = words.map(word => {
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a sentence
  return reversedWords.join(" ");
}

console.log(reverseWords("Hello World")); // "olleH dlroW"


// -----------
function reverseWords(sentence) {
    let result = "";     // final answer
    let word = "";       // collect characters of a word

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];

        if (ch !== " ") {
            // keep adding characters of the current word
            word += ch;
        } else {
            // word ended → reverse it manually
            let reversedWord = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }
            result += reversedWord + " ";
            word = ""; // reset for next word
        }
    }

    // handle the last word (since it won't end with a space)
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
    }
    result += reversedWord;

    return result;
}

// Test
console.log(reverseWords("Hello World"));  // olleH dlroW
