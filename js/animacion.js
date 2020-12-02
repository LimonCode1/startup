$(document).ready(() => {
	// para realizar scrool del menu a los elementos de la pagina
	var product = $('#products').offset().top;
	var price = $('#price').offset().top;
	var contact = $('#contact').offset().top;

	$('#btn-products').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: product - 1,
			},
			600
		);
	});
	$('#btn-price').on('click', (e) => {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: price - 1,
			},
			600
		);
	});
	$('#btn-contact').on('click', (e) => {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: contact - 1,
			},
			600
		);
	});
});
