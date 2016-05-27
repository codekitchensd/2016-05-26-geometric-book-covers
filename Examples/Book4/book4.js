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



var count = 9;
for (var i = 0; i < count+1; i++) {
  var s = size - (i*40*2);
  var p = i*40;

  var rectColor;

  switch (i) {
    case 0:
      rectColor = pink;
      break;
    case count:
      rectColor = pink;
      break;
    default:
      rectColor = teal;
  }

  r.rect(p, p, s, s).fill(rectColor).stroke(false);
  r.circle(cX, cY, s/2).fill(getColor(i+1)).stroke(false);
}

function getColor(iNumber) {
  var c;
  switch (iNumber % 2) {
    case 0:
      c = pink;
      break;
    case 1:
      c = teal;
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