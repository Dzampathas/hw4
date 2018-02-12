var osc;

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

	var r = 0;
	var g = 0;
	var b = 0;


function setup() {
	osc = new p5.Oscillator();
	
	//size(500,500);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
	
	osc.pan(map(mouseX,0,width,-1,1));

  if (playingA) {
    r = 200;
  }
	if (playingS) {
    g = 200;
  }
	if (playingD) {
    b = 200;
  }
	if (playingF) {
		b = 180;
		g = 180;
		r = 180
  }
	background(color(r,g,b));
	fill(255,255,255);
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;
  } else if (key == 'S') {
    osc = oscS;
		playingS = true;
  } else if (key == 'D') {
    osc = oscD;
		playingD = true;
  } else if (key == 'F') {
    osc = oscF;
		playingF = true;
	}
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  if (key == 'A') {
    osc = oscA;
		r = 0;
		playingA = false;
  } else if (key == 'S') {
    osc = oscS;
		g = 0;
		playingS = false;
  } else if (key == 'D') {
    osc = oscD;
		b = 0;
		playingD = false;
  } else if (key == 'F') {
    osc = oscF;
		b = 0;
		g = 0;
		r = 0;
		playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

