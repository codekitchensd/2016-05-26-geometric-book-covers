var r = new Rune({
  container: "body",
  width: 1000,
  height: 1000,
  // debug: true
});


var distance = function(x1,y1,x2,y2) { 
  var d = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
  return d;
}

var circleGrid = function(){

  // Draw background rectangle
  r.rect(0,0,430,430)
  .fill(75,75,70)
  .stroke(false);

  // Pick center of jumble
  var jumbleX = r.random(1,7)*43 + 22;
  var jumbleY = r.random(1,7)*43 + 22;

  // Pick center of blue group
  var blueX = Math.floor(r.random(0,7));
  var blueY = Math.floor(r.random(0,7));

  for (var i = 0 ; i < 10; i++){
    for (var k = 0; k < 10; k++){

      var baseX = 22 + i*43;
      var baseY = 22 +k*43;

      var d = distance(baseX, baseY, jumbleX, jumbleY);

      console.log(d);

      var noise = 30;

      if (d < 100){
        baseX += r.random(-20,20);
        baseY += r.random(-20,20);

      }

      r.circle(baseX, baseY,20)
      .fill(75,75,70)
      .stroke(255,255,255)
      .strokeWidth(1);


    }
  }

  for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){

      var x = i + blueX;
      var y = j + blueY;



      r.circle(22 + x*43, 22 +y*43,20)
      .fill(99,161,188)
      .stroke(99,161,188)
      .strokeWidth(2);

    }
  }

  // Pick center of 
}

circleGrid();



r.on('click', function() {
  circleGrid();
  
  r.draw();
});

r.draw();