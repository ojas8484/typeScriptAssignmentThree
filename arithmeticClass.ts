class arithmetic {
  number1: number;
  number2: number;
  constructor(a: number, b: number) {
    this.number1 = a;
    this.number2 = b;
  }
  addition(): number {
    let summation: number = 0;
    summation = this.number1 + this.number2;
    return summation;
  }
  substraction(): number {
    let substraction: number = 0;
    substraction = this.number1 - this.number2;
    return substraction;
  }
  multipliction(): number {
    let multipliction: number = 0;
    multipliction = this.number1 * this.number2;
    return multipliction;
  }
  division(): number {
    let division: number = 0;
    division = this.number1 / this.number2;
    return division;
  }
}
var testObjectOne = new arithmetic(10, 2);
var testObjectTwo = new arithmetic(99, 33);
var a: number = 0;
var a = testObjectOne.addition();
console.log("result of addition = " + a);
var a = testObjectOne.substraction();
console.log("result of substractio = " + a);
var a = testObjectOne.multipliction();
console.log("result of multiplication = " + a);
var a = testObjectOne.division();
console.log("result of division  = " + a);
console.log("");
console.log("Iteration of second object starts below ");
console.log("");
var a = testObjectTwo.addition();
console.log("result of addition = " + a);
var a = testObjectTwo.substraction();
console.log("result of substractio = " + a);
var a = testObjectTwo.multipliction();
console.log("result of multiplication = " + a);
var a = testObjectTwo.division();
console.log("result of division  = " + a);
