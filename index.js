const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Square } = require("./lib/shapes.js");
const { Circle } = require("./lib/circleshape.js");
const { Triangle } = require("./lib/triangleshape.js");
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What text do you want on your logo?",
    },
    {
      type: "input",
      name: "text_colour",
      message: "What colour do you want your text?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape do you want in your logo?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shape_colour",
      message: "What colour do you want your shape?",
    },
  ])
  .then((answers) => {
    const svgContent = new Shape(
      answers.text,
      answers.text_colour,
      answers.shape,
      answers.shape_colour
    );
    if (answers.text.length > 3) {
      throw new Error("text must be three letters or less");
    }
    if (answers.shape == "circle") {
      svgContent.setShape(
        new Circle(
          answers.text,
          answers.text_colour,
          answers.shape,
          answers.shape_colour
        )
      );
    } else if (answers.shape == "square") {
      svgContent.setShape(
        new Square(
          answers.text,
          answers.text_colour,
          answers.shape,
          answers.shape_colour
        )
      );
    } else if (answers.shape == "triangle") {
      svgContent.setShape(
        new Triangle(
          answers.text,
          answers.text_colour,
          answers.shape,
          answers.shape_colour
        )
      );
    }

    const generateSvg = svgContent.render();

    fs.writeFile("logo.svg", generateSvg, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
