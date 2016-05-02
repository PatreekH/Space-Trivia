//Rocket timer
//answer the questions right to fill fuel into you rocket to get it to take off



$(document).ready(function() {


	$(".blastoff").on("click", function(){

		var textTimer;
		var textFade = function(){
			$(".ansFade").fadeIn(1000);
			$(".question").fadeIn(1000);
			//$(".mainDiv").fadeIn(1000);
		};

		$(".ansFade").hide();
		$(".question").hide();
		//$(".mainDiv").hide();

		//$(".mainDiv").animate({opacity: 1}, 1000);
		$(".allAns").animate({width: "100%", height: "100%"}, 1000);
		$(".allAns").css("background-color", "white");

		textTimer = setTimeout(textFade, 1500);

   		$(".blastoff").addClass("invsDiv");
   		$(".bodiv").addClass("invsDiv");
   		$(".startText").addClass("invsDiv");
   		$(".question").removeClass("invsDiv");

   		Startgame();

	});

	var Startgame = function(){

	var q1 = "This is question 1";
	var q1a1 = "This is Answer 1";
	var q1a2 = "This is Answer 2";
	var q1a3 = "This is Answer 3";
	var q1a4 = "This is Answer 4";
	var q2 = "this is question 2";
	var q2a1 = "This is Answer 1";
	var q2a2 = "This is Answer 2";
	var q2a3 = "This is Answer 3";
	var q2a4 = "This is Answer 4";

	var question1 = new question(q1, q1a1, q1a2, q1a3, q1a4);//correct answer goes on the end here//userguess1
		//if userguess1 == true after blah seconds transfer to next question
	}

	var question = function(q, a1, a2, a3, a4, correct, userGuessNum){

		this.q = q;
		this.a1 = a1;
		this.a2 = a2;
		this.a3 = a3;
		this.a4 = a4;
		this.correct = correct;
		this.userGuessNum = userGuessNum;

		$(".question").html(q);
		$("#ans1").html(a1);
		$("#ans2").html(a2);
		$("#ans3").html(a3);
		$("#ans4").html(a4);

		//.on click correct
		//correctguess = true

		//.on click allAns
		//if correctguess == true{ userguess = true, navigate to correct.} else { userguess = true highlight word in red and show incorrect page}

	}


});