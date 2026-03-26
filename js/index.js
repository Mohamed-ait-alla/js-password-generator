const	numberInput = document.getElementById("passlen-number");
const	rangeInput = document.getElementById("passlen-range");

const	lengthInput = document.getElementById("passlen-number");
const	generateBtn = document.getElementById("generate-btn");

const	uppercaseCheckbox = document.querySelector('input[name="uppercase"]');
const	lowercaseCheckbox = document.querySelector('input[name="lowercase"]');
const	numbersCheckbox = document.querySelector('input[name="numbers"]');
const	symbolsCheckbox = document.querySelector('input[name="symbols"]');

const	passwordGeneratedBtn = document.getElementById("generated-password");
const	copyIcon = document.querySelector(".copy-icon");


// update number input when range get updated
rangeInput.addEventListener("input", () => {
	numberInput.value = rangeInput.value;
});

// update range input when number input get updated
numberInput.addEventListener("blur", () => {
	let val = parseInt(numberInput.value, 10);

	if (isNaN(val)) 
		val = 8;
	if (val < 8)
		val = 8;
	if (val > 25)
		val = 25;

	numberInput.value = val;
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

	let finalGeneratedPass = passwordGenerated.sort(() => Math.random() - 0.5).join("");

	passwordGeneratedBtn.value = finalGeneratedPass;

	console.log("pass generated is: ", finalGeneratedPass);
});

// Copy the generated password into clipboard
copyIcon.addEventListener("click", async () => {
  const password = passwordGeneratedBtn.value;

  if (!password) return;

  try {
    await navigator.clipboard.writeText(password);

    // feedback
    copyIcon.style.fill = "green";

    setTimeout(() => {
      copyIcon.style.fill = "";
    }, 1500);

  } catch (err) {
    console.error("Copy failed:", err);
  }
});