function octoSytem() {
  let cosButtons = [];

  function handleMouseDown(downEvent) {
    const buttonEl = downEvent.target;
    const buttonIndex = parseInt(buttonEl.getAttribute("data-index"), 10);
    let mouseMoved = false;
    console.log("mouse went down", downEvent);
    buttonEl.onmousemove = function(moveEvent) {
      console.log("mouse moved", moveEvent);
      mouseMoved = true;

      buttonEl.style.position = "fixed";
      buttonEl.style.top = moveEvent.y - 10;
      buttonEl.style.left = moveEvent.x - 10;
    };
    buttonEl.onmouseup = function(upEvent) {
      if (mouseMoved) {
        buttonEl.onmousedown = undefined;
        cosButtons = cosButtons.filter(function(btn, index) {
          console.log(buttonIndex, index);
          return buttonIndex !== index;
        });
      }
      console.log("mouse went up", cosButtons, upEvent);
      buttonEl.onmousemove = undefined;
      buttonEl.onmouseup = undefined;
      renderButtons();
    };
  }

  const renderButtons = function() {
    const btnContainerEl = document.getElementById("button-container");
    // clear it out.
    btnContainerEl.innerHTML = "";

    for (let i = 0; i < cosButtons.length; i++) {
      const buttonName = cosButtons[i];
      const buttonEl = document.createElement("button");
      buttonEl.innerHTML = buttonName;
      buttonEl.setAttribute("data-index", i);

      btnContainerEl.append(buttonEl);

      buttonEl.onmousedown = handleMouseDown;
    }
  };

  function createButton() {
    const newInputEl = document.getElementById("new-input");
    const newButtonName = newInputEl.value;
    if (cosButtons.length > 7) {
      alert("you need to delete one first.");
      return;
    }
    cosButtons.push(newButtonName);

    renderButtons();
  }

  return createButton;
}

const createButton = octoSytem();
