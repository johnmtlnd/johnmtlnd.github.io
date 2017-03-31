/*
 * MovingBall class
 *
 * Represents a moving Ball that moves in a single direction
 *
 */
var MovingBall = function ( x_, y_ ) {

  this.x = x_;
  this.y = y_;

  this.reset();
}

// run
// calls move() followed by display()
//
MovingBall.prototype.run = function () {

  this.move();
  this.display();
}

// move
// move the MovingBall in the desired direction
//
MovingBall.prototype.move = function () {

  this.step -= this.inc;

  if ( this.step < 0 ) {
    this.x = this.tx;
    this.y = this.ty;
    this.reset();
  }

  this.x = lerp( this.tx, this.x, this.step );
  this.y = lerp( this.ty, this.y, this.step );

  this.checkBounds();
}

// checkBounds
// checks that the MovingBall is within the display window.
// If it reaches the edge, move in the opposite direction
MovingBall.prototype.checkBounds = function () {

  if ( this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height ) {
    this.x = random(width);
    this.y = random(height);
    this.reset();
  }
}

MovingBall.prototype.reset = function () {

  var numDirections = 15,
    angleUnit;

  this.step = 1;
  this.inc = random( 0.01 );
  this.radius = random( 35, 35 );
  angleUnit = TWO_PI * random(sin(numDirections));
  this.direction = parseInt( random( numDirections ) );

  this.tx = this.x + this.radius * cos( this.direction * angleUnit );
  this.ty = this.y + this.radius * sin( this.direction * angleUnit );
}

// display method
// draws the MovingBall as a transparent circle with a red point at the centre
MovingBall.prototype.display = function () {

  noStroke();
  fill( 255, 35 );
  ellipse( this.x, this.y, 2,2 );
}
