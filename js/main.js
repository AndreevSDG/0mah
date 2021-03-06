$(document).ready(function () {
	let flag = false;
	$('.header__menu-falling').click(function () {
		if (!flag) {
			$('.header__menu-falling--active').slideDown();
			$('.header__menu-falling-arrow').css('transform', 'rotate(180deg)');

		} else {
			$('.header__menu-falling--active').slideUp();
			$('.header__menu-falling-arrow').css('transform', 'rotate(0deg)');

		}
		flag = !flag;
	});
	let flagMenu = false;
	$('.header__burger').click(function () {
		if (!flagMenu) {
			$('.header__burger--active').css('display', 'block');
			$('.header__burger-icon').css('display', 'none');
			$('.header__burger-icon-close').css('display', 'block');

		} else {
			$('.header__burger--active').css('display', 'none');
			$('.header__burger-icon').css('display', 'block');
			$('.header__burger-icon-close').css('display', 'none');

		}
		flagMenu = !flagMenu;
	});
	let flagBurgerFalling = false;
	$('.header__burger-falling').click(function () {
		if (!flagBurgerFalling) {
			$('.header__burger-falling--active').slideDown();
			$('.header__burger-falling-arrow').css('transform', 'rotate(180deg)');

		} else {
			$('.header__burger-falling--active').slideUp();
			$('.header__burger-falling-arrow').css('transform', 'rotate(0deg)');

		}
		flagBurgerFalling = !flagBurgerFalling;
	});
	$(document).mouseup(function (e) {
		let lunge = $('#lunge');
		if (!lunge.is(e.target) && lunge.has(e.target).length === 0) {
			lunge.slideUp();
			$('.header__menu-falling-arrow').css('transform', 'rotate(0deg)');
			//Закрытие меню бургер
			$('.header__burger--active').css('display', 'none');
			$('.header__burger-icon').css('display', 'block');
			$('.header__burger-icon-close').css('display', 'none');
		}
	});
	$(document).on('keyup', function (e) {
		if (e.key == "Escape") {
			$('#lunge').slideUp();
			$('.header__menu-falling-arrow').css('transform', 'rotate(0deg)');
			//Закрытие меню бургер
			$('.header__burger--active').css('display', 'none');
			$('.header__burger-icon').css('display', 'block');
			$('.header__burger-icon-close').css('display', 'none');
		}
	});
});

function slowScroll(id) {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 1000);
	return false;
}