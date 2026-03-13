 var $doc = jQuery(document);
 $win = jQuery(window);
 function isInView(elem) {
        return ((jQuery(elem).offset().top) - $win.height()) < ($win.scrollTop());
}
$doc.ready(function () {
	jQuery('.lazyScroll').each(function() {
        if (isInView(jQuery(this))) {
            jQuery(this).addClass('lazyLoad');
            jQuery(this).css("opacity", "1");
        }
    })
    jQuery('.lazyScrollDelay').each(function() {
        if (isInView(jQuery(this))) {
            jQuery(this).addClass('lazyLoadDelay');
            jQuery(this).css("opacity", "1");

        }
    })
	$('#back-to-top').click(function() {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$(".carousel").swipe({
		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
		if (direction == 'left') $(this).carousel('next');
		if (direction == 'right') $(this).carousel('prev');
		},
		allowPageScroll: "vertical"
	});
 });

$win.on('scroll', function() {
    jQuery('.lazyScroll').each(function() {
        if (isInView(jQuery(this))) {
            jQuery(this).addClass('lazyLoad');
            jQuery(this).css("opacity", "1");
        }
    })
    jQuery('.lazyScrollDelay').each(function() {
        if (isInView(jQuery(this))) {
            jQuery(this).addClass('lazyLoadDelay');
            jQuery(this).css("opacity", "1");

        }
    })
});

$('#yourElement').addClass('animated bounceOutLeft');

var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$('#yourElement').one(animationEnd, doSomething);

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

$('#yourElement').animateCss('bounce');