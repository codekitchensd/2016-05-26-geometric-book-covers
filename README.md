# Geometric Book Covers with Rune.js

# Introduction

This class is about how you can use simple shapes to create compelling designs.

Many iconic designers have used simple geometries in their work.

<img src="https://github.com/codekitchensd/2016-05-26-geometric-book-covers/blob/master/readme_images/ibm_logo_rand.jpg" width="350">       <img src="https://github.com/codekitchensd/2016-05-26-geometric-book-covers/blob/master/readme_images/general_dynamics.jpg" width="350">  

This workshop is inspired by Rune Madsen's [Programming Design Systems](http://printingcode.runemadsen.com/) course at NYU-ITP.

## Introduction to Rune.js

[Rune.js](http://runemadsen.github.io/rune.js/) is a Javascript library for creating graphic design systems.  Rune's library has a lot of excellent support for designers and includes support for color, typography, and grid systems.  

### Setting up a Rune.js project

Our instructions are adapted from Rune's [setup instructions](http://runemadsen.github.io/rune.js/index.html).

To set up a Rune.js project, download the latest Rune.js release. Place the rune.js file in the same directory as your HTML file. Include the rune.js file as a script inside of the <head> tag. 

Now, create a file called sketch.js. Include this file in the <body> tag of your HTML document.  You can also use Rune.js with node, but we won't cover that here.

For ease of setup, feel free to copy and modify our RuneExample folder.  These files have the necessary scripts included.

### Getting started with Rune

Our sample project includes sample code for drawing a simple shape in rune.  We include the rune.js library and instantiate a Rune canvas like so:

```javascript
var r = new Rune({
  container: "body",
  width: 500,
  height: 400
});

r.rect(0, 0, 200, 200)
  .fill(0, 0, 255);

r.draw();
```

### Basic drawing commands

Rune.js includes commands for drawing many basic shapes. You can even draw your own polygons! For a full description of how each shape function works, check out the full [documentation](http://runemadsen.github.io/rune.js/documentation.html).

```javascript
r.line(0, 0, 100, 100);

r.rect(0, 0, 100, 50);

r.ellipse(0, 0, 100, 50);

r.circle(0, 0, 100);

r.triangle(0, 0, 100, 0, 100, 100);

r.polygon(0, 0)
  .lineTo(100, 0)
  .lineTo(100, 100)
  .lineTo(0, 100);

r.path(0, 0)
  .lineTo(100, 0)
  .curveTo(100, 100, 0, 100, 0, 0);
  ```


### Rune Examples

These examples are very useful for getting started quickly with Rune.js.  They can show you how to draw regularly-spaced circles, or randomize colors in your design. We recommend checking these out to help you get started.

- [Form Examples](http://printingcode.runemadsen.com/examples/#form)
- [Color Examples](http://printingcode.runemadsen.com/examples/#color)
- [Repetition Examples](http://printingcode.runemadsen.com/examples/#repetition)
- [Randomization Examples](http://printingcode.runemadsen.com/examples/#randomization)
- [Grid Examples](http://printingcode.runemadsen.com/examples/#grid)

# Today's Goals

We'll be using Rune.js to replicate geometric book cover designs. Check out the designs in the BookFolders directory. 

Today, we'll learn how to:
- Analyze the components of a successful design
- Break a design into its key components (color, shape, pattern)
- Build a function that creates a programmatic design
- Integrate randomization into a program

<img src="https://github.com/codekitchensd/2016-05-26-geometric-book-covers/blob/master/readme_images/azorin.jpg" width="350"> <img src="https://github.com/codekitchensd/2016-05-26-geometric-book-covers/blob/master/readme_images/nodoubt.jpg" width="350"> <img src="https://github.com/codekitchensd/2016-05-26-geometric-book-covers/blob/master/readme_images/bertrand_russell.jpg" width="350"> <img src="https://github.com/codekitchensd/2016-05-26-geometric-book-covers/blob/master/readme_images/modern_psych.jpg" width="350"> 

### Book Cover Examples

A handful of covers have been implemented in the Examples directory. These can serve as inspiration for how to write a program "in the style" of a book cover.

## Book Cover Exercise

Choose 1-2 book covers from the directory. Pick your favorite to start with.

Spend 5-10 minutes brainstorming how you would translate this design into code. What shapes make up the pattern? Are there circles? Squares? Complex polygons? Think of the drawing commands you might use to reproduce these shapes.

Make note of the color and composition of the design.  Will you need to repeat a shape multiple times? How are the colors chosen for each shape? Take time to devise a strategy for programming your design.

After you have come up with a rough plan, you can start coding. Try to create a function that produces an image "in the style of" your chosen cover. The final outcome should not have to be a pixel for pixel match, but it should have the same style.

### Added challenge

If you are feeling up to a challenge, try to include some randomization in your design. Use Rune.js's on("click") function to regenerate your pattern every time you click the page!






