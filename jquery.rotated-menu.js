;(function ($)
{
	$.fn.rotatedmenu = function(speed) {

		if(!(speed)){
			speed = 0.5;
		} else {
			speed = speed / 100;
		}
		console.log(speed);
		var rotatedmenu = this.first();
		rotatedmenu.init = function() {

			var top = rotatedmenu.find('.top').html();
			var front = rotatedmenu.find('.front').html();

			rotatedmenu.stop().addClass('.top-menu-hoverer');
			rotatedmenu.append('<div class="hoverer"></div>');

			rotatedmenu.find('.hoverer').css({'transition': 'transform '+speed+'s'})
				.append('<div class="hoverer-front hoverer-side"></div>')
				.append('<div class="hoverer-top hoverer-side"></div>');

			rotatedmenu.find('.hoverer-top').append(top);
			rotatedmenu.find('.hoverer-front').append(front);

			rotatedmenu.find('.front').remove();
			rotatedmenu.find('.top').remove();

			rotatedmenu.hover(function(){
				rotatedmenu.find('.hoverer').stop().css({'transform':  'rotateX(-90deg)'}).addClass('on');
			}, function(){
				rotatedmenu.find('.hoverer').stop().css({'transform':  'rotateX(0deg)'}).removeClass('on');
			});

		};
		rotatedmenu.init();
	};
})(jQuery);











