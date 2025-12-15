const	numberInput = document.getElementById("passlen-number");
const	rangeInput = document.getElementById("passlen-range");

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