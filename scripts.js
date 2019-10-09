function octoSytem() {
  const cosButtons = [];

  function createButton() {
    const newInputEl = document.getElementById("new-input");
    const newButtonName = newInputEl.value;
    if (cosButtons.length > 7) {
      alert("you need to delete one first.");
      return;
    }
    cosButtons.push(newButtonName);

    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = newButtonName;

    const btnContainerEl = document.getElementById("button-container");
    btnContainerEl.append(buttonEl);
  }

  return createButton;
}

const createButton = octoSytem();
