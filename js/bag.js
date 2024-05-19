//последовательность действий: сначала загружаем из БД потом выводим товары на страницу, при этом в 1 очередь обращаемся в LS, т.е. запускаем функцию checkBag

import { doc } from "firebase/firestore";
import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { createItemsStorage } from "./storage";
import { createBagPeviewView } from "./view";
import { createBag } from "./view";

const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const bagView = createBag(".big__bag__wrapper");
const bagNode = document.querySelector(".big__bag__wrapper");

let bag = {};//пустую корзину объявляем глобально
let findProducts = {};
let totalPrice = 0;

storage.pull().then((items) => {//1. загрузи базу
  let products = items;//все товары в базе

  checkBag(); //сделай проверку корзины
  showPreviewBag();
  calcBagPrice()
  function showPreviewBag() {
    const bagIds = Object.keys(bag);
    findProducts = products.filter(item => bagIds.includes(item.id));
    bagPreviewView.renderBagPreview(findProducts);
  }; 

  showBag()
  function showBag() {
    if (Object.keys(bag).length === 0) {const heading = document.querySelector('h2')
      heading.textContent = 'Корзина пуста'}
    const bagIds = Object.keys(bag);
    const findProducts = products.filter(item => bagIds.includes(item.id));
    let out='';
   
    findProducts.forEach(item => {
      const { id, model, series, price, image, descriptionShort } = item;
       out += 
      `
      <div class="big__bag__item" data-product-id="${id}">
      <div class="big__bag__item-image">
        <img class="big__bag-image" src="${image}" alt="">
      </div>
      <div class="big__bag__item__content">
        <h3 class="big__bag__item__content-title">${model}</h3>
        <p class="big__bag__item__content-subtitle">${series}</p>
        <p class="big__bag__item__content-description">${descriptionShort}</p>
        <img src="./src/images/rating_4.5.png" alt="">
        <div class="price__wrapper">
          <div class="price">
           <div class="price__currency">
            <p class="label">$
             <span class="price-text" >${price} х</span>

            </p> 
           </div>
           <div class="counter"> ${bag[id]} </div>
          </div>
          <div class="bag__counter">
            <button class="minus-btn" data-action="minus" data-id="${id}">
              <img class="minus-btn" data-action="minus" data-id="${id}" src="./src/images/Increase-Button.png" alt="">
            </button>
            <p class="counter" data-counter>${bag[id]}</p>
            <button class="add-btn" data-action="plus" data-id="${id}">
              <img class="add-btn" data-action="plus" data-id="${id}" src="./src/images/Decrease-Button.png" alt="">
            </button>
          </div>
         
        </div>
      </div>
    </div>
    ` 
    })
    bagNode.innerHTML = out;

  }
  calcBagPrice()

  document.addEventListener('click', plusFunction); 
  document.addEventListener('click', minusFunction);

  function plusFunction(event) {
    const btn = event.target.closest('.add-btn'); //найди кнопку по которой кликнули
    if (!btn) return;
    const card = btn.closest(".big__bag__item"); //найди карту товара, которой приндлежит кнопка по классу
    const id = card.dataset.productId; //забери ее id
    bag[id] ++
    calcBagPrice()
    saveBagToLS();
    showBag();
  
  }
  function minusFunction(event) {
    const btn = event.target.closest('.minus-btn'); //найди кнопку по которой кликнули
    if (!btn) return;
    const card = btn.closest(".big__bag__item"); //найди карту товара, которой приндлежит кнопка по классу
    const id = card.dataset.productId; //забери ее id
    if (bag[id] >1)  bag[id]--;
    else  delete bag[id];
    calcBagPrice()
    saveBagToLS();
    showPreviewBag();
    showBag();
}

 function calcBagPrice() {
    const cartItems = document.querySelectorAll('.big__bag__item');
    const totalPriceEl = document.querySelector('.sum-text_usd');

    let totalPrice = 0;
 
    cartItems.forEach(function(item) {
 
    const amountEl = item.querySelector('[data-counter]');
    const priseEl = item.querySelector('.price-text');
 
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priseEl.innerText);

    totalPrice += currentPrice;
    })
    totalPriceEl.innerText = totalPrice;

    localStorage.setItem('sum', JSON.stringify(totalPrice));
   
  };
 

});

function checkBag() {//помести за пределами цикла проверку  корзины в LS
  if (localStorage.getItem('bag') != null) {//если в LS что-то есть
    bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
  }
};
function saveBagToLS() {
  localStorage.setItem('bag', JSON.stringify(bag));
}



