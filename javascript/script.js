// --- SIDE NAV ---
const sideNav = document.getElementById("side-nav-container");
const sideNavButton = document.getElementById("side-nav-button");
const sideNavList = document.querySelector("#side-nav-list");
const content = document.querySelector("#content");

function openSideNav() {
  sideNav.style.display = "flex";
  sideNav.style.minWidth = "144px";
  sideNav.style.maxWidth = "144px";
  sideNavList.style.display = "block";
}

function closeSideNav() {
  sideNav.style.minWidth = "0px";
  sideNav.style.maxWidth = "0px";
  sideNavList.style.display = "none";
}

sideNavButton.addEventListener("click", function (e) {
  if (sideNav.style.minWidth == "0px") {
    openSideNav();
  } else {
    closeSideNav();
  }
});

document.addEventListener("click", function(e) {
    const target = e.target
    if (target != sideNavButton) {
        closeSideNav();
    }
});