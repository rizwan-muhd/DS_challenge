var isValid = function (s) {
  const stack = [];
  const matchingBrackets = {
    "}": "{",
    ")": "(",
    "]": "[",
    ">": "<",
  };

  for (let char of s) {
    if ("{[<(".includes(char)) {
      // If it's an opening bracket, push it to the stack
      stack.push(char);
    } else if ("}])>".includes(char)) {
      // If it's a closing bracket, check if it matches the top of the stack
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false; // Unbalanced or incorrect bracket
      }
    }
  }

  // If the stack is empty, all brackets were balanced
  return stack.length === 0;
};
