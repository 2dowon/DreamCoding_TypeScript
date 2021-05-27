interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const dowon = new PartTimeEmployee();

ellie.workFullTime();
dowon.workPartTime();

// const ellieAfterPay = pay(ellie) as FullTimeEmployee;
// ellieAfterPay.workFullTime();
const ellieAfterPay = payBad(ellie);
const dowonAfterPay = payBad(dowon);

const bob = new PartTimeEmployee();
const bobAfterPay = pay(bob);
bobAfterPay.workPartTime();

// ---------------------------------------------

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐶",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐶
// console.log(getValue(obj2, "name")); // 에러
