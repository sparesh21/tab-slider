$(document).ready(function() {
	$('.tab-btn li a').on('click', function(event) {
		getParam = $(this).data('param');
		console.log(getParam);
		$('.tab-pane').hide();
		$('.' + getParam).show();
		setTimeout(function() {
			$('.slider-list').slick('reinit');
		}, 100);


	});



	$('.slider-list').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1
	});

});