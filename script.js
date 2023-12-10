function burgerMenu() {
	document.querySelector('.burger').classList.toggle('active');
	document.querySelector('.nav').classList.toggle('openBurger');
}

function toggleContactOverlay() {
	buttonAnimation();
	document.querySelector('.overlay_contact').classList.toggle('openContact');
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
