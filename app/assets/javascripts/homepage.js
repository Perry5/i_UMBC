//  Place all the behaviors and hooks related to the matching controller here.
//  All this logic will automatically be available in application.js.
//  You can use CoffeeScript in this file: http://coffeescript.org/

setNavHandler = function () {
		$('.nav-item').hover( function() {
			var $this = $(this),
			    $subnav = $this.children('.sub-nav');
			$subnav.css('width', $this.width());
			$subnav.toggle();
		});
		$('.sn-item').mousedown(changeText);
	};


changeText = function () {
		var choice = this.id || 'home',
			choicesc = $('.' + choice + '> #screen'),
			choicekb = $('.' + choice + '> #keyboard');
		screenIn(choicesc.html(), false, $('#sc-text'));
		screenIn(choicekb.html(), false, $('#kb-text'));
	};


screenIn = function( text, typewrite, element) {
		element.hide();
		element.html("");
		if (typewrite) {
			element.show();
			for (var i=0; i<text.length; i++)  {				
				setTimeout( console.log('hi'), 2000);
				element.html(element.html() + text[i]);
			}
		} else {
			element.html(text);
			element.fadeIn(600);
		}
	};


resizeHandler = function() {
		$(window).resize(fitScreen);
	};



fitScreen = function() {
		var cimg = $('#computer'),
			cpos = cimg.position(),
			cwh = cimg.width(),
			cht = cimg.height() || cwh * 1.1,
			screen = $('#sc-text'),
			keyboard = $('#kb-text');
			//width left offset:16%
		var scleft = cpos.left+ cwh * .16,
			scwidth = cwh * .65,
			sctop = cpos.top + cht * .06,
			scheight = cht * .3;
		screen.css('left', scleft);
		screen.css('width', scwidth);
		screen.css('top', sctop);
		screen.css('height', scheight);
		screen.css('font-size', scheight / 5);

		var kbleft = cpos.left + cwh * .03,
			kbtop = cpos.top + cht * .75,
			kbwidth = cwh * .89,
			kbheight = cht * .17;
		keyboard.css('left', kbleft);
		keyboard.css('width', kbwidth);
		keyboard.css('top', kbtop);
		keyboard.css('height', kbheight);
		keyboard.css('font-size', scheight / 11);
	};
	$('body').ready( function() {
		setNavHandler();
		resizeHandler();
		fitScreen();
		changeText();
	});