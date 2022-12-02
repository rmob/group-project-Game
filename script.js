var buttonEL = document.getElementById("mainButton");
var resetEL = document.getElementById("reset");
var scoreEl = document.getElementById("score");
var buttonArea = document.getElementById("buttonArea");
var countDownEl = document.getElementById("countDown");
var personalHighScoreEl = document.getElementById("personalHighScore");
var leaderboardEl = document.getElementById("leaderboard");
var submitEl = document.getElementById("submit");
var userNameEl = document.getElementById("userName");
var userFormEl = document.getElementById("scoreBoard");


var userId = localStorage.getItem("userId") || '';
var score = 0;

var GetLeaderboard = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=GetLeaderboard';
apiSend('GetLeaderboard',GetLeaderboard);

var CheckID = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=CheckID&userID=' + userId;
apiSend("CheckID", CheckID);

var GetScore = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=GetScore&userID=' + userId;
apiSend('GetScore',GetScore);
var personalHighScore = +localStorage.getItem("personalHighScore");

var countDownTimer;
var countDown = 60;

var firstPress = 0;
var timer1Active = 0;
var timer2Active = 0;
var timer3Active = 0;
var timer4Active = 0;
var timer5Active = 0;
var timer6Active = 0;
var timer7Active = 0;
var timer8Active = 0;
var timer9Active = 0;
var timer10Active = 0;
var timer11Active = 0;

var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;
var button10;
var button11;


countDownEl.textContent = "We will be starting when you first press the button";


function startCountdown()
	{
		if(firstPress == 0)
		{
			countDownTimer=setInterval(function()
			{
				{
					if (countDown > 0) 
						{
							countDown = countDown - 1;
							countDownEl.textContent = "You have " + countDown + " seconds left.";
						}
					else
						{
							clearTimers();
							buttonEL.disabled = true;
							buttonArea.style.visibility = 'hidden';
							userFormEl.style.visibility = 'visible';
							countDownEl.textContent = "Congrats! You have gotten a score of " + score + ". Please enter your name and submit it.";
							if(personalHighScore < score)
							{
								localStorage.setItem("personalHighScore", score);
								personalHighScoreEl.textContent = "Personal High Score: " + score;
							}
		// show name field and submit button. On submit button, submit it to the high score.
						}

				}
			}, 1000)
		};
		firstPress = 1;
	}


function timer1(){var timer1=setInterval(function(){score=score+1;checkScore()}, 1000);}
function timer2(){var timer2=setInterval(function(){score=score+1;checkScore()}, 500);}
function timer3(){var timer3=setInterval(function(){score=score+1;checkScore()}, 100);}
function timer4(){var timer4=setInterval(function(){score=score+1;checkScore()}, 50);}
function timer5(){var timer5=setInterval(function(){score=score+1;checkScore()}, 10);}
function timer6(){var timer6=setInterval(function(){score=score+1;checkScore()}, 5);}
function timer7(){var timer7=setInterval(function(){score=score+1;checkScore()}, 1);}
function timer8(){var timer8=setInterval(function(){score=score+5;checkScore()}, 1);}
function timer9(){var timer9=setInterval(function(){score=score+10;checkScore()}, 1);}
function timer10(){var timer10=setInterval(function(){score=score+50;checkScore()}, 1);}
function timer11(){var timer11=setInterval(function(){score=score+100;checkScore()}, 1);}

function clearTimers() 
	{
//		console.log(timer1Active,timer2Active,timer3Active,timer4Active,timer5Active,timer6Active,timer7Active);

		if(firstPress == 1){clearInterval(countDownTimer);firstPress = 0;}
		if(timer1Active == 1){clearInterval(1);timer1Active = 0;}
		if(timer2Active == 1){clearInterval(2);timer2Active = 0;}
		if(timer3Active == 1){clearInterval(3);timer3Active = 0;}
		if(timer4Active == 1){clearInterval(4);timer4Active = 0;}
		if(timer5Active == 1){clearInterval(5);timer5Active = 0;}
		if(timer6Active == 1){clearInterval(6);timer6Active = 0;}
		if(timer7Active == 1){clearInterval(7);timer7Active = 0;}
		if(timer8Active == 1){clearInterval(8);timer8Active = 0;}
		if(timer9Active == 1){clearInterval(9);timer9Active = 0;}
		if(timer10Active == 1){clearInterval(10);timer10Active = 0;}
		if(timer11Active == 1){clearInterval(11);timer11Active = 0;}

		buttonEL.textContent = score;


//		console.log(timer1Active,timer2Active,timer3Active,timer4Active,timer5Active,timer6Active,timer7Active);
	}

function checkScore() 
	{
		buttonEL.textContent = score;
		localStorage.setItem("score", score);

		if(score == 25 && timer1Active == 0)
			{
			button1 = document.createElement('button');
			button1.innerHTML = '1 click per second';
			button1.classList.add("storeButton");
			button1.setAttribute('ID','storeButton-1');
			buttonArea.appendChild(button1);
			button1.addEventListener('click', function(){timer1();button1.remove()});
			timer1Active = 1;
			}

		if(score == 75 && timer2Active == 0)
			{
			button2 = document.createElement('button');
			button2.innerHTML = '5 clicks per second';
			button2.classList.add("storeButton");
			button2.setAttribute('ID','storeButton-2');
			buttonArea.appendChild(button2);
			button2.addEventListener('click', function(){timer2();button2.remove()});
			timer2Active = 1;
			}

		if(score == 150 && timer3Active == 0)
			{
			button3 = document.createElement('button');
			button3.innerHTML = '10 clicks per second';
			button3.classList.add("storeButton");
			button3.setAttribute('ID','storeButton-3');
			buttonArea.appendChild(button3);
			button3.addEventListener('click', function(){timer3();button3.remove()});
			timer3Active = 1;
			}

		if(score == 250 && timer4Active == 0)
			{
			button4 = document.createElement('button');
			button4.innerHTML = '50 clicks per second';
			button4.classList.add("storeButton");
			button4.setAttribute('ID','storeButton-4');
			buttonArea.appendChild(button4);
			button4.addEventListener('click', function(){timer4();button4.remove()});
			timer4Active = 1;
			}

		if(score == 450 && timer5Active == 0)
			{
			button5 = document.createElement('button');
			button5.innerHTML = '100 clicks per second';
			button5.classList.add("storeButton");
			button5.setAttribute('ID','storeButton-5');
			buttonArea.appendChild(button5);
			button5.addEventListener('click', function(){timer5();button5.remove()});
			timer5Active = 1;
			}

		if(score == 750 && timer6Active == 0)
			{
			button6 = document.createElement('button');
			button6.innerHTML = '500 clicks per second';
			button6.classList.add("storeButton");
			button6.setAttribute('ID','storeButton-6');
			buttonArea.appendChild(button6);
			button6.addEventListener('click', function(){timer6();button6.remove()});
			timer6Active = 1;
			}

		if(score == 1250 && timer7Active == 0)
			{
			button7 = document.createElement('button');
			button7.innerHTML = '1,000 clicks per second';
			button7.classList.add("storeButton");
			button7.setAttribute('ID','storeButton-7');
			buttonArea.appendChild(button7);
			button7.addEventListener('click', function(){timer7();button7.remove()});
			timer7Active = 1;
			}

		if(score == 2050 && timer8Active == 0)
			{
			button8 = document.createElement('button');
			button8.innerHTML = '5,000 clicks per second';
			button8.classList.add("storeButton");
			button8.setAttribute('ID','storeButton-8');
			buttonArea.appendChild(button8);
			button8.addEventListener('click', function(){timer8();button8.remove()});
			timer8Active = 1;
			}

		if(score == 3350 && timer9Active == 0)
			{
			button9 = document.createElement('button');
			button9.innerHTML = '10,000 clicks per second';
			button9.classList.add("storeButton");
			button9.setAttribute('ID','storeButton-9');
			buttonArea.appendChild(button9);
			button9.addEventListener('click', function(){timer9();button9.remove()});
			timer9Active = 1;
			}

		if(score == 5150 && timer10Active == 0)
			{
			button10 = document.createElement('button');
			button10.innerHTML = '50,000 clicks per second';
			button10.classList.add("storeButton");
			button10.setAttribute('ID','storeButton-10');
			buttonArea.appendChild(button10);
			button10.addEventListener('click', function(){timer10();button10.remove()});
			timer10Active = 1;
			}

		if(score == 8550 && timer11Active == 0)
			{
			button11 = document.createElement('button');
			button11.innerHTML = '100,000 clicks per second';
			button11.classList.add("storeButton");
			button11.setAttribute('ID','storeButton-11');
			buttonArea.appendChild(button11);
			button11.addEventListener('click', function(){timer11();button11.remove()});
			timer11Active = 1;
			}

	}


function apiSend(namedrequest, request) {
	fetch(request)
	.then(response => response.text())
	.then((response) => {
		switch (namedrequest) 
		{
			case 'CheckID':
				if(response.trim() != 'OK') 
				{
					localStorage.setItem("userId", response.trim());
				}
				break;

			case 'GetLeaderboard':
				leaderboardEl.textContent = response.trim();
				break;
			case 'GetScore':
				localStorage.setItem("personalHighScore", response.trim());
				personalHighScoreEl.textContent = "Personal High Score: " + response.trim();
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


submitEl.addEventListener	(
	'click', function()
	{
		var EnterScore = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=EnterScore&score=' + score + '&userID=' + userId + '&Username=' + userNameEl.value;
		apiSend("EnterScore", EnterScore);
		resetGame();		
	}
);


function resetGame() {
	score = 0;
	buttonEL.textContent = score;
	localStorage.setItem("score", score);
	buttonEL.disabled = false;
	buttonArea.style.visibility = 'visible';
	userFormEl.style.visibility = 'hidden';

	firstPress = 0;
	countDown = 60;
	timer1Active = 0;
	timer2Active = 0;
	timer3Active = 0;
	timer4Active = 0;
	timer5Active = 0;
	timer6Active = 0;
	timer7Active = 0;
	timer8Active = 0;
	timer9Active = 0;
	timer10Active = 0;
	timer11Active = 0;

	clearTimers();

	countDownEl.textContent = "We will be starting when you first press the button";

	if (typeof button1 != "undefined") {button1.remove();}
	if (typeof button2 != "undefined") {button2.remove();}
	if (typeof button3 != "undefined") {button3.remove();}
	if (typeof button4 != "undefined") {button4.remove();}
	if (typeof button5 != "undefined") {button5.remove();}
	if (typeof button6 != "undefined") {button6.remove();}
	if (typeof button7 != "undefined") {button7.remove();}
	if (typeof button8 != "undefined") {button8.remove();}
	if (typeof button9 != "undefined") {button9.remove();}
	if (typeof button10 != "undefined") {button10.remove();}
	if (typeof button11 != "undefined") {button11.remove();}
}


resetGame();

