/**
 * Let's make a calculator 🧮
 */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(command: Command, ...numbers: number[]): number {
  switch (command) {
    case "add":
      return numbers.reduce((a, b) => a + b);
    case "substract":
      return numbers.reduce((a, b) => a - b);
    case "multiply":
      return numbers.reduce((a, b) => a * b);
    case "divide":
      return numbers.reduce((a, b) => a / b);
    case "remainder":
      return numbers.reduce((a, b) => a % b);
    default:
      throw new Error("unknown error");
  }
}

console.log(calculate("add", 1, 3, 5)); // 9
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
