// const cart = ["bag", "book", "pen"];

// createOder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentId) => showSummary(paymentId))
//   .then((paymentId) => addToWallet(paymentId));

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const random = Math.random();

    if (random > 0) {
      resolve("success");
    } else {
      reject("error");
    }
  }, 1000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
