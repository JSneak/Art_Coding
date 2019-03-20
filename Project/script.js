
var canvas;

var phoneOnTrue = false;
var blackScreen = false;
var gameOverTrue = false;

var title;
var firstOption;
var secOption;
var thirdOption;
var greeting;

var startBool = false;

var soundTrack;
var flipSound;


function setup() {
  img = loadImage('smile.jpg'); // Load the image
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', -1);
	soundTrack = loadSound("scary.mp3", playSoundTrack);
	flip = loadSound("flip.mp3", flipSound);
	background(0);
	beginning();
}

function playSoundTrack() {
	soundTrack.play();
	soundTrack.loop();
}

function flipSound() {
	flip.play();
}

function draw() {

	background(0);
	if (phoneOnTrue == true) {
		const r = slider.value();
    background(r);
	}

  if(blackScreen == true) {
    background(0);
  }

  if(gameOverTrue == true) {
    image(img, 0, height / 2, img.width / 2, img.height / 2);
  }

}

function beginning() {

	background(0);
	greeting = createP("Enter to begin");
	startBool = true;

}

function startStory() {

	background(0);

	greeting.hide();

	title = createP("You're in the forest, walking to your car after leaving a bonfire party early.");
	createElement('br');
	firstOption = createA("#", "Don't Move");
	createElement('br');
	secOption = createA("#", "Keep Walking");

	firstOption.mousePressed(flipSound);
	secOption.mousePressed(flipSound);
	firstOption.mouseReleased(stopMoving);
	secOption.mouseReleased(keepWalking);

}

function stopMoving() {

	background(0);
  secOption.hide();
  firstOption.hide();

	title.html("You stopped moving. The darkness covers your world and you're never seen again.");
  gameOverTrue = true;
}

function keepWalking() {

	background(0);

	title.html("As you walk through the forest, you see a split in the road. The left says parking lot, but you don't remember taking a left to get here. The right remains signless.");
	firstOption.html("Go Left");
	secOption.html("Go Right");

	firstOption.mousePressed(flipSound);
  secOption.mousePressed(flipSound);
	firstOption.mouseReleased(goLeft);
	secOption.mouseReleased(goRight);

}

function goRight() {

	background(0);
	secOption.hide();

	title.html("You proceed down the path, until you are unable to to see anything.");

  firstOption.html("Use your phone for light");

  firstOption.mousePressed(flipSound);
  firstOption.mouseReleased(turnOnPhone);

}

function goLeft() {

	background(0);
	title.hide();
	firstOption.hide();
	secOption.hide();

	text1 = createP("You walk down the path for a while, but it doesn't seem to go anywhere.");
	createElement('br');
	text2 = createP("Something is BEHIND YOU");
	createElement('br');
	text3 = createP("As you turn around, something jumps on you. You are never heard from again.");

}

function turnOnPhone() {
  firstOption.addClass("whiteClass")
	firstOption.html("RUNRUNRUN");
	slider = createSlider(0, 255, 0);
	phoneOnTrue = true;

  firstOption.mousePressed(flipSound);
  firstOption.mouseReleased(runningScreen1);
}

function killSlider() {
  slider.hide();
  blackScreen = true;
}

function runningScreen1() {
  firstOption.removeClass("whiteClass")
  killSlider();
  title.html("Something is chasing you. Just run don't look back you don't have time.");
  firstOption.html("RUN");
  firstOption.mousePressed(flipSound);
  firstOption.mouseReleased(runningScreen2);
}
function runningScreen2() {
  title.html("You can see your car, it's about fifty feet away. The footsteps get louder.");
  firstOption.html("RUN");
  firstOption.mousePressed(flipSound);
  firstOption.mouseReleased(runningScreen3);
}
function runningScreen3() {
  title.html("You can see your car, it's almost within your grasp. The footsteps KEEP GETTING LOUDER.");
  firstOption.html("RUN");
  firstOption.mousePressed(flipSound);
  firstOption.mouseReleased(runningScreen4);
}
function runningScreen4() {
  title.html("I T ' S  R I G H T  B E H I N D  Y O U'");
  firstOption.html("RUNRUNRUNRUNRUNRUNRUN");
  firstOption.mousePressed(flipSound);
  firstOption.mouseReleased(gameOver);
}
function gameOver() {
  firstOption.hide();

  gameOverTrue = true;

	title.html("You were never heard from again");
}

function windowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
	background(0);
}
function keyPressed(){
	if (startBool == true && keyCode === ENTER) {
		startStory();
		startBool = false;
	}
}
