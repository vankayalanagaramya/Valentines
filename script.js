const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Go to memories page
yesBtn.addEventListener("click", () => {
  window.location.href = "memories.html";
});

// Make "No" button escape
function moveNoButton() {
  // Make it position: fixed so it can move anywhere on screen
  noBtn.style.position = "fixed";

  const padding = 20;
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const x = Math.random() * (maxX - padding) + padding;
  const y = Math.random() * (maxY - padding) + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // fun little rotation each time
  const rot = (Math.random() * 40) - 20;
  noBtn.style.transform = `rotate(${rot}deg)`;
}

// Trigger when they try to hover or touch it
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});
