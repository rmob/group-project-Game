var buttonEL = document.getElementById("mainButton");
var scoreEl = document.getElementById("score");
var buttonArea = document.getElementById("buttonArea");

var userId = localStorage.getItem("userId") || '';
var score = +localStorage.getItem("score") || 0;

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

// https://javascript.info/fetch-api

var sendScoreUrl = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=EnterScore&score=' + score + '&userID=' + userId;


function apiSend(request) {
	fetch(request)
	.then(response => response.text())
	.then((response) => {
		console.log(response);
		if(response.trim() != 'OK') 
		{
			localStorage.setItem("userId", response.trim());
		}
		localStorage.setItem("score", score);
	})

// https://stackoverflow.com/questions/41946457/getting-text-from-fetch-response-object


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
	localStorage.setItem("score", score);
}

apiSend(sendScoreUrl);