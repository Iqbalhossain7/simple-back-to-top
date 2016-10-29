/*plugin by iqbal hossain. easy back to top jquery plugin. version: 1.0*/
(function($) {
	$.fn.backtoTop = function(options){
		var this_ = this;
		var settings = $.extend({
			'position' : 400,
            'ShowHide' : 500,
			'speed'	   : 500
		}, options);

		// settings...
		var position = settings['position'];
        var ShowHide = settings['ShowHide'];
		var speed = settings['speed'];

		// css botton...
		this_.css({
			'position' : 'fixed',
			'bottom'   : '50px',
			'right'    : '50px',
			'display'  : 'none'
		});

		// scroll functions....
		$(document).scroll(function(){
			var scroll_pos = $(window).scrollTop();
			if (scroll_pos >= position) {
				this_.fadeIn(ShowHide);
			} else {
				this_.fadeOut(ShowHide);
			}
		});

        this_.click(function(t) {
            $("html, body").animate({
                scrollTop: 0
            },speed);
        })


	}
})(jQuery);
