$('body').ready( function() {
		$('#body-content').css('opacity', '1');
	}
);


positionFooter(); 
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
//disabled because I couldn't get it to work, for now.
//$(window).bind('scroll resize click', positionFooter);
