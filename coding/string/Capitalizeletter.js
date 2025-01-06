const title = "capiTalIze tHe titLe";

const capiTalize = (title) => {
  const word = title.split(" "); // O(n)

  let result = word.map((word) => {
    // O(n)
    if (word.length < 2) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return result.join(" "); //O(n)
};

const res = capiTalize(title);
console.log(res);

// Time Complexity = O(n)+ O(n) +O(n) = O(n)
