//Rocket timer
//answer the questions right to fill fuel into you rocket to get it to take off



$(document).ready(function() {


	$(".blastoff").on("click", function(){

		var textTimer;
		var textFade = function(){
			$(".ansFade").fadeIn(1000);
			$(".question").fadeIn(1000);
			$(".timer").fadeIn(1000);
		};

		$(".ansFade").hide();
		$(".question").hide();
		$(".timer").hide();

		//$(".mainDiv").animate({width: "100%", height: "100%"}, 1000);
		//$(".mainDiv").css("background-color", "white");
		$(".allAns").animate({width: "100%", height: "100%"}, 1000);
		$(".allAns").css("background-color", "white");

		textTimer = setTimeout(textFade, 1500);

   		$(".blastoff").addClass("invsDiv");
   		$(".bodiv").addClass("invsDiv");
   		$(".startText").addClass("invsDiv");
   		$(".question").removeClass("invsDiv");
   		$(".timer").removeClass("invsDiv");

   		Startgame();

	});

	var Startgame = function(){

		var userguess1;
		var q1 = "This is question 1";
		var q1a1 = "This is Answer 1";
		var q1a2 = "This is Answer 2";
		var q1a3 = "This is Answer 3";
		var q1a4 = "This is Answer 4";

		var question1 = new question(q1, q1a1, q1a2, q1a3, q1a4, "#ans1", userguess1);
	}

	var newQuestion = function(){
		$(".question").removeClass("invsDiv");
		$(".timer").removeClass("invsDiv");
		$(".correctguess").addClass("invsDiv");
		$(".incorrectguess").addClass("invsDiv");
		$(".timeOut").addClass("invsDiv");

		var q2 = "this is question 2";
		var q2a1 = "This is Answer 1";
		var q2a2 = "This is Answer 2";
		var q2a3 = "This is Answer 3";
		var q2a4 = "This is Answer 4";
		var q3 = "this is question 3";
		var q3a1 = "This is Answer 1";
		var q3a2 = "This is Answer 3";
		var q3a3 = "This is Answer 3";
		var q3a4 = "This is Answer 4";
		var q4 = "this is question 4";
		var q4a1 = "This is Answer 1";
		var q4a2 = "This is Answer 3";
		var q4a3 = "This is Answer 3";
		var q4a4 = "This is Answer 4";
		var q5 = "this is question 5"
		var q5a1 = "This is Answer 1";
		var q5a2 = "This is Answer 3";
		var q5a3 = "This is Answer 3";
		var q5a4 = "This is Answer 4";
		var q6 = "this is question 6";
		var q6a1 = "This is Answer 1";
		var q6a2 = "This is Answer 3";
		var q6a3 = "This is Answer 3";
		var q6a4 = "This is Answer 4";
		var q7 = "this is question 7";
		var q7a1 = "This is Answer 1";
		var q7a2 = "This is Answer 3";
		var q7a3 = "This is Answer 3";
		var q7a4 = "This is Answer 4";
		var q8 = "this is question 4";
		var q8a1 = "This is Answer 8";
		var q8a2 = "This is Answer 3";
		var q8a3 = "This is Answer 3";
		var q8a4 = "This is Answer 4";
		var q9 = "this is question 9";
		var q9a1 = "This is Answer 1";
		var q9a2 = "This is Answer 3";
		var q9a3 = "This is Answer 3";
		var q9a4 = "This is Answer 4";
		var q10 = "this is question 10";
		var q10a1 = "This is Answer 1";
		var q10a2 = "This is Answer 3";
		var q10a3 = "This is Answer 3";
		var q10a4 = "This is Answer 4";

		var questionCounter = function(){

			var questionCount = -2;
			questionCount + 1;

			var questionbank = [
			new question(q2, q2a1, q2a2, q2a3, q2a4, "#ans3"),
			new question(q3, q3a1, q3a2, q3a3, q3a4, "#ans2"),
			new question(q4, q4a1, q4a2, q4a3, q4a4, "#ans1"),
			new question(q5, q5a1, q5a2, q5a3, q5a4, "#ans1"),
			new question(q6, q6a1, q6a2, q6a3, q6a4, "#ans4"),
			new question(q7, q7a1, q7a2, q7a3, q7a4, "#ans2"),
			new question(q8, q8a1, q8a2, q8a3, q8a4, "#ans3"),
			new question(q9, q9a1, q9a2, q9a3, q9a4, "#ans2"),
			new question(q10, q10a1, q10a2, q10a3, q10a4, "#ans4")
			];

			for (i = -1; questionCount = questionbank[i]; i + 1){
				questionbank[i];
				//or .join [i] to question "new question(question[i])"?
			}
		}

		questionCounter();
	}

	var question = function(q, a1, a2, a3, a4, correct){

		this.q = q;
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.a4 = a4;
		this.correct = correct;

		var correctguess;
		secondsLeft = 32;
		var userguess = false;

		var qTimeDecrement = function(){

			var interv = setInterval(qTimer, 1000);

			$(".allAns").on("click", function(){
				clearInterval(interv);
			});
		}

		var qTimer = function(){
			if (secondsLeft > 0){
				secondsLeft--;
				$(".timeLeft").html(secondsLeft);
			}
			else if (secondsLeft == 0){
				qTimeUp();
			}
		}

		var qTimeUp = function(){
			$(".question").addClass("invsDiv");
   			$(".timer").addClass("invsDiv");
   			$(".timeOut").removeClass("invsDiv");
			userguess = true;
   			guessCheckTimer();
   			//clearInterval(interv);
		}

		qTimeDecrement();
		qTimer();

		$(".question").html(q);
		$("#ans1").html(a1);
		$("#ans2").html(a2);
		$("#ans3").html(a3);
		$("#ans4").html(a4);

		$(correct).removeClass("otherAns");

		$(correct).on("click", function(){
			correctguess = true;
			userguess = true;
			checkAnswer();
			guessCheckTimer();
		});

		$(".otherAns").on("click", function(){
			correctguess = false;
			userguess = true;
			checkAnswer();
			guessCheckTimer();
		});


		var checkAnswer = function(){
			if (correctguess == true){
				$(".question").addClass("invsDiv");
   				$(".timer").addClass("invsDiv");
   				$(".correctGuess").removeClass("invsDiv");
   			}
   			else {
				$(".question").addClass("invsDiv");
   				$(".timer").addClass("invsDiv");
   				$(".incorrectGuess").removeClass("invsDiv")
   			}
		};

		var guessCheckTimer = function(){
			var transInterv = setTimeout(userGuessCheck, 5000);
		}

		var userGuessCheck = function(){
			if (userguess == true){
				newQuestion();
			}
		}

	};


});