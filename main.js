
  window.onload = function() {
    setTimeout(function() {
      document.getElementById('loading-screen').style.display = 'none';
    }, 5000);  // Loading screen menghilang setelah 3 detik
  };

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener("load", function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById("loading");
    loadingScreen.style.display = "none"; // Hide loading screen after a certain time
  }, 6000); // Waktu delay dalam milidetik (2000ms = 2 detik)
});