/******************fadeIn onload****************/
    $(document).ready(function() {
        $('body').hide().fadeIn(2000);
      });

/******************header clock*********************************/
			function showTime() {
				var date = new Date();
				var h = date.getHours();// 0 - 23
				var m = date.getMinutes();// 0 - 59
				var s = date.getSeconds();// 0 - 59
				var session = "AM";

				// 2 represents Pureto Rico time difference, 2 hours ahead of CST

 				if (h <= 9) {
					h = h + 2; // 2am to 9am Puerto Rico time
					session = "AM";
				}

 				else if (h == 10) {
 					h = h + 2; // Noon Puerto Rico time
 					session = "PM";
 				}

 				else if (h == 11) {
 					h = h - 10; // 1pm Puerto Rico time
 					session = "PM"
 				}

				else if (h == 12 ){
					h = h + 2; // 2pm Puerto Rico
					session = "PM";
				}

				else if (h > 12 && h <= 21) {
 					h = (h - 12) + 2; // 3pm to 11pm Puerto Rico time
 					session = "PM";
 				}

				 else if (h == 22) {
						h = (h - 10); // 12am Puerto Rico time
						session = "AM";
				}

				else if (h == 23) {
					h = (h - 22); // 1am Puerto Rico time
					session = "AM";
				}

				// add a zero if time has only one digit
				h = (h < 10) ? h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;
				var time = h + ":" + m + ":" + s + " " + session;

				// display in all/older browsers
				document.getElementById('clock').innerText = time;
				document.getElementById('clock').textContent = time;
				document.getElementById('clock').innerHTML = time;
				// display time every second
				setTimeout(showTime, 1000);
				
			}

			// call function
			showTime();

/**************************************end of clock*******************************/


/******************************image slider*************************************/
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
// run function when document is ready/loaded
$(document).ready(function() {
	// when button is clicked run function
	$('#btnSubmit').click(function () {
		// store result of input from checked buttons in var result
		var result = $('input[type = "radio"]:checked');
		// if there is input display value
		if (result.length > 0) {
			$('#divResult').html(result.val() + " is checked");
		}
		else {
			// else if no input found display "Nothing clicked"
				$('#divResult').html("Nothing clicked");
		}
	});
});
/********************************end of image slider****************************/


/****************************scroll reveal*****************************/
 
		// scroll reveal slide
		window.sr = ScrollReveal();
		
		sr.reveal('.news', {
			duration: 2000, 
			origin: 'bottom',
			distance:'100px'
		});
		
		sr.reveal('.serving', {
			duration: 3000, 
			origin: 'right',
			distance:'300px'
		});
		
		sr.reveal('.upcoming', {
			duration: 2000,
			origin: 'bottom',
			distance: '100px'
		});
		
		sr.reveal('#prpa', {
			duration: 5000,
			origin: 'left',
			distance:'300px',
			viewFactor: 0.4
		});
		sr.reveal('#serving-chicagoland', {
			duration: 5000,
			origin: 'right',
			distance:'300px',
			viewFactor: 0.4
		});
		sr.reveal('#communities', {
			duration: 5000,
			origin: 'left',
			distance:'300px',
			viewFactor: 0.4
		});
		sr.reveal('.mission-paragraph', {
			duration: 7000,
			origin: 'left',
			distance:'400px',
			viewFactor: 0.6
		});


	/*****************************smooth scroll*******************************/
  
		$(function(){
			// smooth scrolling effect
			$('a[href*="#"]:not([href="#"])').click(function(){
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
					}, 1000);
						return false;
				}
			}
		});
	});
