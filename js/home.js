$('body').ready( function() {
		$('#body-content').css('opacity', '1');
		positionFooter();
		iframe();
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

function iframe() {
	var photo_frame = $('#photos'),
		ratio = 1300.0/500;
		
	if(photo_frame.length) {
		photo_frame.height(ratio * photo_frame.width());
	}
}

//disabled because I couldn't get it to work, for now.
//$(window).bind('scroll resize click', positionFooter);
