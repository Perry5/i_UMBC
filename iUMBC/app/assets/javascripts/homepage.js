//  Place all the behaviors and hooks related to the matching controller here.
//  All this logic will automatically be available in application.js.
//  You can use CoffeeScript in this file: http://coffeescript.org/

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
		});
	};
	$('body').ready( function() {
		setContent('home');
		setNavHandler();
		$('body').addClass('ready');
	});