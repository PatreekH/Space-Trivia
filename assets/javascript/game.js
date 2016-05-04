//Rocket timer
//answer the questions right to fill fuel into you rocket to get it to take off



$(document).ready(function() {

var questionCount = 0;

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

   		newQuestion();

	});

	//var Startgame = function(){

		//var userguess1;
		//var q1 = "This is question 1";
		//var q1a1 = "This is Answer 1";
		//var q1a2 = "This is Answer 2";
		//var q1a3 = "This is Answer 3";
		//var q1a4 = "This is Answer 4";

		//var question1 = new question(q1, q1a1, q1a2, q1a3, q1a4, "#ans1");
	//}

	var newQuestion = function(){
		$(".question").removeClass("invsDiv");
		$(".timer").removeClass("invsDiv");
		$(".correctguess").addClass("invsDiv");
		$(".incorrectguess").addClass("invsDiv");
		$(".timeOut").addClass("invsDiv");

		var q1 = "This is question 1";
		var q1a1 = "This is Answer 1";
		var q1a2 = "This is Answer 2";
		var q1a3 = "This is Answer 3";
		var q1a4 = "This is Answer 4";

		var q2 = "this is question 2";
		var q2a1 = "This is Answer2 1";
		var q2a2 = "This is Answer 22";
		var q2a3 = "This is Answer2 3";
		var q2a4 = "This is Answer2 4";
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
		var q5 = "this is question 5";
		var q5a1 = "This is Answer 1";
		var q5a2 = "This is Answer 3";
		var q5a3 = "This is Answer 3";
		var q5a4 = "This is Answer 4";
	

		questionCount += 1;


		var ans1 = $("#ans1")
		var ans2 = $("#ans2")
		var ans3 = $("#ans3")
		var ans4 = $("#ans4")

//move inside of function
//if loop, based on questionCounter > 1
 
	if (questionCount == 1){
	var question1 = new question(q1, q1a1, q1a2, q1a3, q1a4, ans1);
	}
	else if (questionCount == 2){
		var question2 = new question(q2, q2a1, q2a2, q2a3, q2a4, ans3);
	}
	else if (questionCount == 3){
		var question3 = new question(q3, q3a1, q3a2, q3a3, q3a4, ans2);
	}
	else if (questionCount == 4){
		var question4 = new question(q4, q4a1, q4a2, q4a3, q4a4, ans1);
	}
	else if (questionCount == 5){
		var question5 = new question(q5, q5a1, q5a2, q5a3, q5a4, ans1);
	}
	else if (questionCount == 6){
		var question6 = new question(q6, q6a1, q6a2, q6a3, q6a4, ans4);
	}


		//for (i = 0; questionCount > questions[i]; i++){
		//questions[0];
			//or .join [i] to question "new question(question[i])"?
	}

	var question = function(q, a1, a2, a3, a4, correct){

		this.q = q;
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.a4 = a4;
		this.correct = correct;

		var correctguess = false;
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

		//var timerDelay = function(){
			//var tDelay = setTimeout(runTimer, 2000);
		//}

		var qTimeUp = function(){
			$(".question").addClass("invsDiv");
   			$(".timer").addClass("invsDiv");
   			$(".timeOut").removeClass("invsDiv");
			userguess = true;
   			guessCheckTimer();
   			//disable ansbuttons
   			//clearInterval(interv);
		}

		//var runTimer = function(){
			qTimeDecrement();
		//}

		//timerDelay();
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
   			else if (correctguess == false) {
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