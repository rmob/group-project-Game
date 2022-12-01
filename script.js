var buttonEL = document.getElementById("mainButton");
var resetEL = document.getElementById("reset");
var scoreEl = document.getElementById("score");
var buttonArea = document.getElementById("buttonArea");
var countDownEl = document.getElementById("countDown");
var personalHighScoreEl = document.getElementById("personalHighScore");

var userId = localStorage.getItem("userId") || '';
var score = 0;
var userName = "";

var EnterScore = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=EnterScore&score=' + score + '&userID=' + userId + '&Username=' + userName;
var GetScore = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=GetScore&userID=' + userId;
var GetLeaderboard = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=GetLeaderboard';
var CheckID = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=CheckID&userID=' + userId;

apiSend("CheckID", CheckID);
apiSend('GetScore',GetScore);
var personalHighScore = +localStorage.getItem("personalHighScore");

var countDown = 5;

var firstPress = 0;
var timer1Active = 0;
var timer2Active = 0;
var timer3Active = 0;
var timer4Active = 0;
var timer5Active = 0;
var timer6Active = 0;
var timer7Active = 0;


countDownEl.textContent = "We will be starting when you first press the button";


function startCountdown(){var countDownTimer=setInterval(function()
	{
		{
			firstPress = 1;

			if (countDown > 0) 
				{
					countDown = countDown - 1;
					countDownEl.textContent = "You have " + countDown + " seconds left.";
				}
			else
				{
					clearInterval(countDownTimer);
					countDownEl.textContent = "Congrats! You have gotten a score of " + score + ". Please enter your name and submit it.";
					if(personalHighScore < score)
					{
						localStorage.setItem("personalHighScore", score);
						

					}
// show name field and submit button. On submit button, submit it to the high score.
				}
		}
	}, 1000)
};


function timer1PerSecond(){var timer1=setInterval(function(){score=score+1;checkScore()}, 1000);}
function timer5PerSecond(){var timer2=setInterval(function(){score=score+1;checkScore()}, 500);}
function timer10PerSecond(){var timer3=setInterval(function(){score=score+1;checkScore()}, 100);}
function timer50PerSecond(){var timer4=setInterval(function(){score=score+1;checkScore()}, 50);}
function timer100PerSecond(){var timer5=setInterval(function(){score=score+1;checkScore()}, 10);}
function timer500PerSecond(){var timer6=setInterval(function(){score=score+1;checkScore()}, 5);}
function timer1000PerSecond(){var timer7=setInterval(function(){score=score+1;checkScore()}, 1);}

function clearTimers() 
	{
//		console.log(timer1Active,timer2Active,timer3Active,timer4Active,timer5Active,timer6Active,timer7Active);

		if(timer1Active == 1){clearInterval(1);timer1Active = 0;}
		if(timer2Active == 1){clearInterval(2);timer2Active = 0;}
		if(timer3Active == 1){clearInterval(3);timer3Active = 0;}
		if(timer4Active == 1){clearInterval(4);timer4Active = 0;}
		if(timer5Active == 1){clearInterval(5);timer5Active = 0;}
		if(timer6Active == 1){clearInterval(6);timer6Active = 0;}
		if(timer7Active == 1){clearInterval(7);timer7Active = 0;}

		buttonEL.textContent = score;


//		console.log(timer1Active,timer2Active,timer3Active,timer4Active,timer5Active,timer6Active,timer7Active);
	}

function checkScore() 
	{
		buttonEL.textContent = score;

		if(score == 11 && timer1Active == 0)
			{
			var button1 = document.createElement('button');
			button1.innerHTML = '1 click per second';
			button1.classList.add("storeButton");
			button1.setAttribute('ID','storeButton-1');
			buttonArea.appendChild(button1);
			button1.addEventListener('click', function(){timer1PerSecond();button1.remove()});
			timer1Active = 1;
			}

		if(score == 12 && timer2Active == 0)
			{
			var button2 = document.createElement('button');
			button2.innerHTML = '5 clicks per second';
			button2.classList.add("storeButton");
			button2.setAttribute('ID','storeButton-2');
			buttonArea.appendChild(button2);
			button2.addEventListener('click', function(){timer5PerSecond();button2.remove()});
			timer2Active = 1;
			}

		if(score == 13 && timer3Active == 0)
			{
			var button3 = document.createElement('button');
			button3.innerHTML = '10 clicks per second';
			button3.classList.add("storeButton");
			button3.setAttribute('ID','storeButton-3');
			buttonArea.appendChild(button3);
			button3.addEventListener('click', function(){timer10PerSecond();button3.remove()});
			timer3Active = 1;
			}

		if(score == 14 && timer4Active == 0)
			{
			var button4 = document.createElement('button');
			button4.innerHTML = '50 clicks per second';
			button4.classList.add("storeButton");
			button4.setAttribute('ID','storeButton-4');
			buttonArea.appendChild(button4);
			button4.addEventListener('click', function(){timer50PerSecond();button4.remove()});
			timer4Active = 1;
			}

		if(score == 15 && timer5Active == 0)
			{
			var button5 = document.createElement('button');
			button5.innerHTML = '100 clicks per second';
			button5.classList.add("storeButton");
			button5.setAttribute('ID','storeButton-5');
			buttonArea.appendChild(button5);
			button5.addEventListener('click', function(){timer100PerSecond();button5.remove()});
			timer5Active = 1;
			}

		if(score == 16 && timer6Active == 0)
			{
			var button6 = document.createElement('button');
			button6.innerHTML = '500 clicks per second';
			button6.classList.add("storeButton");
			button6.setAttribute('ID','storeButton-6');
			buttonArea.appendChild(button6);
			button6.addEventListener('click', function(){timer500PerSecond();button6.remove()});
			timer6Active = 1;
			}

		if(score == 17 && timer7Active == 0)
			{
			var button7 = document.createElement('button');
			button7.innerHTML = '1000 clicks per second';
			button7.classList.add("storeButton");
			button7.setAttribute('ID','storeButton-7');
			buttonArea.appendChild(button7);
			button7.addEventListener('click', function(){timer1000PerSecond();button7.remove()});
			timer7Active = 1;
			}

	}


function apiSend(namedrequest, request) {
	fetch(request)
	.then(response => response.text())
	.then((response) => {
		console.log(response);

		switch (namedrequest) 
		{
			case 'CheckID':
				if(response.trim() != 'OK') 
				{
					localStorage.setItem("userId", response.trim());
				}

				break;

			case 'GetLeaderboard':
	
				break;
			case 'GetScore':
				localStorage.setItem("score", response.trim());
				personalHighScoreEl.textContent = "Personal High Score: " + personalHighScore;

				break;

			case 'EnterScore':
	
				break;

		}
							


	})

}

buttonEL.addEventListener	(
	'click', function()
	{
		if(firstPress == 0){startCountdown()};
		score = score + 1;
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
	buttonEL.textContent = score;
	clearTimers();
}



buttonEL.textContent = score;
clearTimers();

//apiSend(GetLeaderboard);