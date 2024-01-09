class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayData() {
    console.log(`name:${this.name},age:${this.age}`);
  }
}

const personInfo = new person("Rizwan", 23);
const personInfo2 = new person("Rizwankk", 23);

personInfo.displayData();
personInfo2.displayData();
