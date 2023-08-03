class Shape {
  //add variable input (text, text-colour etc)
  constructor(text, text_colour, shape, shape_colour) {
    this.text = text;
    this.text_colour = text_colour;
    this.shape = shape;
    this.shape_colour = shape_colour;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_colour}">${this.text}</text></svg>`;
  }
  setShape(shape) {
    this.shape = shape.render();
  }
}

class Square extends Shape {
  constructor(text, text_colour, shape, shape_colour) {
    super(text, text_colour, shape, shape_colour);
  }
  render() {
    return `<rect x="25" y="3" width="250" height="300" fill="${this.shape_colour}" />`;
  }
}

module.exports = { Shape, Square };
