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

// include, *same-origin, omit
var sendScoreUrl = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=EnterScore&score=' + score;

function apiSend(request) {
	fetch(request, {
		method: 'GET', //GET is the default.\
		mode: 'no-cors',
		credentials: 'omit', // include, *same-origin, omit
		redirect: 'follow', // manual, *follow, error
	  })
	.then(function (response) {
		if(response.status !== 200)
		{
			return;
		}

		return response;
	})
	.then(function (response) {
	   console.log(response);
	});
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

apiSend(sendScoreUrl);