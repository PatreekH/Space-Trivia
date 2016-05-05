$(document).ready(function() {

//Object that holds variables and functions
	var trivia =
	{
	//Quesstions and Answers:
		qNas:
		[
			{
			q: "What is closest planet to the Sun?",
			a1: "Mercury",
			a2: "Venus",
			a3: "Neptune",
			a4: "Saturn"
			},
			{
			q: "What is the hottest planet in our solar system?",
			a1: "Mars",
			a2: "Earth",
			a3: "Venus",
			a4: "The Sun"
			},
			{
			q: "Who was the first living creature to reach space from Earth?",
			a1: "Chimchim the monkey",
			a2: "Buzz Aldrin",
			a3: "James Kirk",
			a4: "Laika the russian dog"
			},
			{
			q: "What is the second biggest planet in our solar system?",
			a1: "Neptune",
			a2: "Jupiter",
			a3: "Venus",
			a4: "Saturn"
			},
			{
			q: "Earth is located in what galaxy?",
			a1: "The Milky Way",
			a2: "The Andromeda",
			a3: "One that is far far away",
			a4: "The LA Galaxy"
			}
		],
	//Variables:
		blastButton: $(".blastoff"),
		reset: $(".reset"),
		ansFade: $(".ansFade"),
		question: $(".question"),
		timer: $(".timer"),
		allAns: $(".allAns"),
		bodiv: $(".bodiv"),
		startText: $(".startText"),
		currentQ: 0,
		ans1: $("#ans1"),
		ans2: $("#ans2"),
		ans3: $("#ans3"),
		ans4: $("#ans4"),
		correctguess: $(".correctguess"),
		incorrectguess: $(".incorrectguess"),
		ans: $(".ans"),
		timeLeft: $(".timeLeft"),
		timeOut: $(".timeOut"),
		endDisplay: $(".endDisplay"),
		numCorrect: $(".numCorrect"),
		ansCorrect: 0,
		secondsLeft: 30,
		interv: 0,
		textTimer: 0,
		fiveSec: 0,
		finalfiveSec: 0,
	//Sets text fade delay to allow answers div animation to run first
		textFadeDelay: function(){
			trivia.textTimer = setTimeout(trivia.textFade, 1500);
		},
	//Fades in text after answer div animation is done
		textFade: function(){
			trivia.ansFade.fadeIn(1000);
			trivia.question.fadeIn(1000);
			trivia.timer.fadeIn(1000);
		},

		blastOff: function(){
	//Before the answers div animation happens; question, timer and answers are hidden in the main div
			trivia.ansFade.hide();
			trivia.question.hide();
			trivia.timer.hide();
	//Animates the answers div
			this.allAns.animate({width: "100%", height: "100%"}, 1000);
			this.allAns.css("background-color", "white");
	//Adds CSS to the answers div
			this.ans.addClass("ansAttr");
	//Gives the start game prompt a "display:none" class to make it disappear and removes the same class from the question, timer and answers divs to make them appear
   			this.blastButton.addClass("invsDiv");
   			this.bodiv.addClass("invsDiv");
   			this.startText.addClass("invsDiv");
   			trivia.question.removeClass("invsDiv");
   			trivia.timer.removeClass("invsDiv");
   	//Causes text fade in to happen after animation runs, runs newQuestion
   			trivia.textFadeDelay();
   			trivia.newQuestion();
		},
		newQuestion: function(){
	//Makes divs: question, timer and answers visable after a new question is asked
			this.question.removeClass("invsDiv");
   			this.timer.removeClass("invsDiv");
   			this.endDisplay.addClass("invsDiv");
   			this.incorrectguess.addClass("invsDiv");
   			this.correctguess.addClass("invsDiv");
   	//Resets timer
   			this.secondsLeft = 30;
   	//Loops through questions after each answer, adding 1 to currentQ everytime a new question is asked
			this.currentQ++;
			for (i = 0; this.currentQ > i; i++){
				this.question.html(this.qNas[i].q);
				this.ans1.html(this.qNas[i].a1);
				this.ans2.html(this.qNas[i].a2);
				this.ans3.html(this.qNas[i].a3);
				this.ans4.html(this.qNas[i].a4);
			}
	//Runs the timer per question
			trivia.qTimeDecrement();
			trivia.qTimer();
		},
	//Makes qTimer interval by 1 second
		qTimeDecrement: function(){
			trivia.interv = setInterval(trivia.qTimer, 1000);
		},
	//Makes secondsLeft go down 1 every 1 second
		qTimer: function(){
			trivia.secondsLeft--;
			trivia.timeLeft.html(trivia.secondsLeft);
			if (trivia.secondsLeft == 0){
				trivia.qTimeUp();
			}
		},
	//Displays time up page if time runs out
		qTimeUp: function(){
			trivia.question.addClass("invsDiv");
			trivia.timer.addClass("invsDiv");
			trivia.timeOut.removeClass("invsDiv");
			trivia.fiveSecondTimer();
			if (trivia.currentQ == 5){
				trivia.finalFiveSecondTimer();
			}
		},
	//Allows 5 seconds to display timeUp, correctGuess or incorrectGuess before newQuestion is run
		fiveSecondTimer: function(){
			trivia.fiveSec = setTimeout(trivia.questionAnswerd, 5000);
			clearInterval(trivia.interv);
		},
	//Resets the div so the next question can be prompt after 5 seconds
		questionAnswerd: function(){
			trivia.correctguess.addClass("invsDiv");
			trivia.incorrectguess.addClass("invsDiv");
			trivia.timeOut.addClass("invsDiv");
			trivia.newQuestion();
		},
	//Allows 5 seconds before prompting the end of game.
		finalFiveSecondTimer: function(){
			trivia.finalFiveSec = setTimeout(trivia.endOfGame, 5000);
			clearInterval(trivia.interv);
			trivia.ans.addClass("invsDiv");
		},
	//Shows the users stats after all the questions have been answered
		endOfGame: function(){
			clearInterval(trivia.finalFiveSec)
			trivia.correctguess.addClass("invsDiv");
			trivia.incorrectguess.addClass("invsDiv");
			trivia.timeOut.addClass("invsDiv");
			trivia.question.addClass("invsDiv");
   			trivia.timer.addClass("invsDiv");
   			trivia.endDisplay.removeClass("invsDiv");
   			trivia.numCorrect.html(trivia.ansCorrect);
		},
	//Resets the game after reset button has been clicked
		resetGame: function(){
			this.currentQ = 0;
			this.ansCorrect = 0;
	//Fades out 'end of game' div
			trivia.ans.fadeOut(1000);
			trivia.endDisplay.fadeOut(1000);
			trivia.resetDelayTimer();
		},
	//Sets delay before resetting game to allow 'end of game' div fadeOut to happen
		resetDelayTimer: function(){
			trivia.resetTimer = setTimeout(trivia.resetDelay, 1000);
		},
	//Resets the game after 1 second delay
		resetDelay: function(){
			trivia.endDisplay.addClass("invsDiv");
			trivia.blastOff();
		}

	};

	//Grabs the data-index of the users answer pick and determines if it is the right or wrong answer based on what question is it (trivia.currentQ)
	trivia.ans.on("click", function(){
		var indexNum = $(this).data("index");
		//Question 1
			if(trivia.currentQ == 1 && indexNum == 1){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.correctguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
   				trivia.ansCorrect++;
			}
			else if(trivia.currentQ == 1 && indexNum != 1){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.incorrectguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
			}
		//Question 2	
			if(trivia.currentQ == 2 && indexNum == 3){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.correctguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
   				trivia.ansCorrect++;
			}
			else if(trivia.currentQ == 2 && indexNum != 3){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.incorrectguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
			}
		//Question 3	
			if(trivia.currentQ == 3 && indexNum == 4){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.correctguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
   				trivia.ansCorrect++;
			}
			else if(trivia.currentQ == 3 && indexNum != 4){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.incorrectguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
			}
		//Question 4
			if(trivia.currentQ == 4 && indexNum == 4){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.correctguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
   				trivia.ansCorrect++;
			}
			else if(trivia.currentQ == 4 && indexNum != 4){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.incorrectguess.removeClass("invsDiv");
   				trivia.fiveSecondTimer();
			}
		//Question 5	
			if(trivia.currentQ == 5 && indexNum == 1){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.correctguess.removeClass("invsDiv");
   				trivia.finalFiveSecondTimer();
   				trivia.ansCorrect++;
			}
			else if(trivia.currentQ == 5 && indexNum != 1){
				trivia.question.addClass("invsDiv");
   				trivia.timer.addClass("invsDiv");
   				trivia.incorrectguess.removeClass("invsDiv");
   				trivia.finalFiveSecondTimer();
			}
		//End of game
	});

//Blast Off button to start the game
	trivia.blastButton.on("click", function(){
		trivia.blastOff();
	});
//Reset button to reset the game
	trivia.reset.on("click", function(){
		trivia.resetGame();
	});

//Need to disable buttons
//Add in correct answer if answer is wrong
//Add in info if answer is correct

});

































