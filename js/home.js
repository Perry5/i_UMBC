$('body').ready( function() {
		var picNum = 0;		
		$('#body-content').css('opacity', '1');
		positionFooter(); 
		picNum = manageSlider(picNum);
	}
);
function positionFooter() {
	if($(document.body).height() < $(window).height()){
		$('#footer').css({
			position: 'absolute',
				   top:  ( $(window).scrollTop() + $(window).height()
					 - $("#footer").height() ) + "px",
				   width: "100%"
				   });
			        } else {
				$('#footer').css({
					position: 'static'
					});
				}    
}

function manageSlider(picNum) {
	var images = ['campus_50_blur.jpg', 'campus_50.jpg', 'hero.JPG'];
	picNum = (picNum + 1) % images.length;
	$('.nav-bar-border').css('background-image', 'url(http://hackumbc.org/img/'+images[picNum]+')'); 
	setTimeout(function() {
		manageSlider(picNum);
		}
	, 5000);
	
	return picNum;
}
//disabled because I couldn't get it to work, for now.
//$(window).bind('scroll resize click', positionFooter);
