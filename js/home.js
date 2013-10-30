adjustSize = function() {
	if($(window).width() <= 700) {
		var ratio = 816 / 1057,
			newheight;
		
		newheight = ratio * $(window).width();
		$('#body-hero').css('height', newheight);
	}
}

setWindowHandler = function() {
	adjustSize();
	$(window).resize( function() {
		adjustSize();
	}
	);
}

$('body').ready( function() {
		$('#body-content').css('opacity', '1');
		setWindowHandler();
	}
);

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
