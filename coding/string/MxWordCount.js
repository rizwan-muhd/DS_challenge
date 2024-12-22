const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

const maxWords = () => {
  let count = [];
  let large = 0;
  for (let i = 0; i < sentences.length; i++) {
    let wordCount = 1;
    for (let k = 0; k < sentences[i].length; k++) {
      //   console.log(sentences[i][k]);
      if (sentences[i][k] === " ") {
        wordCount++;
      }
    }
    count.push(wordCount);

    if (wordCount > large) {
      large = wordCount;
    }
  }

  console.log(count);
  console.log(large);
};

maxWords(sentences);
