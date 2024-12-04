var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
  "async": true,
  "scroosDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

  "method": "GET",
  "headers": {}
}

$.ajax(liveprice).done(function(response) {
  btc.innerHTML = response.bitcoin.usd;
  ltc.innerHTML = response.litecoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;

})


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