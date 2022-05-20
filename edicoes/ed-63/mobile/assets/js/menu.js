// Select body document
const body = document.querySelector("body");

// Content menu box
const menubox = document.createElement("div");
body.appendChild(menubox);
menubox.classList.add("menubox");

// Create a box to overflow inside (menubox)
const menuboxOverflow = document.createElement("div");
menuboxOverflow.classList.add("menuboxOverflow");

menubox.appendChild(menuboxOverflow);

// Creanting open and close btns
const open = document.createElement("div");
const close = document.createElement("div");
// Appling a class on btns
close.classList.add("close");
open.classList.add("open");

open.innerHTML = "<div></div><div></div><div></div>";
close.innerHTML = "X";

body.appendChild(close);
body.appendChild(open);

open.addEventListener("click", (e) => {
  menubox.style.top = "0";
  open.style.display = "none";
});
close.addEventListener("click", (e) => {
  open.style.display = "flex";
  menubox.style.top = "-1100px";
});

// Select all menus.
const menu_txt = document.querySelectorAll(".headermobile");

menu_txt.forEach((menu_item) => {
  const menupages = document.createElement("p");
  menupages.innerHTML = menu_item.alt;
  menuboxOverflow.appendChild(menupages);

  menupages.addEventListener("click", (e) => {
    console.log(menu_item.id);
    menubox.style.top = "-1100px";
    open.style.display = "flex";
    document.querySelector(`#${menu_item.id}`).parentElement.scrollIntoView();
  });
});

//
