// Get all buttons with the class "myBtn"
var btns = document.querySelectorAll(".myBtn");

// Get all modals
var modals = document.querySelectorAll(".modal");

// Get all the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// Attach event listeners to each button
btns.forEach((btn, index) => {
  btn.onclick = function () {
    modals[index].style.display = "block"; // Show the corresponding modal
  };
});

// Attach event listeners to each close button (span)
spans.forEach((span, index) => {
  span.onclick = function () {
    modals[index].style.display = "none"; // Close the corresponding modal
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};