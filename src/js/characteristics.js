const aboutProductLeft = document.querySelector(".about-product__left");
const showMoreButton = aboutProductLeft.querySelector(".characteristics__button");
const characteristicsLabelList = Array.from(
  aboutProductLeft.querySelectorAll(".characteristics-full__item")
);

const hiddenCharacteristics = characteristicsLabelList.slice(
  3,
  characteristicsLabelList.length
);

showMoreButton.addEventListener("click", addNewCharacteristics);

function addNewCharacteristics(e) {
  if (e.target.nodeName === "SPAN") {
    characteristicsLabelList.forEach((item) => {
      if (item.classList.contains("vissualy-hidden")) {
        item.classList.remove("vissualy-hidden");
      }
    });

    this.classList.toggle("open");
  }

  if (this.classList.contains("open")) {
    e.target.textContent = "Скрыть";
  } else {
    e.target.textContent = "Все характеристики";
    hiddenCharacteristics.forEach((item) => {
      item.classList.add("vissualy-hidden");
    });
  }
}
