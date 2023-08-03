const { Square } = require("./shapes.js");
const { Circle } = require("./circleshape.js");
const { Triangle } = require("./triangleshape.js");

test("Test to create new circle shape", function () {
  const testCircle = new Circle("ABC", "Green", "Circle", "Orange");
  expect(testCircle.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="Orange" />'
  );
});

test("Test to create new triangle shape", function () {
  const testTriangle = new Triangle("ABC", "Green", "Triangle", "Orange");
  expect(testTriangle.render()).toEqual(
    `<polygon points= "150, 18 244, 182 56, 182" fill="Orange" />`
  );
});

test("Test to create new square shape", function () {
  const testSquare = new Square("ABC", "Green", "Square", "Orange");
  expect(testSquare.render()).toEqual(
    '<rect x="25" y="3" width="250" height="300" fill="Orange" />'
  );
});
