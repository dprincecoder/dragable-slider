const sliderCont = document.querySelector(".slider");
const sliderInner = document.querySelector(".slider-inner");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let pressed = false;
let startX, x;

//with mousemove and grabbing
sliderCont.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - sliderInner.offsetLeft;
  sliderCont.style.cursor = "grabbing";
});

sliderCont.addEventListener(
  "mouseenter",
  () => (sliderCont.style.cursor = "grab")
);

window.addEventListener("mouseup", () => {
  pressed = false;
});

//check both slidercontainer and sliderinner in and outer boundry
const checkBoundry = (e) => {
  let inner, outer;
  outer = sliderCont.getBoundingClientRect();
  inner = sliderInner.getBoundingClientRect();

  if (parseInt(sliderInner.style.left) > 0) {
    sliderInner.style.left = "0px";
  } else if (inner.right < outer.right) {
    sliderInner.style.left = `-${inner.width - outer.width}px`;
  }
};

sliderCont.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  sliderInner.style.left = `${x - startX}px`;

  checkBoundry();
});

checkBoundry();
