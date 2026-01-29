const	numberInput = document.getElementById("passlen-number");
const	rangeInput = document.getElementById("passlen-range");

const	lengthInput = document.getElementById("passlen-number");
const	generateBtn = document.getElementById("generate-btn");

const	uppercaseCheckbox = document.querySelector('input[name="uppercase"]');
const	lowercaseCheckbox = document.querySelector('input[name="lowercase"]');
const	numbersCheckbox = document.querySelector('input[name="numbers"]');
const	symbolsCheckbox = document.querySelector('input[name="symbols"]');


// update number input when range get updated
rangeInput.addEventListener("input", () => {
	numberInput.value = rangeInput.value;
});

// update range input when number input get updated
numberInput.addEventListener("input", () => {
	let val = numberInput.value;

	if (val < 8)
		val = 8;
	if (val > 25)
		val = 25;

	rangeInput.value = val;
});


// make the upper case checkbox always checked
uppercaseCheckbox.addEventListener('change', (e) => {
	e.target.checked = true;	
})


// generate the random password password
generateBtn.addEventListener("click", () => {
	var	passlength = parseInt(lengthInput.value, 10);
	if (isNaN(passlength) || passlength < 8)
		passlength = 8;

	const	useUppercase = uppercaseCheckbox.checked;
	const 	useLowercase = lowercaseCheckbox.checked;
	const	useNumbers = numbersCheckbox.checked;
	const	useSymbols = symbolsCheckbox.checked;

	const	upperCasePool = "ABCDEFGHIKLMNOPQRSTVXYZ";
	if (useLowercase)
		var lowerCasePool = "abcdefghiklmnopqrstvxyz";
	if (useNumbers)
		var numbersPool = "0123456789";
	if (useSymbols)
		var symbolsPool = "!@#$%&*()?."


	console.log("length is: ", passlength);
	console.log("use Uppercase: ", useUppercase);
	console.log("use Lowercase: ", useLowercase);
	console.log("use numbers: ", useNumbers);
	console.log("use symbols: ", useSymbols);
});