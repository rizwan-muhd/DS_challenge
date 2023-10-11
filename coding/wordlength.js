var sentece = "   fly me   to   the moon  ";

// console.log(sentece.charAt(sentece.length - 1));
var word = sentece.split(" ");
word = word.filter((w) => w !== "");
// word.sort();
console.log(word);

console.log(word[word.length - 1].length);
