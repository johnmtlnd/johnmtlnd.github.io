var centre,
  arounds,
  numOfObjects;

function setup() {

  var i;

  createCanvas( windowWidth, windowHeight );

  numOfObjects = 900;

  centre = new MovingBall( width / 2, height / 2 );
  arounds = new Array( numOfObjects );

  for ( i = 0; i < arounds.length; i++ ) {
    arounds[i] = new MovingBall( random( width ), random( height ) );
  }

  background(250,250,250);
}

function draw() {


  centre.run();

  for ( i = 0; i < arounds.length; i++ ) {
    arounds[i].run();
  }
}
