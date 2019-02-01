//header.php image slider
$(document).ready(function(){
	var imageName = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpeg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg"];
	//var imageName2 = ["img/img11.jpg", "img/img12.jpg", "img/img13.jpg"]
	var imageTitle = [];
	var counter = 0;

	var clickaway =
	function go(){
		$("#picture").fadeOut(300, function(){
			$("#picture").attr("src", imageName[counter]);
			$("#imageCaption").text(imageTitle[counter]);
			counter++;
			if (counter > 7) {counter = 0;}
			$("#picture").fadeIn(500).delay(3000);
			go();// comment this line out to turn into click image slider
		});
	}
	clickaway();
	//uncomment below to turn into click image slider
	//$("#picture").click(clickaway);
});


/********** GET INFO FROM RADIO BUTTONS IN JOIN PRPA **********************/

$(document).ready(function() {
	$('#btnSubmit').click(function () {
		var result = $('input[type = "radio"]:checked');
		if (result.length > 0) {
			$('#divResult').html(result.val() + " is checked");
		}
		else {
				$('#divResult').html("Nothing clicked");
		}
	});
});