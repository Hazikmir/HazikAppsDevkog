// Splash Screen Functionality
const splash = document.getElementById("splash");
const mainContent = document.getElementById("main-content");

setTimeout(() => {
  splash.style.display = "none";
  mainContent.style.display = "block";
}, 3000); // 3 seconds splash screen

// Popup Functionality
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

function downloadGame() {
  popupText.textContent = "Download Dumper Simulator 2025?";
  popup.style.display = "flex";
  popup.onclick = function () {
    window.location.href =
      "https://drive.usercontent.google.com/open?id=1-0UVtU5m_wpjtOr_gii3bUJDXuVAw4my&authuser=0";
  };
}

function comingSoon() {
  popupText.textContent = "Indian Mini Truck Simulator is Coming Soon!";
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}