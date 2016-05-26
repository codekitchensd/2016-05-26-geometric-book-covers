// Kyle Stewart
// Recreation of Manlio Cancogni's (who dat?) "Azorin E Miro'"
// Written for Code Kitchen, 5/26/2016
// Useful example: http://printingcode.runemadsen.com/examples/randomization/noise_iceberg/

var r = new Rune({
  container: "body",
  width: 700, // Canvas width
  height: 900, // Canvas height
});

// draw background
r.rect(0, 0, r.width, r.height).fill("#2658a1");

// mountain colors back to front
var colorlist = [
  new Rune.Color("#e9e4d0"), // mountain 1
  new Rune.Color("#fd4d29"), // 2
  new Rune.Color("#082d85"), // 3
];

// setup our perlin noise
var noise = new Rune.Noise().noiseDetail(4, 0.75);
var noiseStep = 0;

// need to draw layers back to front
for (var i = 0; i < 3; ++i) {
  noise.noiseSeed(Rune.random(100)); // randomize each layer's seed so the mountains don't look the same

  // define origin point of current mountain
  // this will be the drawn base, which is somewhat below profile of mountain so they overlap well
  var height = r.height/2.0 + 80 * i; // space out terrain
  var mountain = r.polygon(0, height) // origin point - all lineTo commands are relative to this
    .fill(colorlist[i])
    .stroke(false);
  // mountain is drawn in 5 points (+2 base points)
  mountain.lineTo(0,0); // left base

  // lift of the base considerably
  mountain.lineTo(0, -noise.get(noiseStep)*100 - 120);  // left border
  noiseStep += 0.1;

  // we are using noise as a subtle variation
  // notice the main component is a static value
  // we want the mountains to more or less follow the basic form
  mountain.lineTo(60 + noise.get(noiseStep)*140, -noise.get(noiseStep*2.0)*60 - 300); // first peak
  noiseStep += 0.1;

  mountain.lineTo(r.width/2-40+noise.get(noiseStep)*80, -120+noise.get(noiseStep*2.0)*30); // trough
  noiseStep += 0.1;

  mountain.lineTo(r.width-40 - noise.get(noiseStep)*120, -400+noise.get(noiseStep)*100); // second peak
  noiseStep += 0.1;

  mountain.lineTo(r.width, -noise.get(noiseStep)*100 - 120); // right border
  mountain.lineTo(r.width,0); // right base
}

// draw paper tear in front of mountains
// different outlay on noise
var noise = new Rune.Noise().noiseDetail(8, 0.48);
var tear = r.polygon(0, r.height) // start at bottom of canvas and draw up
  .fill(colorlist[0])
  .stroke(false);
var height = r.height/2 - 140;
tear.lineTo(0, 0);
tear.lineTo(0, -height); // drawing upwards
// draw many jaged line points from left border to right
var step = 2; // horizontal steps per jag
var growth = 0;
for (var i = 0; i <= r.width/step; i += step) {
  var h = -height + noise.get(i*0.4)*8;
  growth += noise.get(i/120.0)*0.6 - 0.2; // just guess and checking on this one
  tear.lineTo(i * step, h-growth);
}
tear.lineTo(r.width, -height); // wrap up right side
tear.lineTo(r.width, 0);

r.draw();
