function changeSize() {
	var video = document.getElementById("one");

	if(video.width == 640){
		video.width = 320;
	}
	else {
		video.width = 640;
	}
}

function muteVideo() {
	var video = document.getElementById("one");

	if(video.muted != true) {
		video.muted = true;
	}
	else {
		video.muted = false;
	}
}

function createCanvas() {
	var canvas = document.getElementById("canvas");

	var ctx = canvas.getContext("2d");

	// Create gradient
	var grd = ctx.createLinearGradient(0, 50, 100, 500);
	grd.addColorStop(0,"Blue");
	grd.addColorStop(1,"lightblue");

	ctx.fillStyle = grd;
	ctx.fillRect(10,10,650,600);

}