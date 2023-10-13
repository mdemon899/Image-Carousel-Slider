// Making The Clock Moving Function
const leftBtn = document.querySelector("#left-icon");
const rightBtn = document.querySelector("#right-icon");
const clockImages = document.querySelector("#clock_images");
const body = document.body;
const images = [
  {
    url: "url(../Images/orange-clock.png) center center /cover",
    bg: "linear-gradient(106deg, #F4A764 -2.93%, #FFDEC2 72.14%)",
  },
  {
    url: "url(../Images/white-clock.png) center center /cover",
    bg: "linear-gradient(106deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)",
  },
  {
    url: "url(../Images/green-clock.png) center center /cover",
    bg: "linear-gradient(106deg, #30A357 -2.93%, #75E39A 72.14%)",
  },
  {
    url: "url(../Images/red-clock.png) center center /cover",
    bg: "linear-gradient(106deg, #F24F4F -2.93%, #FFA895 72.14%)",
  },
];

let currentImagesIndex = 0;

rightBtn.addEventListener("click", () => {
  currentImagesIndex = (currentImagesIndex + 1) % images.length;
  changeClockAndColor();
});

leftBtn.addEventListener("click", () => {
  currentImagesIndex = (currentImagesIndex - 1 + images.length) % images.length;
  changeClockAndColor();
});

changeClockAndColor();

function changeClockAndColor() {
  clockImages.style.background = images[currentImagesIndex].url;
  clockImages.style.opacity = 0;
  body.style.background = images[currentImagesIndex].bg;
  clockImages.style.transform = "translateX(-30px)";

  setTimeout(() => {
    clockImages.style.transition = "opacity 0.4s, transform 0.4s";
    clockImages.style.opacity = 1;
    clockImages.style.transform = "translateX(0)";
  }, 10);

  setTimeout(() => {
    clockImages.style.transition = "none";
    clockImages.style.transform = "translateX(0)";
  }, 300);
}

// Nav Menu Functions
let navMenu = document.querySelector("#nav_container ul");
function openMenu() {
  navMenu.style.right = "0px";
}
function closeMenu() {
  navMenu.style.right = "-200px";
}
