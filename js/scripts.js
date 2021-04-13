var vidcapture,	ctracker, drawcanvas;

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent("p5canvas");
//p5	has	a	handy	capture	media	method
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*3,	vidcapture.height*4.5);
//create,	initialize,	and	start	the	tracker	
//	using	the	p5	video
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidcapture.elt);
	drawcanvas = document.getElementById('defaultCanvas0');
	vidcapture.hide();
}


function draw() {
	translate(vidcapture.width,	0);
	scale(-1, 1);
	background(0, 60);
	// image(vidcapture, 0, 0);

	var	position = ctracker.getCurrentPosition();
	 if	(position){
	 	 var r = map(position[62][0], 200, 400, 0, 225, true);
	 	 var b = map(position[62][1], 400, 50, 255, 0, true);
	 	 var g = map(position[62][0], 10, 5, 10, 80, true);

fill(r,g,b);

// 	 	position.forEach(function(pos)	{
// // ellipse(pos[0],pos[1],	10);
// })
	 	ellipse(position[27][0], position[27][1], 3);
	 	ellipse(position[32][0], position[32][1], 3);
	 	 // ctracker.draw(drawcanvas);
	 }
}