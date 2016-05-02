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

		var userguess2;
		var q2 = "this is question 2";
		var q2a1 = "This is Answer 1";
		var q2a2 = "This is Answer 2";
		var q2a3 = "This is Answer 3";
		var q2a4 = "This is Answer 4";
		var userguess3;
		var q3 = "this is question 3";
		var q3a1 = "This is Answer 1";
		var q3a2 = "This is Answer 3";
		var q3a3 = "This is Answer 3";
		var q3a4 = "This is Answer 4";

		var question2 = new question(q2, q2a1, q2a2, q2a3, q2a4, "#ans3", userguess2);
		//var question3 = new question(q3, q3a1, q3a2, q3a3, q3a4, "#ans3", userguess3);
	}

	var question = function(q, a1, a2, a3, a4, correct, userguess){

		this.q = q;
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.a4 = a4;
		this.correct = correct;
		this.userguess = userguess;

		var correctguess;
		secondsLeft = 32;
		userguess = false;

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