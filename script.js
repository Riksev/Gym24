function burgerMenu() {
	document.querySelector('.burger').classList.toggle('active');
	document.querySelector('.nav').classList.toggle('openBurger');
}

function toggleContactOverlay() {
	buttonAnimation();
	document.querySelector('.overlay_contact').classList.toggle('openContact');
	document.querySelector('body').classList.toggle('showBody');
}

function toggleModalCalculator() {
	buttonAnimation();
	document.querySelector('.modal_calculator').classList.toggle('openCalculator');
	document.querySelector('body').classList.toggle('showBody');
}

function contactOverlay() {
	var modalAnime;
	if (document.querySelector('.overlay_contact').classList.contains('openContact')) { 
		modalAnime = anime ({
			targets: '.contact_container',
			opacity: [{ value: [1, 0], duration: 750, easing: 'linear' }],
			duration: 250,
			easing: 'linear',
			autoplay: false,
			complete: function(anim) {
				toggleContactOverlay();
			}
		});
	}
	else {
		modalAnime = anime ({
			targets: '.contact_container',
			opacity: [{ value: [1, 0], duration: 750, easing: 'linear' }],
			duration: 500,
			easing: 'linear',
			translateY: 300,
			autoplay: false,
			direction: 'reverse',
			begin: function(anim) {
				toggleContactOverlay();
			}
		});
	}
	modalAnime.play();
}

function checkContactForm() {
	buttonAnimation();
	form = document.querySelector('.contact_form');
	let string = '';
	var nameRE = /^[a-zA-Z]{1,}$/;
	if (!form.name.value.match(nameRE)) string += '\nOnly letters are allowed in name or name is empty!';
	var surnameRE = /^[a-zA-Z]{1,}$/;
	if (!form.surname.value.match(surnameRE)) string += '\nOnly letters are allowed in surname or surname is empty!';
	var emailRE = /^[0-9a-z_]+@[0-9a-z_^.]+.[a-z]{2,}$/;
	if (!form.email.value.match(emailRE)) string += '\nThe e-mail format should look like ******@****.****!';
	var phoneRE = /^\(\d{3}\)\d{7}$/;
	if (!form.phone.value.match(phoneRE)) string += '\nThe phone number format should look like (XXX)XXXXXXX!';
	var commentRE = /^.{20,}$/;
	if (!form.comment.value.match(commentRE)) string += '\nComment has to contain at least 20 symbols!';
	if (string == '') {
		alert('Form has been sent successfully!');
		location.href='#home';
		return true;
	}
	else {
		alert('Form contain next mistakes:' + string);
		return false;
	}
}

function modalCalculator() {
	var modalAnime;
	if (document.querySelector('.modal_calculator').classList.contains('openCalculator')) { 
		modalAnime = anime ({
			targets: '.calculator_container',
			opacity: [{ value: [1, 0], duration: 750, easing: 'linear' }],
			duration: 250,
			easing: 'linear',
			autoplay: false,
			complete: function(anim) {
				toggleModalCalculator();
			}
		});
	}
	else {
		modalAnime = anime ({
			targets: '.calculator_container',
			opacity: [{ value: [1, 0], duration: 750, easing: 'linear' }],
			duration: 500,
			easing: 'linear',
			translateY: 300,
			autoplay: false,
			direction: 'reverse',
			begin: function(anim) {
				toggleModalCalculator();
			}
		});
	}
	modalAnime.play();
}

function nextSlide() {
	showSlides(slideIndex += 1);
}

function previousSlide() {
	showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
			slideIndex = slides.length
	}
	for (let slide of slides) {
			slide.style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";    
}

function buttonAnimation() {
	blockMove.restart();
}

function buttonDetailed() {
	buttonAnimation();
	location.href='#membership';
}

function calculateWaterRate(checkbox) {
	var weight_slider = document.getElementById('weight_slider');
	var activity_slider = document.getElementById('activity_slider');
	var gender_checkbox = document.getElementById('gender_checkbox');
	var coffee_checkbox = document.getElementById('coffee_checkbox');
	var alchohol_checkbox = document.getElementById('alchohol_checkbox');
	var sunny_checkbox = document.getElementById('sunny_checkbox');
	var protein_checkbox = document.getElementById('protein_checkbox');
	var pregnancy_checkbox = document.getElementById('pregnancy_checkbox');
	var feeding_checkbox = document.getElementById('feeding_checkbox');
	var sick_checkbox = document.getElementById('sick_checkbox');
	if (checkbox != '') {
		var current_checkbox = document.getElementById(checkbox);
		if (checkbox == 'gender_checkbox') {
			const answers_female = document.getElementsByClassName('answer_female');
			if (current_checkbox.value == 'check') {
				for (let i = 0; i < answers_female.length; i++) {
					answers_female[i].style.display = 'none';
				}
			} else {
				for (let i = 0; i < answers_female.length; i++) {
					answers_female[i].style.display = 'flex';
				}
			}
		}
		if (current_checkbox.value == 'check') current_checkbox.value = 'uncheck';
		else current_checkbox.value = 'check';
	}
	let water_rate = 0.5;
	water_rate *= weight_slider.value / weight_slider.min;
	if (gender_checkbox.value == 'uncheck') water_rate *= 1.057;
	water_rate += (activity_slider.value - activity_slider.min) * 0.28;
	if (coffee_checkbox.value == 'uncheck') water_rate += 0.2;
	if (alchohol_checkbox.value == 'uncheck') water_rate += 0.3;
	if (sunny_checkbox.value == 'uncheck') water_rate *= 1.2;
	if (protein_checkbox.value == 'uncheck') water_rate *= 1.13;
	if (gender_checkbox.value == 'check') {
		if (pregnancy_checkbox.value == 'uncheck') water_rate *= 1.25;
		if (feeding_checkbox.value == 'uncheck') water_rate *= 1.4;
	}
	if (sick_checkbox.value == 'uncheck') water_rate *= 1.166;
	var water_rate_label = document.getElementById('water_rate_label');
	water_rate_label.innerHTML = 'Your recommended amount:<br>' + water_rate.toFixed(1) +' liters of water per day';;
}
