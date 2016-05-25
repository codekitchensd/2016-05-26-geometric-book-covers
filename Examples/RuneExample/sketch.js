var r = new Rune({
  container: "body",
  width: 1000,
  height: 1000,
  // debug: true
});

// Create a blue rectangle
r.rect(0, 0, 200, 200)
  .fill(0, 0, 255)
  .stroke(false); // No outline

r.on('click', function() {
  
  console.log("Click!");

});

// This command will draw everything created in the scene
r.draw();