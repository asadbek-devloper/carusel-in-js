"use strict";
const imgs = document.querySelector(".imgs");
const leftBtn = document.querySelector(".left");
const rigBtn = document.querySelector(".right");
const img = document.querySelectorAll(".img-itme");

const itemWidth = imgs.firstElementChild.clientWidth;
console.log(itemWidth);
// const b = itemWidth * img.length;
imgs.style.width = `${itemWidth * img.length}px`;
let index = 0;
let a = 0;

function changeIiages() {
  if (index > img.length - 1) {
    a = 0;
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
    a = index * itemWidth;
    console.log(a);
  }
  console.log(`${index}:${a}`);
  imgs.style.transform = `translateX(${-a}px)`;
}
rigBtn.addEventListener("click", (e) => {
  index++;
  a = a + itemWidth;
  changeIiages();
});
leftBtn.addEventListener("click", (e) => {
  index--;
  a = a - itemWidth;
  changeIiages();
});
