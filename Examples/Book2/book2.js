// Alex Olivier
// Recreation of Bertrand Russell's "A Inquiry into Meaning and Truth"
// Written for Code Kitchen, 5/26/2016

// Create a new Rune.js environment
// This is like creating our canvas
var r = new Rune({
  container: "body",
  width: 1000, // Canvas width
  height: 1000, // Canvas height
  // debug: true
});

var numRows = 20;
var numCols = 20;

// A list of colors that will be used in our design
var colorlist = [
  
  new Rune.Color(54,20,17), // brown
  new Rune.Color(34,121,146), // blue
  new Rune.Color(0,0,0), // black
  new Rune.Color(243,0,20), // red
  new Rune.Color(255,255,255) // white
];

// Choose a random color
// We have a higher probability of choosing brown or blue
// This reflects the higher amount of brown and blue in the design
function randomColor() {

  // Choose a random value between 0-10
  var randVal = Rune.random(0, 10);

  // If our number < 8, we will choose blue or brown
  if (randVal < 8){
      var index = Math.round(Rune.random(1));
      return colorlist[index];
  }else{
    // Otherwise, we choose red, white, or black
    var index = Math.round(Rune.random(2,colorlist.length-1));
    return colorlist[index];
  }
}

// These will be the same value.
var triW = r.width / numCols +2;

// Generate triangles in each grid cell
var generateTriangles = function() {

  // Use Rune.js's grid system
  // This allows us to easily add objects to 
  // regularly-spaced "cells"
  var grid = r.grid({
    x: 0, // x position of grid
    y: 0, // y position of grid
    width: r.width,
    height: r.height,
    gutter: 0,
    columns: numCols,
    rows: numRows
  });

  // For each cell in our grid...
  for (var i = 0; i < numCols; i++){
    for (var j = 0; j < numRows; j++){

      // This random value will be used
      // to determine what direction the triangles face
      var randVal = r.random(0,10);

      // For each cell, create 2 triangles
      var t1, t2;

      // If < 5, triangles face one way
      if (randVal < 5){

        // Choose random color for triangle 1
        var c1 = randomColor();
        t1 = r.triangle(0,0, 0,triW,triW,0)
        .fill(c1)
        .stroke(c1);

        // Choose random color for triangle 2
        var c2 = randomColor();
        t2 = r.triangle(0,triW,triW,triW,triW,0)
        .fill(c2)
        .stroke(c2);

      // Otherwise, triangles face the other way
      }else{

        // Choose random color for triangle 1
        var c1 = randomColor();
        t1 = r.triangle(0,0,0,triW,triW,triW)
        .fill(c1)
        .stroke(c1);

        // Choose random color for triangle 2
        var c2 = randomColor();
        t2 = r.triangle(0,0,triW,0,triW,triW)
        .fill(c2)
        .stroke(c2);

      }

    // Add both triangles to grid
    grid.add(t1, i + 1,j + 1);
    grid.add(t2, i + 1,j + 1);

  }
}
}

// Clear all children of the stage
var clearStage = function() {
  r.stage.children = [];
}
// First call to generate triangles
generateTriangles();

// Regenerate triangles on "click"
r.on('click', function() {
  
  clearStage();
  generateTriangles();

  r.draw();
});

r.draw();