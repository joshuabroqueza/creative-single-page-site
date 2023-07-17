const hamburgerIcon = document.getElementById("hamburger_icon");
const crossIcon = document.getElementById("cross_icon");
const navbarContainer = document.getElementById("navbar_container");

hamburgerIcon.addEventListener("click", () => {
  // Show X icon
  hamburgerIcon.classList.add("hidden");
  crossIcon.classList.remove("hidden");
  navbarContainer.classList.remove("hidden");
});

crossIcon.addEventListener("click", () => {
  // Show hamburger icon
  hamburgerIcon.classList.remove("hidden");
  crossIcon.classList.add("hidden");
  navbarContainer.classList.add("hidden");
});

// Add event listener to the document to handle clicks outside the navbar container
document.addEventListener("click", (event) => {
  // Check if the click target is outside the navbar container
  if (
    !navbarContainer.contains(event.target) &&
    event.target !== hamburgerIcon
  ) {
    // Hide the navbar container
    hamburgerIcon.classList.remove("hidden");
    crossIcon.classList.add("hidden");
    navbarContainer.classList.add("hidden");
  }
});

//SLIDE SECTION

const slideLeftBtn = document.getElementById("slide_left");
const slideRightBtn = document.getElementById("slide_right");
const slideContainer = document.querySelector(".slide_container");
const slideChildren = document.querySelectorAll(".slide_child");

let currentIndex = 0;

function showSlide(index) {
  // Hide all slide children
  slideChildren.forEach((child) => {
    child.classList.add("hidden");
  });

  // Show the slide at the given index
  slideChildren[index].classList.remove("hidden");
}

function moveSlideLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideChildren.length - 1;
  }
  showSlide(currentIndex);
}

function moveSlideRight() {
  currentIndex++;
  if (currentIndex >= slideChildren.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Attach event listeners to slide buttons
slideLeftBtn.addEventListener("click", moveSlideLeft);
slideRightBtn.addEventListener("click", moveSlideRight);

// Smooth scrolling to the section when a navbar item is clicked
const navbarItems = document.querySelectorAll(".navbar_item a");

navbarItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = item.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Hide the navbar container after clicking a navbar item
    const hamburgerIcon = document.getElementById("hamburger_icon");
    const crossIcon = document.getElementById("cross_icon");
    const navbarContainer = document.getElementById("navbar_container");

    hamburgerIcon.classList.remove("hidden");
    crossIcon.classList.add("hidden");
    navbarContainer.classList.add("hidden");
  });
});
