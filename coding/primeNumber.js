const n = 5;
let prime = 0;

const checkPrime = (n) => {
  if (n < 2) {
    return (prime = 0);
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i / j === 0) {
        console.log(i);

        prime = prime + 1;
      }
    }
  }
};

checkPrime(n);
console.log(prime);
