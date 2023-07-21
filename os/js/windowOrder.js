// Function to bring the clicked div to the front

function windowOrder(window) {
  // Find all div elements with class "box"
  const allWindows = document.getElementsByClassName("window");

  // Set the clicked div's z-index to the highest value
  window.style.zIndex = getHighestZIndex(allWindows) + 1;
}

// Function to get the highest z-index value among the divs
function getHighestZIndex(windows) {
  let highestZIndex = 5;
  for (let i = 0; i < windows.length; i++) {
    const zIndex = parseInt(windows[i].style.zIndex, 10);
    if (!isNaN(zIndex) && zIndex > highestZIndex) {
      highestZIndex = zIndex;
    }
  }
  return highestZIndex;
}