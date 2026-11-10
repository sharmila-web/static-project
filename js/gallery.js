const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closeBtn = document.getElementById("close-btn");
const cards = document.querySelectorAll(".card");

// popup and show it
function openPopup(card) {
  const details = card.querySelector("template").content.cloneNode(true);//template la erukura content ya access pannudhu, cloneNode ---node ya copy seira oru method//trude nu kudutha deep copy false kudutha element mattum copy agum not child elements.
  popupBody.replaceChildren(details);//remove old children add nee children
  popup.showModal();//html element dialog method. used to open popup
  popup.scrollTop = 0;
}


// pop up open
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    openPopup(card);
  });
});//page la erukura yellataium one by one check pandradhukagaloop use pannierukom


// Close btn
closeBtn.addEventListener("click", function () {
  popup.close();//popup close
});
popup.addEventListener("click", function (event) {
  if (event.target === popup) popup.close();
});


