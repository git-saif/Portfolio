

document.addEventListener("DOMContentLoaded", function () {
  new Typed(".text", {
    strings: [
      "Full Stack Web Developer",
      "Laravel Developer",
      "PHP Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
});



function showContent(sectionId) {
  // Hide all content sections
  const allSections = document.querySelectorAll(".content-section");
  allSections.forEach((section) => section.classList.add("hidden"));

  // Remove active class from all buttons
  const allButtons = document.querySelectorAll(".toggle-button");
  allButtons.forEach((button) => button.classList.remove("active"));

  // Show the selected content and highlight button
  document.getElementById(sectionId).classList.remove("hidden");
  event.target.classList.add("active");
}
