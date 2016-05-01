//Rocket timer
//answer the questions right to fill fuel into you rocket to get it to take off



$(document).ready(function() {

	var answer1 = "Q1:A1";
	var answer2 = "Q1:A2";
	var answer3 = "Q1:A3";
	var answer4 = "Q1:A4";
	var textTimer;


	var textFade = function(){
		$(".ansFade").fadeIn(1500);
	};


	$(".blastoff").on("click", function(){

		$(".ansFade").hide();

		$(".allAns").animate({width: "100%", height: "100%"}, 1500);
		$(".allAns").css("background-color", "white");
		$(".allAns").css("border-style", "solid");
		$(".allAns").css("border-color", "black");

		$("#ans1").html(answer1);
		$("#ans2").html(answer2);
		$("#ans3").html(answer3);
		$("#ans4").html(answer4);
		
		textTimer = setTimeout(textFade, 2000);

   		$(".blastoff").addClass("invsDiv");
   		$(".question").removeClass("invsDiv");
	});







	$("#ans1").on("click", function() {
		$(".question").addClass("invsDiv");
		$(".result").removeClass("invsDiv");
	});

});