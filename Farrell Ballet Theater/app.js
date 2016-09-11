/**
 * @author David Daly
 */
$(document).ready(function() {
	(function() {
		
		
		//settings
		var fadeSpeed = 200, fadeTo = 0.8, topDistance = 10;
		var topbarME = function() { $('#uberbar').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#uberbar').fadeTo(fadeSpeed,fadeTo); };
		var inside = false;
		//do
		$(window).scroll(function() {
			position = $(window).scrollTop();
			if(position > topDistance && !inside) {
				//add events
				topbarML();
				$('#uberbar').bind('mouseenter',topbarME);
				$('#uberbar').bind('mouseleave',topbarML);
				inside = true;
			}
			else if (position < topDistance){
				topbarME();
				$('#uberbar').unbind('mouseenter',topbarME);
				$('#uberbar').unbind('mouseleave',topbarML);
				inside = false;
			}
		});
	})();
	
	$(window).scroll(function(eventObject) {
  		
  		// do stuff! You can find out about how far the window has scrolled via the eventObject.
});
});
