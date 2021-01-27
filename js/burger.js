$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu,.logo').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__li').click(function (event) {
		$('.header__burger,.header__menu,.logo').removeClass('active');
		$('body').removeClass('lock');
	});

	$('.header__logo').click(function (event) {
		$('.header__burger,.header__menu,.logo').removeClass('active');
		$('body').removeClass('lock');
	});

});