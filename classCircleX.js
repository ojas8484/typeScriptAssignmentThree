var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var circleX = /** @class */ (function (_super) {
    __extends(circleX, _super);
    function circleX(r) {
        return _super.call(this, r) || this;
    }
    circleX.prototype.circumference = function () {
        var circumferenceOfCircle = 0;
        circumferenceOfCircle = 2 * this.pi * this.radius;
        return circumferenceOfCircle;
    };
    return circleX;
}(circle));
var circleXObjectOne = new circleX(2);
var circleXObjectTwo = new circleX(5);
var a = 0;
var a = circleXObjectOne.circumference();
console.log("circumference of first circle = " + a);
var a = circleXObjectTwo.circumference();
console.log("circumference of circle two = " + a);
