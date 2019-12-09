var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let li = document.querySelectorAll('li');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleClass);

	li.appendChild(createDeleteButton())

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass(event) {
	event.target.classList.toggle("done");
}

function createDeleteButton() {
	var btn = document.createElement('button');
	btn.textContent = 'Delete'
	btn.style.display = 'inline-block';
	btn.addEventListener("click", deleteListItem)
	return btn;

}
function deleteListItem(event) {
	event.target.parentNode.remove();
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(element => {
	element.appendChild(createDeleteButton());
	element.addEventListener("click", toggleClass)
});

