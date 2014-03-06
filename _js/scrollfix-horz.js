/**
 * ScrollFix v0.1
 * http://www.joelambert.co.uk
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

var ScrollFix = function(elem) {
	// Variables to track inputs
	var startX = startLeftScroll = deltaX = undefined,

	elem = elem || elem.querySelector(elem);

	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startX = event.touches[0].pageX;
		startLeftScroll = elem.scrollLeft;

		if(startLeftScroll <= 0)
			elem.scrollLeft = 1;

		if(startLeftScroll + elem.offsetWidth >= elem.scrollWidth)
			elem.scrollLeft = elem.scrollWidth - elem.offsetWidth - 1;
	}, false);
};