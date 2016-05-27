var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800
});

var cX = r.width/2;
var cY = r.height/2;

var tileSize = 50;

var pink = new Rune.Color('#C7277A');
var teal = new Rune.Color('#357F77');
var purple = new Rune.Color('#271649');

var radius = cX;
var size = r.width;



var count = 50;
for (var i = 0; i < count+1; i++) {
  var s = size - (i*8*2);
  var p = -6*(i/count);
  if (i%2) {
    p *= -1
  }

  r.circle(cX+p, cY, s/2*(i/count*0.015*s/2)).fill(getColor(i+1)).stroke(false);
}

function getColor(iNumber) {
  var c;
  switch (iNumber % 2) {
    case 0:
      c = pink;
      break;
    case 1:
      c = purple;
      break;
    case 2:
      c = purple;
      break;
    default:
      c = pink;
  }

  return c;
}


r.draw();