import data from "../js/reviews-data";

//  ======= отзывы main content

const aboutProductRight = document.querySelector(".about-product__right");
const amountReviewsAll = aboutProductRight.querySelectorAll(".count");
Array.from(amountReviewsAll).map((obj) => (obj.textContent = data.length));

// подгрузка отзывов только первых двух
let countReviewsMain = 2;
let indexReviewsMain = 0;

const reviewsList = aboutProductRight.querySelectorAll(".reviews__list");
const showMoreButton = aboutProductRight.querySelector(".reviews__show-more");

function addReviews(obj) {
  const li = `
<li class="reviews__item comment">
   <div class="comment__header">
      <p class="comment__author">${obj.name}  &#47;<time class="comment__time">${obj.data}</time></p>
      <div class="goods__rating">
          <svg class="goods__icon icon-stars" width="111" height="17">
              <use href="./images/symbol-defs.svg#icon-${obj.stars}-stars"></use>
          </svg>
      </div>
   </div>
   <p class="comment__text">${obj.text}</p>
</li>
`;
  return li;
}

function createReviews(index, count, elem) {
  const markup = createReviewsList(data);

  function createReviewsList(data) {
    return data
      .slice(index, count)
      .map((obj) => addReviews(obj))
      .join("");
  }
  Array.from(elem).map((obj) => obj.insertAdjacentHTML("beforeend", markup));
}

createReviews(indexReviewsMain, countReviewsMain, reviewsList);

// подгрузка новых отзывов +2 при клике на reviews__button

function handleMoreReviews(e) {
  if (e.target.nodeName === "BUTTON") {
    countReviewsMain += 2;
    indexReviewsMain += 2;

    const addMarkup = createReviewsList(data);
    function createReviewsList(data) {
      return data
        .slice(indexReviewsMain, countReviewsMain)
        .map((obj) => addReviews(obj))
        .join("");
    }

    const prevElemByClickMore = e.target.previousElementSibling;

    prevElemByClickMore.insertAdjacentHTML("beforeend", addMarkup);

    if (countReviewsMain === data.length || countReviewsMain > data.length) {
      this.classList.add("vissualy-hidden");
    }
  }
}

showMoreButton.addEventListener("click", handleMoreReviews);

// подгрузка всех отзывов приклике на  "Все отзывы"

const showAllReviewsButton = document.querySelector(".reviews__button");

showAllReviewsButton.addEventListener("click", showAllReviews);

function showAllReviews(e) {
  createReviews(indexReviewsMain, data.length - indexReviewsMain, reviewsList);
  showMoreButton.disabled = true;
  showAllReviewsButton.disabled = true;
}

//  ======= отзывы tab

const tabs = document.querySelector(".tab-4");
const reviewsListTabs = tabs.querySelectorAll(".reviews__list");

createReviews(0, data.length, reviewsListTabs);
