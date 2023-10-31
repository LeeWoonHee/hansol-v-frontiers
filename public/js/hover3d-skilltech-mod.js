/**
 * 1. Put this entire file into your "assets/js" folder
 * 2. Copy the script tag from the next line and paste it near the end of the body, before the </body> closing tag
 * 2.1 Copy this: <script src="assets/js/hover3d-skilltech-mod.js"></script>
 * -------------------
 * Customize (CTRL+F, Always check if there are multiple locations for changing a value):
 * 3D Effect Sensitivity (min = 1 / max = 50 - as it says)
 * #your-link (the link to apply to 3D image, make sure you also add the same link in HTML, also marked with #your-link)
 * You can change "_parent" in the link's "target" attribute (here and in HTML) to _blank, if you want the link to open in new tab.
 * Glow Amount (min = 0.1 / max = 0.9 - as it says, the amount of glow over the 3D image)
 * ---------------
 * jQuery Hover3d
 * =================================================
 * Version: 1.0.0
 * Author: Rian Ariona
 * Website: http://ariona.net
 * Docs: http://ariona.github.io/hover3d
 * Repo: http://github.com/ariona/hover3d
 * Issues: http://github.com/ariona/hover3d/issues
 * Modified by Skilltech. Do not use this code, it is different than the original script
*/

(function($){
	
	$.fn.hover3d = function(options){
		
		var settings = $.extend({
			selector      : null,
			perspective   : 1000,
			sensitivity   : 20,
			invert        : false,
			shine         : false,
			hoverInClass  : "hover-in",
			hoverOutClass : "hover-out",
			hoverClass    : "hover-3d"
		}, options);
		
		return this.each(function(){
			
			var $this = $(this),
				$card = $this.find(settings.selector);

			if( settings.shine ){
				$card.append('<a href="#your-link" target="_parent"><div class="shine"></div></a>');
			}
			var $shine = $(this).find(".shine");

			// Set perspective and transformStyle value
			// for element and 3d object
			$this.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d"
			});
			
			$card.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d",
			});

			$shine.css({
				position  : "absolute",
				top       : 0,
				left      : 0,
				bottom    : 0,
				right     : 0,
				"z-index" : 9
			});
			
			// Mouse Enter function, this will add hover-in
			// Class so when mouse over it will add transition
			// based on hover-in class
			function enter(){
				$card.addClass(settings.hoverInClass+" "+settings.hoverClass);
				
				setTimeout(function(){
					$card.removeClass(settings.hoverInClass);
				}, 50);
			}
			
			// Mouse movement Parallax effect
			function move(event){
				var w      = $this.innerWidth(),
					h      = $this.innerHeight(),
					ax 	   = settings.invert ?  ( w / 2 - event.offsetX)/settings.sensitivity : -( w / 2 - event.offsetX)/settings.sensitivity,
					ay     = settings.invert ? -( h / 2 - event.offsetY)/settings.sensitivity :  ( h / 2 - event.offsetY)/settings.sensitivity;
					dy     = event.offsetY - h / 2,
					dx     = event.offsetX - w / 2,
					theta  = Math.atan2(dy, dx),
					angle  = theta * 180 / Math.PI - 90;
					
				if (angle < 0) {
					angle  = angle + 360;
				}
				

				$card.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateY("+ax+"deg) rotateX("+ay+"deg)"
				});

				$shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * 0.3 + ') 0%,rgba(255,255,255,0) 80%)'); // Glow Amount (in this line, after event.offsetY / h * 0.3)
			}
			
			// Mouse leave function, will set the transform
			// property to 0, and add transition class
			// for exit animation
			function leave(){
				$card.addClass(settings.hoverOutClass+" "+settings.hoverClass);
				$card.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateX(0) rotateY(0)"
				});
				setTimeout( function(){
					$card.removeClass(settings.hoverOutClass+" "+settings.hoverClass);
				}, 50 );
			}
			
			// Mouseenter event binding
			$this.on( "mouseenter", function(){
				return enter();
			});
			
			// Mousemove event binding
			$this.on( "mousemove", function(event){
				return move(event);
			});
			
			// Mouseleave event binding
			$this.on( "mouseleave", function(){
				return leave();
			});
			
		});
		
	};
	
}(jQuery));

$(document).ready(function(){
	$(".pa-3d-hover").hover3d({
		selector: ".pa-3d-hover__card",
		shine: true,
		sensitivity: 40, // 3D Effect Sensitivity (1-50)
	});

	$(".movie").hover3d({
		selector: ".movie__card",
		shine: true,
		sensitivity: 40, // 3D Effect Sensitivity (1-50)
	});
});

// touch devices fix
function isTouchDevice() {
	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));
}
var touchDevice = isTouchDevice();
if (touchDevice) {
	$( '.pa-3d-hover__title' ).css( 'opacity', '1' );
	$( '.pa-3d-hover__title' ).css({ transform: 'translateY(0) scale(1)'})
	$( '.pa-3d-hover__category' ).css( 'opacity', '1' );
	$( '.pa-3d-hover__category' ).css({ transform: 'translateY(0) scale(1)'})
}