(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1yq1":function(e,t){$(".js-accordion-header").click((function(){$(this).toggleClass("open"),$(this).next(".js-accordion-body").toggleClass("vissualy-hidden"),$(this).hasClass("open")&&($(".js-accordion-header").not(this).removeClass("open"),$(this).next(".js-accordion-body").removeClass("vissualy-hidden"))}))},QfWi:function(e,t,s){"use strict";s.r(t);s("u0UJ"),s("RtS0"),s("3dw1");!function(){var e=document.querySelectorAll(".tabs__item"),t=document.querySelectorAll(".tab");function s(){e.forEach((function(e){e.classList.remove("is-active")})),this.classList.add("is-active"),function(e){t.forEach((function(t){t.classList.contains(e)?t.classList.add("is-active"):t.classList.remove("is-active")}))}(this.getAttribute("data-tab-name"))}e.forEach((function(e){e.addEventListener("click",s)}))}();s("1yq1"),s("4owi"),s("8cZI"),s("lmye"),s("WB5j"),s("D/wG"),s("WoWj");var n=[{id:1,name:"Плахова Карина",data:"21-05-2020",stars:4,text:"Покупка этой турбины была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато."},{id:2,name:"Рогозин Тимур",data:"17-05-2020",stars:4,text:"Покупка этой турбины была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! "},{id:3,name:"Олег Андрійчук",data:"12-03-2020",stars:5,text:"Гарно виглядає та зроблена з хорошого матеріалу. Дякую продавцю, швидко звязалися."},{id:4,name:"Ірина Осадча",data:"1-06-2020",stars:3,text:"Стараюсь покупать, когда на него скидки. Он действительно стоит своих денег"},{id:5,name:"Наталія",data:"25-01-2020",stars:2,text:"Мені дуже подобається ця турбіна, замовляю вже другий раз."},{id:6,name:"Роман Журавльов",data:"8-09-2019",stars:3,text:"Всё понравилось"}],i=document.querySelector(".about-product__right"),a=i.querySelectorAll(".count");Array.from(a).map((function(e){return e.textContent=n.length}));var o=2,r=0,c=i.querySelectorAll(".reviews__list"),l=i.querySelector(".reviews__show-more");function d(e){return'\n<li class="reviews__item comment">\n   <div class="comment__header">\n      <p class="comment__author">'+e.name+' / <time class="comment__time">'+e.data+'</time></p>\n      <div class="goods__rating">\n          <svg class="goods__icon icon-stars" width="111" height="17">\n              <use href="./images/symbol-defs.svg#icon-'+e.stars+'-stars"></use>\n          </svg>\n      </div>\n   </div>\n   <p class="comment__text">'+e.text+"</p>\n</li>\n"}function u(e,t,s){var i=n.slice(e,t).map((function(e){return d(e)})).join("");Array.from(s).map((function(e){return e.insertAdjacentHTML("beforeend",i)}))}u(r,o,c),l.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){var t=n.slice(r+=2,o+=2).map((function(e){return d(e)})).join("");e.target.previousElementSibling.insertAdjacentHTML("beforeend",t),(o===n.length||o>n.length)&&this.classList.add("vissualy-hidden")}}));var m=document.querySelector(".reviews__button");m.addEventListener("click",(function(e){u(r,n.length-r,c),l.disabled=!0,m.disabled=!0}));var v=document.querySelector(".tab-4").querySelectorAll(".reviews__list");u(0,n.length,v);var h=document.querySelector(".about-product__left"),p=h.querySelector(".characteristics__button"),f=Array.from(h.querySelectorAll(".characteristics-full__item")),w=f.slice(3,f.length);p.addEventListener("click",(function(e){"SPAN"===e.target.nodeName&&(f.forEach((function(e){e.classList.contains("vissualy-hidden")&&e.classList.remove("vissualy-hidden")})),this.classList.toggle("open"));this.classList.contains("open")?e.target.textContent="Скрыть":(e.target.textContent="Все характеристики",w.forEach((function(e){e.classList.add("vissualy-hidden")})))}));s("zxXb")},u0UJ:function(e,t,s){},zxXb:function(e,t){new Swiper(".products-swiper-container",((s={slidesPerView:1,cssMode:!0}).slidesPerView="auto",s.spaceBetween=15,s.slidesPerGroup=2,s.loop=!0,s.navigation={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},s));var s,n=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:4,loop:!0,freeMode:!0,loopedSlides:5,watchSlidesVisibility:!0,watchSlidesProgress:!0});new Swiper(".gallery-top",{spaceBetween:10,loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:n}})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9b668e2f9326ba443dab.js.map