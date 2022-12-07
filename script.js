var buttonEL = document.getElementById("mainButton");
var resetEL = document.getElementById("reset");
var scoreEl = document.getElementById("score");
var buttonArea = document.getElementById("buttonArea");
var countDownEl = document.getElementById("countDown");
var personalHighScoreEl = document.getElementById("personalHighScore");
var submitEl = document.getElementById("submit");
var userNameEl = document.getElementById("userName");
var scoreBoardEl = document.getElementById("scoreBoard");
var gameTextEl = document.getElementById("gameText");
var myBtnEl = document.getElementById("myBtn");


var leaderBoardData = '';
var leaderboard1nameEl = document.getElementById("leaderboard1name");
var leaderboard1scoreEl = document.getElementById("leaderboard1score");
var leaderboard2nameEl = document.getElementById("leaderboard2name");
var leaderboard2scoreEl = document.getElementById("leaderboard2score");
var leaderboard3nameEl = document.getElementById("leaderboard3name");
var leaderboard3scoreEl = document.getElementById("leaderboard3score");



var score = 0;

var userId = localStorage.getItem("userId") || '';

var GetLeaderboard = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=GetLeaderboard';
apiSend('GetLeaderboard',GetLeaderboard);

var CheckID = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=CheckID&userID=' + userId;
apiSend("CheckID", CheckID);

var GetScore = 'http://www.5thwallgaming.com/Bootcamp/index.cfm?action=GetScore&userID=' + userId;
apiSend('GetScore',GetScore);
var personalHighScore = +localStorage.getItem("personalHighScore") || 0;

var countDownTimer;
var countDown = 30;

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

var timer1;
var timer2;
var timer3;
var timer4;
var timer5;
var timer6;
var timer7;
var timer8;
var timer9;
var timer10;
var timer11;

var level1 = 10;
var level2 = 25;
var level3 = 100;
var level4 = 200;
var level5 = 400;
var level6 = 700;
var level7 = 1200;
var level8 = 2000;
var level9 = 3300;
var level10 = 5100;
var level11 = 8500;


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






function startCountdown()
	{
		if(firstPress == 0)
		{
			var audio = document.getElementById("audio");
			audio.play();
			buttonEL.style.display = 'block';
			myBtnEl.style.display = 'none';
			countDownEl.textContent = "You have " + countDown + " seconds left.";
			countDownEl.style.display = 'block';
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
							buttonEL.style.display = 'none';
							buttonArea.style.display = 'none';
							countDownEl.textContent = "Congrats! You have gotten a score of " + score + "."; 
							if(personalHighScore < score)
							{
								localStorage.setItem("personalHighScore", score);
								personalHighScoreEl.textContent = "Personal High Score: " + score;
								scoreBoardEl.style.display = 'block';

								countDownEl.textContent = "Congrats! You have gotten a score of " + score + ". Since you beat your personal high score, enter your name into the Leaderboard.";
	
							}
							gameTextEl.style.display = 'block';
						}

				}
			}, 1000)
		};
		firstPress = 1;
	}


function timer1Start(){timer1=setInterval(function(){score=score+1;checkScore()}, 1000);}
function timer2Start(){timer2=setInterval(function(){score=score+1;checkScore()}, 500);}
function timer3Start(){timer3=setInterval(function(){score=score+1;checkScore()}, 100);}
function timer4Start(){timer4=setInterval(function(){score=score+1;checkScore()}, 50);}
function timer5Start(){timer5=setInterval(function(){score=score+1;checkScore()}, 10);}
function timer6Start(){timer6=setInterval(function(){score=score+1;checkScore()}, 5);}
function timer7Start(){timer7=setInterval(function(){score=score+1;checkScore()}, 1);}
function timer8Start(){timer8=setInterval(function(){score=score+5;checkScore()}, 1);}
function timer9Start(){timer9=setInterval(function(){score=score+10;checkScore()}, 1);}
function timer10Start(){timer10=setInterval(function(){score=score+50;checkScore()}, 1);}
function timer11Start(){timer11=setInterval(function(){score=score+100;checkScore()}, 1);}

function clearTimers() 
	{
//		console.log(timer1Active,timer2Active,timer3Active,timer4Active,timer5Active,timer6Active,timer7Active);

		if(firstPress == 1){clearInterval(countDownTimer);firstPress = 0;}
		if(timer1Active == 1){clearInterval(timer1);timer1Active = 0;}
		if(timer2Active == 1){clearInterval(timer2);timer2Active = 0;}
		if(timer3Active == 1){clearInterval(timer3);timer3Active = 0;}
		if(timer4Active == 1){clearInterval(timer4);timer4Active = 0;}
		if(timer5Active == 1){clearInterval(timer5);timer5Active = 0;}
		if(timer6Active == 1){clearInterval(timer6);timer6Active = 0;}
		if(timer7Active == 1){clearInterval(timer7);timer7Active = 0;}
		if(timer8Active == 1){clearInterval(timer8);timer8Active = 0;}
		if(timer9Active == 1){clearInterval(timer9);timer9Active = 0;}
		if(timer10Active == 1){clearInterval(timer10);timer10Active = 0;}
		if(timer11Active == 1){clearInterval(timer11);timer11Active = 0;}

		buttonEL.textContent = score;


//		console.log(timer1Active,timer2Active,timer3Active,timer4Active,timer5Active,timer6Active,timer7Active);
	}

function checkScore() 
	{
		buttonEL.textContent = score;
		localStorage.setItem("score", score);

		if(score == level1 && timer1Active == 0)
			{
			button1 = document.createElement('button');
			button1.innerHTML = '1 click per second';
			button1.classList.add("storeButton");
			button1.setAttribute('ID','storeButton-1');
			buttonArea.appendChild(button1);
			button1.addEventListener('click', function(){timer1Start();button1.remove()});
			timer1Active = 1;
			}

		if(score == level2 && timer2Active == 0)
			{
			button2 = document.createElement('button');
			button2.innerHTML = '5 clicks per second';
			button2.classList.add("storeButton");
			button2.setAttribute('ID','storeButton-2');
			buttonArea.appendChild(button2);
			button2.addEventListener('click', function(){timer2Start();button2.remove()});
			timer2Active = 1;
			}

		if(score == level3 && timer3Active == 0)
			{
			button3 = document.createElement('button');
			button3.innerHTML = '10 clicks per second';
			button3.classList.add("storeButton");
			button3.setAttribute('ID','storeButton-3');
			buttonArea.appendChild(button3);
			button3.addEventListener('click', function(){timer3Start();button3.remove()});
			timer3Active = 1;
			}

		if(score == level4 && timer4Active == 0)
			{
			button4 = document.createElement('button');
			button4.innerHTML = '50 clicks per second';
			button4.classList.add("storeButton");
			button4.setAttribute('ID','storeButton-4');
			buttonArea.appendChild(button4);
			button4.addEventListener('click', function(){timer4Start();button4.remove()});
			timer4Active = 1;
			}

		if(score == level5 && timer5Active == 0)
			{
			button5 = document.createElement('button');
			button5.innerHTML = '100 clicks per second';
			button5.classList.add("storeButton");
			button5.setAttribute('ID','storeButton-5');
			buttonArea.appendChild(button5);
			button5.addEventListener('click', function(){timer5Start();button5.remove()});
			timer5Active = 1;
			}

		if(score == level6 && timer6Active == 0)
			{
			button6 = document.createElement('button');
			button6.innerHTML = '500 clicks per second';
			button6.classList.add("storeButton");
			button6.setAttribute('ID','storeButton-6');
			buttonArea.appendChild(button6);
			button6.addEventListener('click', function(){timer6Start();button6.remove()});
			timer6Active = 1;
			}

		if(score == level7 && timer7Active == 0)
			{
			button7 = document.createElement('button');
			button7.innerHTML = '1,000 clicks per second';
			button7.classList.add("storeButton");
			button7.setAttribute('ID','storeButton-7');
			buttonArea.appendChild(button7);
			button7.addEventListener('click', function(){timer7Start();button7.remove()});
			timer7Active = 1;
			}

		if(score == level8 && timer8Active == 0)
			{
			button8 = document.createElement('button');
			button8.innerHTML = '5,000 clicks per second';
			button8.classList.add("storeButton");
			button8.setAttribute('ID','storeButton-8');
			buttonArea.appendChild(button8);
			button8.addEventListener('click', function(){timer8Start();button8.remove()});
			timer8Active = 1;
			}

		if(score == level9 && timer9Active == 0)
			{
			button9 = document.createElement('button');
			button9.innerHTML = '10,000 clicks per second';
			button9.classList.add("storeButton");
			button9.setAttribute('ID','storeButton-9');
			buttonArea.appendChild(button9);
			button9.addEventListener('click', function(){timer9Start();button9.remove()});
			timer9Active = 1;
			}

		if(score == level10 && timer10Active == 0)
			{
			button10 = document.createElement('button');
			button10.innerHTML = '50,000 clicks per second';
			button10.classList.add("storeButton");
			button10.setAttribute('ID','storeButton-10');
			buttonArea.appendChild(button10);
			button10.addEventListener('click', function(){timer10Start();button10.remove()});
			timer10Active = 1;
			}

		if(score == level11 && timer11Active == 0)
			{
			button11 = document.createElement('button');
			button11.innerHTML = '100,000 clicks per second';
			button11.classList.add("storeButton");
			button11.setAttribute('ID','storeButton-11');
			buttonArea.appendChild(button11);
			button11.addEventListener('click', function(){timer11Start();button11.remove()});
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
//				[{"Username":"Annonymous","Score":40},{"Username":"Joseph","Score":4}]
				leaderBoardData = JSON.parse(response.trim());

				leaderboard1nameEl.textContent = leaderBoardData[0]["Username"].trim();
				leaderboard1scoreEl.textContent = leaderBoardData[0]["Score"];
				leaderboard2nameEl.textContent = leaderBoardData[1]["Username"].trim();
				leaderboard2scoreEl.textContent = leaderBoardData[1]["Score"];
				leaderboard3nameEl.textContent = leaderBoardData[2]["Username"].trim();
				leaderboard3scoreEl.textContent = leaderBoardData[2]["Score"];

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
		userId = localStorage.getItem("userId") || '';
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
	buttonEL.style.display = 'block';
	buttonArea.style.display = 'block';
	scoreBoardEl.style.display = 'none';
	gameTextEl.style.display = 'none';
	countDownEl.style.display = 'none';
	myBtnEl.style.display = 'block';



	countDown = 30;
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

	apiSend('GetLeaderboard',GetLeaderboard);
}


resetGame();

