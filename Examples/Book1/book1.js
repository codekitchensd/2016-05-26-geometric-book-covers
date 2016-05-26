// Alex Olivier
// Recreation of W.M. O'Neil's The Beginnings of Modern Psychology
// Written for Code Kitchen, 5/26/2016

// Create a new Rune.js environment
// This is like creating our canvas
var r = new Rune({
  container: "body",
  width: 1000,
  height: 1000,
  // debug: true
});

// A simple distance function
var distance = function(x1,y1,x2,y2) { 
  var d = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
  return d;
}

// Create a grid of circles
// Does NOT use the grid functionality
var circleGrid = function(){

  // Draw background rectangle, in gray
  r.rect(0,0,430,430)
  .fill(75,75,70)
  .stroke(false);

  var padding = 22;
  var radius = 20;
  var spacing = 2*radius + 3; // Distance between circle centers

  // Pick center of jumble
  var jumbleX = r.random(4,6)*spacing + padding;
  var jumbleY = r.random(4,6)*spacing + padding;


  for (var i = 0 ; i < 10; i++){
    for (var k = 0; k < 10; k++){

      var baseX = padding + i*spacing;
      var baseY = padding +k*spacing;

      var d = distance(baseX, baseY, jumbleX, jumbleY);

      var noise = 30;

      if (d < 120){
        baseX += r.random(-20,20);
        baseY += r.random(-20,20);

      }

      r.circle(baseX, baseY,radius)
      .fill(75,75,70)
      .stroke(255,255,255)
      .strokeWidth(1);


    }
  }

  // Pick corner of blue group
  var blueCorner = Math.floor(r.random(0,4));

  console.log("c" + blueCorner);
  var blueX = 0;
  var blueY = 0;

  if (blueCorner == 0){
      blueX = 7;
      blueY = 7;
  }else if (blueCorner == 1){
      blueX = 0;
      blueY = 7;

  }else if (blueCorner == 2){
      blueX = 7;
      blueY = 0;
  }

  for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){

      var x = i + blueX;
      var y = j + blueY;

      r.circle(padding + x*spacing, padding + y*spacing,radius)
      .fill(99,161,188) // Blue
      .stroke(99,161,188) // Blue
      .strokeWidth(2);

    }
  }
}

circleGrid();



r.on('click', function() {
  circleGrid();
  
  r.draw();
});

r.draw();