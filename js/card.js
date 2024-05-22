import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { CURRENSY } from "./constants";
import { ITEM_LOCALSTORAGE_KEY } from "./constants";

import { createItemsStorage } from "./storage";
import { createBagPeviewView } from "./view";
// import { createLocalStorage } from "./localStorage";

const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");

// const localStorage = createLocalStorage(ITEM_LOCALSTORAGE_KEY);

// const userModel = createUserModel();
const cardNode = document.querySelector('.card__wrapper');
const nodeBag = document.querySelector(".bag__item-wrapper");
let bag = {};//пустую корзину объявляем глобально
let findProducts = {};

storage.pull().then((items) => {
  let products = items;//все товары в базе
  loadItemDetails(items);
  checkBag(); //сделай проверку корзины
  showPreviewBag();

  cardNode.addEventListener("click", function (e) {
  
    const btn = e.target.closest(".card__btn-wrapper"); //найди кнопку по которой кликнули
  
    if (!btn) return;
    const card = btn.closest(".card__content");
    //найди карту товара, которой приндлежит кнопка по классу
    const id = card.dataset.productId; //забери ее id
    
    checkBag(); //получи данные о корзине из LS
  
    if (bag[id] != undefined) {
      bag[id]++;
    }
    else {
      bag[id] = items.id;
      bag[id] = 1;
    }
    localStorage.setItem('bag', JSON.stringify(bag));
   
    showPreviewBag();
    calcBagPrice();
    });

  function showPreviewBag() {
    const bagIds = Object.keys(bag);
    findProducts = products.filter(item => bagIds.includes(item.id));
    bagPreviewView.renderBagPreview(findProducts);
  }; 
});

function getParameterFromURL(parameter) {//получи id из URL
  const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(parameter)//функция get - получи значение, которое там есть
}

function loadItemDetails(items) {
  const productId = getParameterFromURL('id');
  if (!productId) {
  showErrorMassege();
  return
}

const findProdact = items.find(item => item.id === productId);

renderInfoItem(findProdact);

}

function renderInfoItem(item) {
  const { id, model, series, price, image, description, rating, descriptionShort } = item;
  const productItem = 

  `
  <div class="card__content" data-product-id="${id}" >
  <div class="card__image">
    <div class="card__image-wrapper">
      <img class="product__image" src="${image}" alt="">
    </div>
    
  </div>
  <div class="card__text">
    <h1>${model}</h1>
    <h2 class="subtitle" >${series}</h2>
    <div class="rating">
       <img class="" src="./src/images/rating_4.5.png" alt="">
    </div>
    <div class="price">$ ${price}</div>
    <p class="mini-content">${descriptionShort}</p>
    <div class="card__btn-wrapper"
      <button class="add-bag" data-action="addBag" data-id=${id}">
        <img data-action="addBag" data-id=${id} src="./src/images/BtnBag_prodactCard.png">
      </button> 
     
    </div>
  </div>
</div>
<div class="card__line">
  <img src="./src/images/Line 2.png" alt="">
</div>
<div class="card__description">
  <h3>Описание</h3>
  <p class="description">${description}</p>

</div>

  `
  cardNode.insertAdjacentHTML('beforeend', productItem);
}

function checkBag() {//помести за пределами цикла проверку  корзины в LS
  if (localStorage.getItem('bag') != null) {//если в LS что-то есть
    bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
  }
};

function showErrorMassege() {
  const msg = 
  `<div class="error">
      <p> Упс, ошибка. Такого товара нет.</p>
   </div> `;
   cardNode.insertAdjacentHTML('beforeend', msg);
}


