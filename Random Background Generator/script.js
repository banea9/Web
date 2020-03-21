
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGeneratorBtn = document.getElementById("randomColorBtn");



function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let arrOfColors = [];
	let color = '#';
	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 6; j++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		arrOfColors.push(color);
		color = '#';
		if(i === 1) {
			body.style.background = `linear-gradient(to right, ${arrOfColors[0]}, ${arrOfColors[1]})`;
			css.textContent = body.style.background + ";";
			arrOfColors.length = 0;

		}
	}
}
randomGeneratorBtn.addEventListener("click", getRandomColor)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


