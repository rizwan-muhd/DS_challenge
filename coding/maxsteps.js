function climbStairs(n) {
  //   console.log("hello", n);
  // let n = 4;
  if (n === 0 || n === 1) {
    return 1;
  }
  let dp = new Array(n + 1);
  console.log(dp);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
}

climbStairs(8);
