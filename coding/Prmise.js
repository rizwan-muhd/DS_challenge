const demo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });
};

demo()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  })
  .finally(() => {
    console.log("finaly");
  });
