//header.php image slider
$(document).ready(function(){
	var imageName = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg"];
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


//var imageName2 = ["img/img11.jpg", "img/img12.jpg", "img/img13.jpg"];
//var counter = 0;



/*var i = 0;
var images =[];
var time = 3000;

// image list
images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img/img3.jpg';
images[3] = 'img/img4.jpg';

// change image
function changeImg(){
	document.photo.src = images[i];

	if(i < images.length -1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}


/*$(function go(){
	$(".picture").click(function() {
		$(this).fadeOut(300, function(){
			$(this).attr("src", imageName2[counter]);
			counter++;
			if (counter > 3) { counter = 0;}
			$(this).fadeIn(500).delay(3000);
			go();
		})
	});
});*/
// continuous slider no click
/*$(function go(){
	//$(".picture").click(function() {
		$(".picture").fadeOut(300, function(){
			$(".picture").attr("src", imageName2[counter]);
			counter++;
			if (counter > 3) { counter = 0;}
			$(".picture").fadeIn(500).delay(3000);
			go();
		})
	});
*/
/*
var i = 0;
var imageName2 = ["img/img11.jpg", "img/img12.jpg", "img/img13.jpg"];
*/
/*while (i < imageName2.length){
	console.log("hey");
	i = i+1;
}

do {
	console.log('now');
	i+1;
} while (i < imageName2.length);
*/
/*for (var i = 0; i < imageName2.length; i++) {
	console.log('more');
}*/