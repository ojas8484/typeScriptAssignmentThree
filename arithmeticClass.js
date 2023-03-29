var arithmetic = /** @class */ (function () {
    function arithmetic(a, b) {
        this.number1 = a;
        this.number2 = b;
    }
    arithmetic.prototype.addition = function () {
        var summation = 0;
        summation = this.number1 + this.number2;
        return summation;
    };
    arithmetic.prototype.substraction = function () {
        var substraction = 0;
        substraction = this.number1 - this.number2;
        return substraction;
    };
    arithmetic.prototype.multipliction = function () {
        var multipliction = 0;
        multipliction = this.number1 * this.number2;
        return multipliction;
    };
    arithmetic.prototype.division = function () {
        var division = 0;
        division = this.number1 / this.number2;
        return division;
    };
    return arithmetic;
}());
var testObjectOne = new arithmetic(10, 2);
var testObjectTwo = new arithmetic(99, 33);
var a = 0;
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
