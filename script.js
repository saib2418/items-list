//selecting elemnts we are interested in from HTML
let input = document.getElementById("userinput");
let enterButton = document.getElementById("enter");
let ul = document.querySelector("ul");

function createListElement() {
  //How do i add what the user types in to the end of this list?
  //add a new <ul> element
  let li = document.createElement("li");
  //add a text in the <uL> element which reads: testing
  li.appendChild(document.createTextNode(input.value));
  //grab the ul element and append our new list item to it
  ul.appendChild(li);
  //resets our input value
  input.value = "";
}

function addListAfterClick() {
  if (input.value.length > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (input.value.length > 0 && event.keyCode == 13) {
    createListElement();
  }
}

//clicking entter
enterButton.addEventListener("click", addListAfterClick);

//pressing enter key
input.addEventListener("keypress", addListAfterKeyPress);

//when the list item is clicked
//when the list item is clicked
let list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (e) {
    list[i].classList.toggle("done");
    let button = document.createElement("BUTTON");
    let text = document.createTextNode("delete!");
    button.appendChild(text);
    list[i].appendChild(button);
    button.addEventListener("click", () => list[i].remove());
  });
}
