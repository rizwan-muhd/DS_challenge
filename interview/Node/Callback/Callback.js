const fetchData = (callback) => {
  setTimeout(() => {
    const data = { name: "Rizwan", place: "bangalore" };
    callback(null, data);
  }, 1000);
};

const display = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
};

fetchData(display);

const original = {
  name: "Rizwan",
  address: { city: "Bangalore", pin: 560001 },
};

// Shallow copy using spread operator
const shallowCopy = { ...original };

shallowCopy.name = "Ali"; // OK
shallowCopy.address.city = "Delhi"; // ⚠️ Changes original too!

console.log(original.address.city); // "Delhi"
console.log(original.name);
console.log(original);
