//your JS code here. If required.
const progressLine = document.getElementById("progress-line");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = [
  document.getElementById("circle-1"),
  document.getElementById("circle-2"),
  document.getElementById("circle-3"),
  document.getElementById("circle-4"),
  document.getElementById("circle-5")
];

let currentStep = 0; // 0-indexed (0–4)

// Helper: update progress line and button states
function updateProgress() {
  const lineWidthPercent = currentStep / (circles.length - 1) * 100;
  progressLine.style.width = `${lineWidthPercent}%`;

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === circles.length - 1;
}

// Initial state: first circle active, prev disabled
updateProgress();

// Next button
nextBtn.addEventListener("click", () => {
  if (currentStep < circles.length - 1) {
    currentStep++;
    circles[currentStep].classList.add("active");
    updateProgress();
  }
});

// Previous button
prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    circles[currentStep].classList.remove("active");
    currentStep--;
    updateProgress();
  }
});
