class circle {
  radius: number;
  pi: number;
  constructor(r: number) {
    this.radius = r;
    this.pi = 3.14;
  }
  area(): number {
    let areaOfCircle: number = 0;
    areaOfCircle = this.pi * this.radius * this.radius;
    return areaOfCircle;
  }
}
class circleX extends circle {
  constructor(r: number) {
    super(r);
  }
  circumference(): number {
    let circumferenceOfCircle: number = 0;
    circumferenceOfCircle = 2 * this.pi * this.radius;
    return circumferenceOfCircle;
  }
}
var circleXObjectOne = new circleX(2);
var circleXObjectTwo = new circleX(5);
var a: number = 0;
var a = circleXObjectOne.circumference();
console.log("circumference of first circle = " + a);
var a = circleXObjectTwo.circumference();
console.log("circumference of circle two = " + a);
