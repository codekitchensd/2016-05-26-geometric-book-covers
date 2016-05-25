var r = new Rune({
  container: "body",
  width: 1000,
  height: 1000,
  // debug: true
});

var grid = r.grid({
  x: 0, // x position of grid
  y: 0, // y position of grid
  width: r.width - 100,
  height: r.height - 100,
  gutter: 0,
  columns: 6,
  rows: 6
});

var colorlist = [
  
  new Rune.Color(54,20,17), // brown
  new Rune.Color(34,121,146), // blue
  new Rune.Color(0,0,0),
  new Rune.Color(243,0,20),
  new Rune.Color(255,255,255)
];

function randomColor() {

  var randVal = Rune.random(0, 10);

  if (randVal < 8){
      var index = Math.round(Rune.random(1));
      return colorlist[index];
  }else{

  var index = Math.round(Rune.random(2,colorlist.length-1));
  return colorlist[index];
  }

}

var generateTriangles = function() {
for (var i = 0; i < 6; i++){
  for (var j = 0; j < 6; j++){

    var randVal = r.random(0,10);

    var t, t2;
    if (randVal < 5){

    var c1 = randomColor();
    t = r.triangle(0,0, 0,150,150,0)
    .fill(c1)
    .stroke(c1);

    var c2 = randomColor();
    t2 = r.triangle(0,150,150,150,150,0)
    .fill(c2)
    .stroke(c2);

    }else{

      var c1 = randomColor();
      t = r.triangle(0,0,0,150,150,150)
    .fill(c1)
    .stroke(c1);

    var c2 = randomColor();
    t2 = r.triangle(0,0,150,0,150,150)
    .fill(c2)
    .stroke(c2);

    }
    // draw triangle


    console.log("adding");
    grid.add(t, i + 1,j + 1);
    grid.add(t2, i + 1,j + 1);

  }
}
}

generateTriangles();

r.on('click', function() {
  generateTriangles();
  r.draw();
});

r.draw();