var circle = /** @class */ (function () {
    function circle(r) {
        this.radius = r;
        this.pi = 3.14;
    }
    circle.prototype.area = function () {
        var areaOfCircle = 0;
        areaOfCircle = this.pi * this.radius * this.radius;
        return areaOfCircle;
    };
    return circle;
}());
var circleObjectOne = new circle(2);
var circleObjecttwo = new circle(5);
var a = 0;
var a = circleObjectOne.area();
console.log("area of first circle = " + a);
var a = circleObjecttwo.area();
console.log("area of second circle = " + a);
