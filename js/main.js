$(function() {
	$(window).on("click", function() {
		$('#main-nav').addClass('change-nav');
		$('#main-content').css('display', 'block')
	})
	
	$(window).scroll(function() {
		if( $(window).scrollTop() > 200 ) {
			$('#back2top').fadeIn(600);
		} else {
			$('#back2top').fadeOut(600);
		}
	});
	$('#back2top').on('click', function() {
		$('body').animate({"scrollTop": "0"}, 200);
	})
	
})