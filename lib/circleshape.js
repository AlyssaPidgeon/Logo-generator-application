class Shape {
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

class Circle extends Shape {
  constructor(text, text_colour, shape, shape_colour) {
    super(text, text_colour, shape, shape_colour);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shape_colour}" />`;
  }
}

module.exports = { Circle };
