$(document).ready(function() {


	var trivia =
	{
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
		blastButton: $(".blastoff"),
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

		textFadeDelay: function(){
			trivia.textTimer = setTimeout(trivia.textFade, 1500);
		},


		textFade: function(){
			trivia.ansFade.fadeIn(1000);
			trivia.question.fadeIn(1000);
			trivia.timer.fadeIn(1000);
		},


		blastOff: function(){

			trivia.ansFade.hide();
			trivia.question.hide();
			trivia.timer.hide();

			this.allAns.animate({width: "100%", height: "100%"}, 1000);
			this.allAns.css("background-color", "white");

			//$(".mainDiv").animate({width: "100%", height: "100%"}, 1000);
			//$(".mainDiv").css("background-color", "white");
			this.ans.addClass("ansAttr");
   			this.blastButton.addClass("invsDiv");
   			this.bodiv.addClass("invsDiv");
   			this.startText.addClass("invsDiv");
   			trivia.question.removeClass("invsDiv");
   			trivia.timer.removeClass("invsDiv");

   			trivia.textFadeDelay();
   			trivia.newQuestion();

		},

		newQuestion: function(){
			this.question.removeClass("invsDiv");
   			this.timer.removeClass("invsDiv");
   			this.incorrectguess.addClass("invsDiv");
   			this.correctguess.addClass("invsDiv");
   			this.secondsLeft = 30;
			this.currentQ++;
			for (i = 0; this.currentQ > i; i++){
				this.question.html(this.qNas[i].q);
				this.ans1.html(this.qNas[i].a1);
				this.ans2.html(this.qNas[i].a2);
				this.ans3.html(this.qNas[i].a3);
				this.ans4.html(this.qNas[i].a4);
			}
			trivia.qTimeDecrement();
			trivia.qTimer();
			console.log(this.currentQ);
		},


		qTimeDecrement: function(){
			trivia.interv = setInterval(trivia.qTimer, 1000);
		},

		qTimer: function(){
			trivia.secondsLeft--;
			trivia.timeLeft.html(trivia.secondsLeft);
			if (trivia.secondsLeft == 0){
				trivia.qTimeUp();
			}
		},

		qTimeUp: function(){
			trivia.question.addClass("invsDiv");
			trivia.timer.addClass("invsDiv");
			trivia.timeOut.removeClass("invsDiv");
			trivia.fiveSecondTimer();
		},

		//timeStop: function(){
		 	//clearInterval(trivia.interv);
		//},

		fiveSecondTimer: function(){
			trivia.finalfiveSec = setTimeout(trivia.questionAnswerd, 5000);
			clearInterval(trivia.interv);
		},

		questionAnswerd: function(){
			trivia.correctguess.addClass("invsDiv");
			trivia.incorrectguess.addClass("invsDiv");
			trivia.timeOut.addClass("invsDiv");
			trivia.newQuestion();
		},

		finalFiveSecondTimer: function(){
			trivia.fiveSec = setTimeout(trivia.endOfGame, 5000);
			clearInterval(trivia.interv);
			trivia.ans.addClass("invsDiv");
		},

		endOfGame: function(){
			trivia.correctguess.addClass("invsDiv");
			trivia.incorrectguess.addClass("invsDiv");
			trivia.timeOut.addClass("invsDiv");
			trivia.question.addClass("invsDiv");
   			trivia.timer.addClass("invsDiv");
   			trivia.endDisplay.removeClass("invsDiv");
   			trivia.numCorrect.html(trivia.ansCorrect);
		}


	};

//for user pick run function that keeps users pick hovered on click with green or red border
//if answer is wrong, have users pick be red, then show "the correct answer is..3..2..1 -show answer-
//and highlight and hover correct answer in green
//on click restart button set counter to 0 and then call new question

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

	trivia.blastButton.on("click", function(){
		trivia.blastOff();
	});

});

































