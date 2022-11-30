var buttonEL = document.getElementById("mainButton");
var scoreEl = document.getElementById("score");
var buttonArea = document.getElementById("buttonArea");

var score = 0;

function timer1PerSecond() {
	var timer = setInterval(function() 
	{
		score = score + 1;

		if(score === 0) {
		// Stops execution of action at set interval
		clearInterval(timer);
		}

	setScoreText();

	}, 1000);
}

buttonEL.addEventListener	(
	'click', function()
	{
		score = score + 1;
		setScoreText();
	}
);

function setScoreText() {

	scoreEl.textContent = score;
}