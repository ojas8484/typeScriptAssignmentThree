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
var circleObjectOne = new circle(2);
var circleObjecttwo = new circle(5);
var a: number = 0;
var a = circleObjectOne.area();
console.log("area of first circle = " + a);
var a = circleObjecttwo.area();
console.log("area of second circle = " + a);
