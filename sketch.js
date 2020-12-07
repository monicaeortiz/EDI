/*
GRID QUAD meo 19 Nov 2020
adapted from eer 11/18/2020
export SVG
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(innerWidth, innerWidth); // Create SVG Canvas, set this to artboard size in pixels
  strokeWeight(1); // 1 for axidraw, 0.001 for laser
  stroke(0, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for axidraw
}

function draw() {

  genQuad();
  //save("GRID QUAD.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}

function windowResized() {
  size = max(innerWidth, innerHeight);
  resizeCanvas(innerWidth, innerHeight, false);
}

function genQuad() {
// width = windowWidth;
// height = windowHeight;
  // set parameters
  var layers = 3; // how many polygons to draw at single position
  var shift = 2; // degree of shift in square
  var space = 5; // spacing between polygons

  var num = 25; // num squares in row/column
  var w = (innerWidth - (num + 1) * space) / num; // width of individual square

  // draw background square: full size, random
  var r = 155;//random(200,255);
  var g = 160;
  var b = 200;//random(200,255);
  background(r,g,b);

  noFill();

  // change stroke to random color
  stroke(r-100, g-100, b-100);

  // draw all squares
  for (var x = space; x < width - space; x += w + space) {
    for (var y = space; y < height - space; y += w + space) {
      for (let i = 0; i < layers; i++) {


        // choose random fill and stroke colors
        //stroke(random(50, 100), random(0, 25), random(50, 100))
        //fill(random(0, 255), random(0, 255), random(0, 255), 200)

        // draw polygon
        quad(random(-shift / 2 + x, shift / 2 + x), random(-shift / 2 + y, shift / 2 + y),
          random(w - shift / 2 + x, w + shift / 2 + x), random(-shift / 2 + y, shift / 2 + y),
          random(w - shift / 2 + x, w + shift / 2 + x), random(w - shift / 2 + y, w + shift / 2 + y),
          random(-shift / 2 + x, shift / 2 + x), random(w - shift / 2 + y, w + shift / 2 + y));

      }
    }
  }
}
