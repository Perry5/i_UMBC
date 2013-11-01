$('body').ready( function() {
		$('#body-content').css('opacity', '1');
		setNavHandler();
	}
);

setNavHandler = function () {
	$(window).scroll( function() {
		var $navbar = $('.nav-bar');
		if ($(window).scrollTop() > $navbar.height()) {
			$navbar.css('position', 'fixed');
		} else {
			$navbar.css('position', 'inherit');
		}
	});
};


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
