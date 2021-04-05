import data from "../js/reviews-data.json";
import template from "../template/reviews.hbs";

const tabContentBottom = document.querySelector(".tab-content__bottom");
const reviewsList = tabContentBottom.querySelector(".reviews__list");
const showMoreButton = tabContentBottom.querySelector(".main-button");
const showAllReviewsButton = document.querySelector(
  "[data-reviews-button-path]"
);

// // подгрузка новых отзывов +2 при клике на reviews__button
let indexReviewsMain = 0;
let countReviewsMain = 2;

const createReviews = (index, count) => {
  const getReviews = data.slice(index, count);
  const reviewsMarkup = template(getReviews);

  reviewsList.insertAdjacentHTML("beforeend", reviewsMarkup);
};
createReviews(indexReviewsMain, countReviewsMain);

const handleMoreReviews = (e) => {
  indexReviewsMain += 2;
  countReviewsMain += 2;
  const getReviews = data.slice(indexReviewsMain, countReviewsMain);
  const reviewsMarkup = template(getReviews);

  reviewsList.insertAdjacentHTML("beforeend", reviewsMarkup);

  if (countReviewsMain >= data.length) {
    showMoreButton.disabled = true;
    showAllReviewsButton.disabled = true;
  }
};
showMoreButton.addEventListener("click", handleMoreReviews);

// // подгрузка всех отзывов приклике на  "Все отзывы"

const showAllReviews = (e) => {
  const showItem = Array.from(
    tabContentBottom.querySelectorAll(".reviews__item")
  ).length;
  indexReviewsMain === 0
    ? createReviews(showItem, data.length)
    : createReviews(showItem, data.length);

  countReviewsMain = showItem;

  showMoreButton.disabled = true;
  showAllReviewsButton.disabled = true;
};
showAllReviewsButton.addEventListener("click", showAllReviews);

// //  ======= отзывы tab

const tabsReviews = document.querySelector("[data-tab-reviews]");
const reviewsListTabs = tabsReviews.querySelector(".reviews__list");
const getTabReviews = data.slice(0, data.length);
const reviewsTabMarkup = template(getTabReviews);
reviewsListTabs.insertAdjacentHTML("afterbegin", reviewsTabMarkup);
