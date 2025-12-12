/*
App requirements:
 - The app should display the name, symbol, and 
   price of the stock, with a timestamp as per the 
   screenshot.
 - The triangle compares the current stock price to 
   its previous price. If the price has increased, it 
   should be a green triangle pointing up, if the price 
   has decreased it should be a red triangle pointing 
   down, and if there has been no change it should be a 
   grey triangle pointing to the right.
 - The price should update every 1.5 seconds. 
*/

/*
Challenge:
  1. Find a way to get fresh stock data every 1.5 seconds.
  2. Call the renderStockTicker function with the fresh data.
  3. Add logic to renderStockTicker to display the correct 
     information.
  ⚠️ You will need to write code here in index.js and in
   fakeStockAPI.js.
*/

import getStockData from "./fakeStockAPI.js";

document.addEventListener("DOMContentLoaded", () => {
  function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById("name");
    const stockDisplaySymbol = document.getElementById("symbol");
    const stockDisplayPrice = document.getElementById("price");
    const stockDisplayPriceIcon = document.getElementById("price-icon");
    const stockDisplayTime = document.getElementById("time");


    const {name,sym, price, time} = stockData;

    // Display stock price and symbol
    stockDisplayName.textContent = name;
    stockDisplaySymbol.textContent = sym;

    // Set initial stock price and icon
    stockDisplayPrice.textContent = price;
    const icon = document.createElement("img");
    icon.src = "./svg/grey.svg";
    stockDisplayPriceIcon.appendChild(icon);

    // Compare and set new price and icon
    function getPrice() {
      // get current and new price
      const { price: newPrice } = getStockData();
      const currentPrice = Number(stockDisplayPrice.textContent);

      // choose icon
      let iconSrc = newPrice > currentPrice ? "./svg/green.svg" : newPrice < currentPrice ? "./svg/red.svg" : "./svg/grey.svg"

      // replace existing icon
      stockDisplayPriceIcon.innerHTML = "";
      icon.src = iconSrc;
      stockDisplayPriceIcon.appendChild(icon);

      // update displayed price
      stockDisplayPrice.textContent = newPrice;
    }
    // Update stock price every 1.5 seconds
    setInterval(getPrice, 1500);

    // Set initial time
    stockDisplayTime.textContent = time;

    // Set live clock
    setInterval(() => {
      const { time:currentTime } = getStockData();
      stockDisplayTime.textContent = currentTime;
    }, 1000)
  }

  renderStockTicker(getStockData());
});
