/**
 * Particle HTML Template V2 002
 * Theme JS
 * Author: Dragan Milenkovic
 * Copyright - 2021 Skilltech Web Design - skilltechwebdesign.com
 * URL: https://themeforest.net/item/particle-modern-tech-startup-html-template/20078383?ref=Skilltech
 */



// Page Preloader - Part 1 (pre-insert)
// note: if you turn off (or delete) preloader, search for
// PRELOADER in (/assets/js/) files that start with "page-"
// and either comment out the startDelay line or make it 0
// $('body').prepend('<div class="pa-loader">' +
// 	'<section class="warper"><div class="spinn"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></section>' +
// 	'<section class="warper darker"><div class="spinn"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></section>' +
// '</div>');


// var preload = document.createElement("div");
// preload.className = "preloader";
// preload.innerHTML = '<p class="hello"></p><div id="preloader"><div id="loader"></div></div>';
// document.body.appendChild(preload);
// window.addEventListener("load", function() {
// 	//  Uncomment to fade preloader after document load
// 	preload.className += " fade";
// 	setTimeout(function() {
// 		preload.style.display = "none";
// 	}, 2500);
// });



// window.addEventListener("load", function() {
// 	//  Uncomment to fade preloader after document load
// 	preload.className += " fade";
// 	setTimeout(function() {
// 		preload.style.display = "none";
// 	}, 2500);
// });


$(document).ready(function () {

	// Page Transitions - Part 1 (pre-insert)
	// $('body').prepend('<div class="pa-page-transition pa-page-transition-1 is-active"></div>');
	// $('body').prepend('<div class="pa-page-transition pa-page-transition-1 is-active" style="transition: all 1.2s ease 0s; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000001; background-color: #091019; opacity: 0; pointer-events: none;"></div>');

	// Page Preloader - Part 1 (pre-insert)
	$('body').prepend('<div class="pa-loader">' +
		'<section class="warper"><div class="spinn" style="opacity: 0.24;"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="preloader"><p class="hello"></p><div id="preloader"><div id="loader"></div></div></div></section>' +
		'<section class="warper darker"><div class="spinn" style="opacity: 0.24;"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></section>' +
	'</div>');

	setTimeout(function(){
		$('.pa-overlay').detach();
	}, 340);

	setTimeout(function(){
		$( '.pa-page-transition-1' ).removeClass( 'is-active' );
	}, 420);
	
	// Page Entrance Animation

	// From: Page Transitions - Part 2
	// At 350ms: .pa-page-transition (black overlay) will begin fading out
	// At 1350ms: .pa-page-transition (black overlay) will be INVISIBLE ( .pa-page-transition-1 { transition: all 1s ease 0s; } )

	// From: Page Preloader - Part 2
	// At 2500ms: 
	// At 3000ms(1): .warper (preloader animation) will begin fading out
	// At 3000ms(2): .pa-loader (preloader background) will begin fading out
	// At 3500ms: .warper (preloader animation) will be INVISIBLE ( section.warper.is-inactive { transition: all 0.5s ease 0s; } )
	// At 3650ms: .pa-loader (preloader background) will be INVISIBLE ( .pa-loader { transition: all 0.65s ease 0s; } )
	// At 3660ms: .pa-loader (preloader) will be DETACHED


	setTimeout(function(){
		$('.warper').addClass('is-inactive');
		$('.pa-loader').addClass('is-inactive');
	}, 3000);
	setTimeout(function(){
		$( '.pa-loader' ).detach();
	}, 4410);

	// Page Transitions - Part 2
	window.onload = () => {

		// On Load
		const anchors = document.querySelectorAll('a:not([href^="#"])');

		// Wait 350ms AND
		// Make .pa-page-transitions (black overlay) INVISIBLE
		const transition_el = document.querySelector('.pa-page-transition');
		setTimeout(() => {
			transition_el.classList.remove('is-active');
		}, 350);

		for (let i = 0; i < anchors.length; i++) {
			const anchor = anchors[i];

			// On normal link click
			anchor.addEventListener('click', e => {
				e.preventDefault();
				var target = anchor.href;

				// Make .pa-page-transition (black overlay) VISIBLE
				transition_el.classList.add('is-active');

				// Wait for .pa-page-transition.is-active transition and update URL
				setInterval(() => {
					window.location.href = target;
				}, 500); // make it equal to .pa-page-transition-1.is-active {transition: all EQUIALms ease 0s;}
			})
		}
	}


	// Desktop Menu Dropdown
	$('.navbar-nav > li > ul > li').on('click', function(e) {
		e.stopPropagation();
		$(this).siblings().removeClass('pa-expand-children');
		$(this).toggleClass('pa-expand-children');
	});


	// $('.pa-submenu-ul').mouseout(function() {
	// 	$('.navbar-nav > li > ul > li').removeClass('pa-expand-children');
	// });

	// // *************************************************************************
	// // SMOOTH ANCHOR SCROLLING V1 - KILLED
	// // -------------------------------------------------------------------------
	// // DOESN'T WORK ON ANCHORS ON ANOTHER URL(page)
	// // CAN BE FIXED WITH ADDING A CLASS TO LINKS THAT LEAD TO ANCHORS ON 'this' PAGE
	// // AND THEN APPLYING THE CLICK FUNCTION TO THOSE LINKS (ie "a.someclass") BUT
	// // THAT KILLS THE EASY USABILITY, SO, SWITCHING TO ANOTHER SOLUTION.
	// // Add smooth scrolling to all links https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
	// $("a").on('click', function(event) {

	// 			//// This solution/fix doesn't work
	// 			// if ( document.URL.replace(/#.*$/, "") != $(this).attr('href').replace(/#.*$/, "") ) {
	// 			//     // Link goes to a different URL than the current page (not counting the hash)
	// 			//     document.location.href = $(this).attr('href');
	// 			//     return;
	// 			// }

	// 	// Make sure this.hash has a value before overriding default behavior
	// 	if (this.hash !== "") {
	// 		// Prevent default anchor click behavior
	// 		event.preventDefault();
	// 		// Store hash
	// 		var hash = this.hash;
	// 		// Using jQuery's animate() method to add smooth page scroll
	// 		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top
	// 		}, 800, 'easeInOutQuad',

	// 		function(){
	// 			// Add hash (#) to URL when done scrolling (default click behavior)
	// 			window.location.hash = hash;
	// 		});
	// 	} // End if
	// });
	// // *************************************************************************

	/** 
	 * Smooth Anchor Scrolling
	 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
	 */

	// Select all links with hashes
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) { // Select a AND Remove links that don't actually link to anything
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, 'easeInOutQuad',
				function(){
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});


	// Initiate Off Canvas Menu
	$('#main-nav').hcOffcanvasNav({
		// options here
		disableAt: 1200, // when mobile menu changes to desktop (match here and in main CSS file)
		insertClose: false,
		insertBack: true,
		// labelClose: 'Close', // what it says on the close button
		labelBack: '이전으로', // what it says on the back button
		levelTitleAsBack: false,
		pushContent: true,
		pushContent: '.pushable-content', // CSS selector for pushable content container
		position: 'right',
		// width: 280,
		// height: 'auto',
		swipeGestures: true,
		// expanded: false, // initialize the menu in expanded mode
		// levelOpen: 'overlap', // overlap / expand / none
		levelSpacing: 17, // in pixels
		// levelTitles: false, // shows titles for submenus
		// closeOpenLevels: true, // close sub levels when the nav closes
		// closeActiveLevel: false, // clear active levels when the nav closes
		// navTitle: null, // the title of the first level
		// navClass: '', // extra CSS class(es)
		// disableBody: true, // disable body scroll 
		// closeOnClick: true, // close the nav on click
		// customToggle: null, // custom toggle element
		// bodyInsert: 'prepend', // prepend or append the menu to body
		// keepClasses: true, // should original menus and their items classes be preserved or excluded.
		// removeOriginalNav: false, // remove original menu from the DOM
		// rtl: false // enable RTL mode
	});


	// Configue WOW.js and animate.css elements (animations) - Before initialization
	$('.counterskills').addClass('wow fadeIn');
	$('.fadeInDelay00Duration10').addClass('wow fadeIn');
	$('.fadeInDelay03Duration10').addClass('wow fadeIn');
	$('.fadeInDelay05Duration10').addClass('wow fadeIn');
	$('.fadeInDelay06Duration10').addClass('wow fadeIn');
	$('.fadeInDelay10Duration10').addClass('wow fadeIn');
	$('.fadeInDelay15Duration10').addClass('wow fadeIn');
	$('.fadeInLeftDelay03Duration10').addClass('wow fadeInLeft');
	$('.fadeInLeftDelay05Duration10').addClass('wow fadeInLeft');
	$('.fadeInRightDelay05Duration10').addClass('wow fadeInRight');
	$('.fadeInRightDelay11Duration10').addClass('wow fadeInRight');
	$('.fadeInRight--Custom').addClass('wow fadeInRightCustom');
	$('.fadeInLeft--Custom').addClass('wow fadeInLeftCustom');
	$('.progressBar').addClass('wow progressBar');
	$('.slideup').addClass('wow slideInUp');
	$('.slideUp').addClass('wow slideInUp');
	$('.slideDownDelay10Duration10').addClass('wow slideInDown');
	$('.slideDownDelay07Duration10').addClass('wow slideInDown');
	$('.bounceDelay35Duration12').addClass('wow bounce');


	// Innitiate WOW.js for animations
	new WOW().init();


	// Configue WOW.js and animate.css elements (animations) - After initialization
	$('.counterskills').attr({'data-wow-delay':'1.0s'});
	$('.fadeInDelay00Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.0s'});
	$('.fadeInDelay03Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$('.fadeInDelay05Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInDelay06Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.6s'});
	$('.fadeInDelay10Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.0s'});
	$('.fadeInDelay15Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.5s'});
	$('.fadeInLeftDelay03Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$('.fadeInLeftDelay05Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInRightDelay05Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInRightDelay11Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.1s'});
	$('.fadeInRight--Custom, .fadeInLeft--Custom').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$('.fadeInRightDelay11Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.1s'});
	$('.slideDownDelay10Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'1.0s'});
	$('.slideDownDelay07Duration10').attr({'data-wow-duration':'1.0s','data-wow-delay':'0.7s'});
	$('.bounceDelay35Duration12').attr({'data-wow-duration':'1.2s','data-wow-delay':'3.5s'});


	// Back to Top Button
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 1200) {
			$(".pa-back-to-top-wrap").addClass("pa-backtotop-visible");
		} else {
			$(".pa-back-to-top-wrap").removeClass("pa-backtotop-visible");
		}
	});


	// BLOG - Feed Styler UI (changes feed layout)
	$('span.pa-feed-styler').on('click', function(e) {
		event.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
		var ovo = $(this);
		if ( $('.pa-blog-featured').length) {
			$( '.pa-blog-featured' ).addClass( 'temp-hidden' );
			setTimeout(function(){ // 500
				$('.pa-articles-wrapper').css('transform', 'translateX(100%)');
				$("section[class*='pa-blog-style-v']").removeClass (function (index, css) {
					return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
				});
				setTimeout(function(){
					if ( $(ovo).hasClass( 'pa-fs-magazine' ) ) {
						$('.pa-blog-content').addClass('pa-blog-style-v1-magazine');
					}
					if ( $(ovo).hasClass( 'pa-fs-stretched' ) ) {
						$('.pa-blog-content').addClass('pa-blog-style-v2-stretched');
					}
					if ( $(ovo).hasClass( 'pa-fs-classic' ) ) {
						$('.pa-blog-content').addClass('pa-blog-style-v3-classic');
					}
					$('.pa-articles-wrapper').css('transition', 'all 0s linear 0s');
					$('.pa-articles-wrapper').css('opacity', '0');
					$('.pa-articles-wrapper').css('transform', 'translateX(-100%)');
					$('.pa-articles-wrapper').css('opacity', '1');

					setTimeout(function(){
						$('.pa-articles-wrapper').css('transition', 'all 0.3s ease 0s');
						$('.pa-articles-wrapper').css('transform', 'translateX(0)');
					}, 15);
				}, 300);
				setTimeout(function(){
					$( '.pa-blog-featured' ).removeClass( 'temp-hidden' );
				}, 850);
			}, 500);
		} else {
			$(this).siblings().removeClass('active');
			$(this).toggleClass('active');
			$('.pa-articles-wrapper').css('transform', 'translateX(100%)');
			$("section[class*='pa-blog-style-v']").removeClass (function (index, css) {
			    return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
			});
			setTimeout(function(){
				if ( $(ovo).hasClass( 'pa-fs-magazine' ) ) {
					$('.pa-blog-content').addClass('pa-blog-style-v1-magazine');
				}
				if ( $(ovo).hasClass( 'pa-fs-stretched' ) ) {
					$('.pa-blog-content').addClass('pa-blog-style-v2-stretched');
				}
				if ( $(ovo).hasClass( 'pa-fs-classic' ) ) {
					$('.pa-blog-content').addClass('pa-blog-style-v3-classic');
				}
				$('.pa-articles-wrapper').css('transition', 'all 0s linear 0s');
				$('.pa-articles-wrapper').css('opacity', '0');
				$('.pa-articles-wrapper').css('transform', 'translateX(-100%)');
				$('.pa-articles-wrapper').css('opacity', '1');

				setTimeout(function(){
					$('.pa-articles-wrapper').css('transition', 'all 0.3s ease 0s');
					$('.pa-articles-wrapper').css('transform', 'translateX(0)');
				}, 15);
			}, 300);	
		}
	});


	// Dark Mode Switch
	$('span.lm-button').on('click', function(e) {
		event.preventDefault();
		$('body').toggleClass('pa-dark-mode');
		$('.dark-sensitive').toggleClass('pa-dark-mode');
	});

});