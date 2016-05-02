//Rocket timer
//answer the questions right to fill fuel into you rocket to get it to take off



$(document).ready(function() {

	var answer1 = "This is Answer 1";
	var answer2 = "This is Answer 2";
	var answer3 = "This is Answer 3";
	var answer4 = "This is Answer 4";
	var textTimer;


	var textFade = function(){
		$(".ansFade").fadeIn(1000);
	};


	$(".blastoff").on("click", function(){

		$(".ansFade").hide();

		$(".allAns").animate({width: "100%", height: "100%"}, 1000);
		$(".allAns").css("background-color", "white");

		$("#ans1").html(answer1);
		$("#ans2").html(answer2);
		$("#ans3").html(answer3);
		$("#ans4").html(answer4);
		
		textTimer = setTimeout(textFade, 1500);

   		$(".blastoff").addClass("invsDiv");
   		$(".bodiv").addClass("invsDiv");
   		$(".startText").addClass("invsDiv");
   		$(".question").removeClass("invsDiv");
	});







	$("#ans1").on("click", function() {
		$(".question").addClass("invsDiv");
		$(".result").removeClass("invsDiv");
	});

});