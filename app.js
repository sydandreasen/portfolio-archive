window.addEventListener("load", () => {
  if (window.innerWidth < 700) {
    // have on mobile mode
    document.getElementById("nav").classList.add("navBar-mobile");
    document.getElementById("nav").classList.remove("navBar-wide");
  }
  // shouldn't need else because defaults to wide mode
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 700) {
    // mobile mode
    document.getElementById("nav").classList.add("navBar-mobile");
    document.getElementById("nav").classList.remove("navBar-wide");
  } else {
    // wide mode
    document.getElementById("nav").classList.remove("navBar-mobile");
    document.getElementById("nav").classList.add("navBar-wide");
  }
});

let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let internship = document.getElementById("internship");
let research = document.getElementById("research");
