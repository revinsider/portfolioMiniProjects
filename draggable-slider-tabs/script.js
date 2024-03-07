const tabsBox = document.querySelector(".tabs-box");
allTabs = document.querySelectorAll(".tab");
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
  let scrollVal = tabsBox.scrollLeft;
  // if scrollVal isn't working properly - Math.round value

  let maxScrollableWith = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWith > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
};

tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mousedown", () => (isDragging = true));
document.addEventListener("mouseup", () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
});
