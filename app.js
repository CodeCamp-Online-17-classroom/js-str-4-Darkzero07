let text1 = "This is a sample text containing the word XXX.";
// console.log(containsSensitiveWords(text1)); //true

let text2 = "This is a sample text without any sensitive words.";
// console.log(containsSensitiveWords(text2)); //false

function containsSensitiveWords(text) {
  let lowwerText = text.toLowerCase();
  let findText = ['xxx', 'sex', 'porn'];
  for (word of findText) {
    if (lowwerText.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(containsSensitiveWords(text1))
console.log(containsSensitiveWords(text2))