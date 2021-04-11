const colorSwitcher = document.getElementById("input-color-switch");
const hambOpen = document.getElementById("hambOpen");
const hambClose = document.getElementById("hambClose");
const navList = document.getElementById("navList");
const navLogoWhite = document.getElementById("navwhite");
const navLogoBlack = document.getElementById("navblack");
const backdrop = document.getElementById("backdrop");
const nav = document.querySelectorAll(".nav");

const navArr = Array.from(nav);
const openCloseListeners = navArr.concat([hambClose, backDrop, hambOpen]);

colorSwitcher.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  navLogoWhite.classList.toggle("visible");
  navLogoBlack.classList.toggle("invisible");
});

const openCloseModal = (item) => {
  item.forEach((el) => {
    el.addEventListener("click", () => {
      hambOpen.classList.toggle("invisible");
      hambClose.classList.toggle("visible");
      navList.classList.toggle("visible");
      backdrop.classList.toggle("visible");
    });
  });
};

openCloseModal(openCloseListeners);
