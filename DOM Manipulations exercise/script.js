var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll('li')

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  createDeleteButton(li);
  ul.appendChild(li);
  input.value = "";
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

function toggleDoneClass(event) {
  event.target.classList.toggle("done");
}

function createDeleteButton(listItem) {
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener('click', function(event) {
  	event.target.parentNode.remove()
  });
  listItem.appendChild(delBtn)
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', toggleDoneClass);
listItems.forEach(el => createDeleteButton(el));
