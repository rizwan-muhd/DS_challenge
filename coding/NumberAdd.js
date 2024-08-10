const numberAdd = (num) => {
  while (!num % 10 === 0) {
    let last = num / 10;
    let n = num % 10;
    num = n;
  }
};

cons;

420;

// const strongPassWordCheck = (pass) => {
//     if()
// }

2739;

const fuelCunsume = (mainTank, additionalTank) => {
  const mileage = 10;

  let distanceTraveled = 0;

  while (mainTank > 0) {
    // Calculate how much fuel we can use for the next segment
    // We can only use up to 5 liters or whatever is left in the main tank
    const fuelToUse = Math.min(mainTank, 5);
    distanceTraveled += fuelToUse * mileage; // Calculate distance for this segment

    // Decrease the main tank by the fuel used
    mainTank -= fuelToUse;

    // If we've used 5 liters, check if we can transfer from the additional tank
    if (fuelToUse === 5 && additionalTank > 0) {
      // Transfer 1 liter from the additional tank to the main tank
      mainTank += 1;
      additionalTank -= 1; // Decrease additional tank by 1 liter
    }
  }

  return distanceTraveled;
};

const mainTank = 9,
  additionalTank = 3;
// const res = fuelCunsume(mainTank, additionalTank);
console.log(res);

const num = 2;

// const findSquareRoot = (num) => {
//   let res = 3;
//   if (num === 1) {
//     return true;
//   }
//   for (let i = 3; res < num; i + 3) {
//     res = res * 3;
//     console.log(res);
//     if (res === num) {
//       return true;
//     }
//   }

//   return false;
// };

// const res = findSquareRoot(num);
// console.log(res);

// number

const moveNumber = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const res = moveNumber(num);

console.log(res);
