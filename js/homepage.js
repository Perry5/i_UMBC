	setContent = function (display) {
		$('#content').html($('.' + display).html());
	};


	setNavHandler = function () {
		$('.nav-item').hover( function() {
			var $this = $(this),
			    $subnav = $this.children('.sub-nav');
			$subnav.css('width', $this.width());
			$subnav.toggle();
		});
		$('.sn-item').click( function() {
			var $this = $(this),
			    section_title = $this.attr('id');
			window.location.hash = section_title;
			setContent(section_title);
			//positionFooter();
		});
	};
	$('body').ready( function() {
		setContent('home');
		setNavHandler();
		$('body').addClass('ready');
	});


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
