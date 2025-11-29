const scene = document.querySelector(".scene");
const flashlight = document.getElementById("flashlight");
const items = document.querySelectorAll(".items__list-item");
console.log(scene, flashlight);
scene.addEventListener("mousemove", function (event) {
  const rect = scene.getBoundingClientRect();
  let cursorX = event.clientX;
  let cursorY = event.clientY;
  let x = cursorX - rect.left;
  let y = cursorY - rect.top;
  flashlight.style.left = `${x}px`;
  flashlight.style.top = `${y}px`;

  let currentItem = document.elementFromPoint(cursorX, cursorY);
  let card = currentItem.closest(".items__list-item");
  console.log(card);
  items.forEach((item) => {
    item.classList.remove("item__active");
  });
  if (card) {
    card.classList.add("item__active");
  }
});
