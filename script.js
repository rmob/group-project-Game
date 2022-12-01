var buttonEL = document.getElementById("mainButton");
var resetEL = document.getElementById("reset");
var scoreEl = document.getElementById("score");
var buttonArea = document.getElementById("buttonArea");

var userId = localStorage.getItem("userId") || '';
var score = +localStorage.getItem("score") || 0;

var sendScoreUrl = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=EnterScore&score=' + score + '&userID=' + userId;

function timer1PerSecond() {var timer1 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 1000);}
function timer5PerSecond() {var timer2 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 500);}
function timer10PerSecond() {var timer3 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 100);}
function timer50PerSecond() {var timer4 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 50);}
function timer100PerSecond() {var timer5 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 10);}
function timer500PerSecond() {var timer6 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 5);}
function timer1000PerSecond() {var timer7 = setInterval(function(){score = score + 1;setScoreText();checkScore();}, 1);}

function clearTimers() {for(i=1;i <= 7;i=i+1) {clearInterval('timer' + i);}}

function checkScore() {

		if(score == 10)
			{
			var button1 = document.createElement('button');
			button1.innerHTML = '1 Click per second';
			button1.classList.add("storeButton");
			button1.setAttribute('ID',1);
			buttonArea.appendChild(button1);
			button1.addEventListener('click', function(){timer1PerSecond()});
			}
}


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

}

buttonEL.addEventListener	(
	'click', function()
	{
		score = score + 1;
		setScoreText();
		checkScore();
	}
);


resetEL.addEventListener	(
	'click', function()
	{
		resetGame();
	}
);

function resetGame() {
	score = 0;
	setScoreText();
	clearTimers();
}

function setScoreText() {
	buttonEL.textContent = score;
	localStorage.setItem("score", score);
}

apiSend(sendScoreUrl);
setScoreText();
clearTimers();
