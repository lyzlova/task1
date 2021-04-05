const tabContentBottom = document.querySelector(".tab-content__bottom");
const characteristicsLabelList = Array.from(
  tabContentBottom.querySelectorAll(".characteristics-full__item")
);
const buttonsGroup = document.querySelector(
  "[ data-characteristics-button-path]"
);

const hiddenCharacteristics = characteristicsLabelList.slice(
  3,
  characteristicsLabelList.length
);


buttonsGroup.addEventListener("click", hadleToggle);

function hadleToggle(e) {
  buttonsGroup.classList.toggle("is-open");

  characteristicsLabelList.forEach((item) => {
    if (item.classList.contains("vissualy-hidden")) {
      item.classList.remove("vissualy-hidden");
    }
  });

  if (!this.classList.contains("is-open")) {
    hiddenCharacteristics.forEach((item) => {
      item.classList.add("vissualy-hidden");
    });

  }
}

