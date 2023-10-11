s = "()[]{}";
// s.toArray();
s.split();
console.log(s.length);

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    // console.log(s.charAt(i), s.charAt(j));
    if (s.charAt(i) === "(") {
      console.log("open para");
    }
  }
}
