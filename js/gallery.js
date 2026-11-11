const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closeBtn = document.getElementById("close-btn");
const cards = document.querySelectorAll(".card");

// popup and show it
function openPopup(card) {
  const details = card.querySelector("template").content.cloneNode(true);
  popupBody.replaceChildren(details);
  popup.showModal();
  popup.scrollTop = 0;
}


// pop up open
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    openPopup(card);
  });
});


// Close btn
closeBtn.addEventListener("click", function () {
  popup.close();//popup close
});
popup.addEventListener("click", function (event) {
  if (event.target === popup) popup.close();
});


