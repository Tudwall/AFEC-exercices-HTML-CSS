const form = document.querySelector("form");
const surnameEl = document.getElementById("surname");
const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const emailEl = document.getElementById("email");
const infoEl = document.getElementById("info");
const submitBtn = document.getElementById("submit");

const isRequired = (value) => {
	value === "" ? false : true;
};

const isBetween = (length, min, max) => {
	length < min || length > max ? false : true;
};

const isEmailValid = (email) => {
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return regex.test(email);
};

const isAgeValid = (age) => {
	age !== Math.floor(age) ? false : true;
};

const showError = (input, message) => {
	const formField = input.parentElement;
	formField.style.border = "2px solid red";

	infoEl.textContent = message;
};

const showSuccess = (input) => {
	const formField = input.parentElement;
	formField.style.border = "2px solid green";

	infoEl.textContent = "succès";
};

const checkName = () => {
	let valid = false;
	const min = 2;
	const max = 30;
	const name = nameEl.value.trim();

	if (!isRequired(name)) {
		showError(nameEl, "Le nom est requis");
	} else if (!isBetween(name.length, min, max)) {
		showError(nameEl, "Le nom doit être compris entre 2 et 30 caractères");
	} else {
		showSuccess(nameEl);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = emailEl.value.trim();

	if (!isRequired(email)) {
		showError(emailEl, "Une adresse email est requise");
	} else if (!isEmailValid(email)) {
		showError(emailEl, "L'email doit être valide");
	} else {
		showSuccess(emailEl);
		valid = true;
		return valid;
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let isNameValid = checkName();
	let isEmailValid = checkEmail();
	let isAgeValid = isAgeValid();

	let isFormValid = isNameValid && isEmailValid && isAgeValid;

	if (isFormValid) {
		infoEl.textContent = "formulaire envoyé";
	}
});
