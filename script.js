const unorderdList = document.querySelector("ul");
const inputUser = document.querySelector("input");
const buttomPress = document.querySelector("button");

buttomPress.addEventListener("click", () => {
  // console.log("clicked");
  let currentInput = inputUser.value; // store the current input value
  // console.log(currentInput);

  if (currentInput) {
    // create the list item, span, button elements
    const itemList = document.createElement("li");
    const spanList = document.createElement("span");
    const newButton = document.createElement("button");

    //set text content for span and button
    spanList.textContent = currentInput; //set the span text to the input value
    newButton.textContent = "Delete"; //set button text

    // append the span and button to the list item
    itemList.appendChild(spanList);
    itemList.appendChild(newButton);

    // append the list item to the unorderd list
    unorderdList.appendChild(itemList);

    // clear the input field
    inputUser.value = "";

    //focus the input field for the next item
    inputUser.focus();

    //add event listener to delete button to remove the item
    newButton.addEventListener("click", () => {
      unorderdList.removeChild(itemList);
    });
  }
});
