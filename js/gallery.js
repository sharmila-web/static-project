// Get the elements we need from the page
const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closeBtn = document.getElementById("close-btn");
const cards = document.querySelectorAll(".card");

// Copy the clicked card's hidden details into the popup and show it
function openPopup(card) {
  const details = card.querySelector("template").content.cloneNode(true);
  popupBody.replaceChildren(details);
  popup.showModal();
  popup.scrollTop = 0;
}

// Every card opens its own details (mouse click or Enter key)
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    openPopup(card);
  });
  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter") openPopup(card);
  });
});

// Close with the X button or by clicking the dark area outside
closeBtn.addEventListener("click", function () {
  popup.close();
});
popup.addEventListener("click", function (event) {
  if (event.target === popup) popup.close();
});
