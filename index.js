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
	const	lowerCasePool = "abcdefghiklmnopqrstvxyz";
	const	numbersPool = "0123456789";
	const	symbolsPool = "!@#$%&*()?.";

	let passwordGenerated  = [];
	let allChars = "";

	if (useUppercase)
	{
		allChars += upperCasePool;
		passwordGenerated.push(upperCasePool[Math.floor(Math.random() * upperCasePool.length)]);
	}
	if (useLowercase)
	{
		allChars += lowerCasePool;
		passwordGenerated.push(lowerCasePool[Math.floor(Math.random() * lowerCasePool.length)]);
	}
	if (useNumbers)
	{
		allChars += numbersPool;
		passwordGenerated.push(numbersPool[Math.floor(Math.random() * numbersPool.length)]);
	}
	if (useSymbols)
	{
		allChars += symbolsPool;
		passwordGenerated.push(symbolsPool[Math.floor(Math.random() * symbolsPool.length)]);
	}

	while(passwordGenerated.length < passlength)
	{
		passwordGenerated.push(allChars[Math.floor(Math.random() * allChars.length)]);
	}

	console.log("pass generated is: ", passwordGenerated.sort(() => Math.random() - 0.5).join(""));
});