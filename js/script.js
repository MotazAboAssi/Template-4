var bodyGoodTable = document.querySelector(".body-goodTable");
var footerGoodTable = document.querySelector(".footer-goodTable");
var btnShowPrice = document.querySelector(".showPrice");
var btnAddToBag = document.querySelectorAll(".btnAdd");
var titlesItems = document.querySelectorAll(".back h3");
var priceItems = document.querySelectorAll(".back .price");
var lineInAddItem, lineInHeadTable, lineTotalPrice;
var totalPrice = 0;
var count = 1;

 function Add(item, price, condition) {
  footerGoodTable.style.display = "none";
  if (bodyGoodTable.innerHTML == "") {
    lineInHeadTable = `
    <span class="head-item-count"></span>
    <span class="head-item-name">Name</span>
    <span class="head-item-price">Price</span>
    <span class="head-item-condition" title="Condition">Condition</span>
    `;
    bodyGoodTable.innerHTML += lineInHeadTable;
  }

  lineInAddItem = `
  <span class="item-count">${count}</span>                    
  <span class="item-name">${item}</span>                    
    <span class="item-price">${price} S.Y</span>
    <span class="item-condition" title="${condition}">${condition} S.Y</span>
    `;
  count++;
  bodyGoodTable.innerHTML += lineInAddItem;
  totalPrice += +price;
  btnShowPrice.style.display = "inline";
};
btnAddToBag.forEach(function (item) {
  item.onclick = function () {
    Add(
      item.getAttribute("itme-name"),
      item.getAttribute("price"),
      item.getAttribute("condition")
    );
  };
});

var preTotalPrice = 0;
function TotalPrice(item, price) {
  console.log(preTotalPrice != price);
  if (preTotalPrice != price) {
    preTotalPrice = price;
    lineTotalPrice = `
    <span class="item-count"></span>                    
    <span class="item-name">${item}</span>                    
    <span class="item-price">${price} S.Y</span>
    <span class="item-price"></span>
    `;
    footerGoodTable.innerHTML = lineTotalPrice;
  }
}

btnShowPrice.onclick = () => {
  footerGoodTable.style.display = "grid";

  TotalPrice("Total Price", totalPrice);
};

