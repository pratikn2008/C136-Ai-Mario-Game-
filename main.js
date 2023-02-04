img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload(){
	img = loadImage("mario05.png");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup(){
	createCanvas(1240, 336);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw(){
	game()
}

function modelLoaded(){
	console.log('Model Loaded!');
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + "noseY  = " + noseY);
		console.log(results);
	}
}

