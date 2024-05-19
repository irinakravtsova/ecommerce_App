//последовательность действий: сначала загружаем из БД потом выводим товары на страницу, при этом в 1 очередь обращаемся в LS, т.е. запускаем функцию checkBag

import { doc } from "firebase/firestore";
import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { createItemsStorage } from "./storage";
// import { createOrdersStorage } from "./storageOrders";
// import { createBagPeviewView } from "./view";
// import { createBag } from "./view";

const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
// const ordesStorage = createOrdersStorage(ECOMMERCE_ORDERS_STORAGE_KEY);
// const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
// const bagView = createBag(".big__bag__wrapper");
// const bagNode = document.querySelector(".big__bag__wrapper");
const sumNode = document.querySelector('.sum-text_usd');
const totalNode = document.querySelector('.total-sum-text');

let bag = {};

let findProducts = {};

//сумма, стоимость

let SUM = parseInt(sumNode.innerText);

function initSum() { //вызываем лимит из хранилища
  const sumFromLStorage = parseInt(localStorage.getItem('sum'));
  if (!sumFromLStorage) {
    return;
  }
  sumNode.innerText =  sumFromLStorage;
  SUM = parseInt(sumNode.innerText);
 let total = 0;
 total+=SUM+=6.99

  totalNode.innerText = total
}
initSum();

// попапы

let orders = {};
 
const popupNode = document.querySelector('.js-popup');
const btnOpenAddress = document.querySelector('.js-btn-address');

const popupName = document.querySelector('.js-popup__input-name');
const popupStreet = document.querySelector('.js-popup__input-street');
const popupCity = document.querySelector('.js-popup__input-city');
const popupPhone = document.querySelector('.js-popup__input-phone');

const inputName = document.querySelector('.input-name');
const inputStreet = document.querySelector('.input-street');
const inputCity = document.querySelector('.input-city');
const inputPhone = document.querySelector('.input-phone');

const saveBtn = document.querySelector('.btn-save');

const btnOpenPayment = document.querySelector('.js-btn__payment');
const popupPaymentNode = document.querySelector('.js-popup-payment');

const radios = document.querySelectorAll('input[name="r"]'); 
const btnChengePaymant = document.querySelector('.btn-paymant');
const inputPaymant = document.querySelector('.input-payment');


// popup адрес

btnOpenAddress.addEventListener('click', togglePopup);
btnOpenPayment.addEventListener('click', togglePopupPayment);
saveBtn.addEventListener('click', newNameHandler);
saveBtn.addEventListener('click', togglePopup);

function togglePopup() {
  popupNode.classList.toggle("popup_open");
}

function getName() {
  return popupName.value;
}
function newNameHandler() {
  const name = getName();
  inputName.innerText = name;
}

popupStreet.addEventListener('input', function() {
  inputStreet.innerText = popupStreet.value;
 
})
popupCity.addEventListener('input', function() {
  inputCity.innerText = popupCity.value;
})
popupPhone.addEventListener('input', function() {
  inputPhone.innerText = popupPhone.value;
})

// попап оплата

btnChengePaymant.addEventListener('click', function () {
  for (let radio of radios) {
    if (radio.checked) {
      inputPaymant.innerText = radio.value;
    }
  }
})
btnChengePaymant.addEventListener('click', togglePopupPayment)

function togglePopupPayment() {
  popupPaymentNode.classList.toggle("popup__payment_open");
}


// создай БД opders

checkBag();
const idFromLStorage = localStorage.getItem('userId');
const currentName = inputName.textContent;
const currentLine = inputStreet.textContent;
const currentCity = inputCity.textContent;
const currentPhone = inputPhone.textContent;
const currentPayment = inputPaymant.innerText
bag = JSON.parse(localStorage.getItem('bag'));

const productsId = Object.keys(bag); //массив из id
const productQuantity = Object.values(bag)//массив из количеств
productsId.forEach(id => {
  console.log(productsId[id]);
})





let order = {
  userId: idFromLStorage,
  deliveryPrice: 6.99,
  address: {
        city: currentCity,
        line: currentLine,
        name: currentName,
        phone: currentPhone
      },
  paymentMethod: currentPayment,
  // status: new,
  items: {
      //  itemId: item.id,
      //  quantity: counter
      }        
        
}

console.log(order);

function addOder(order) {
  orders.push(order)
};

function getOrders(orders) {
  return orders;
}











// отрисовка корзины

const checkoutBag = document.querySelector('.big__bag__wrapper')
storage.pull().then((items) => {//1. загрузи базу
  let products = items;//все товары в базе

  checkBag(); //сделай проверку корзины

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
          
         
        </div>
      </div>
    </div>
    ` 
    })
    checkoutBag.innerHTML = out;

  }

});

function checkBag() {//помести за пределами цикла проверку  корзины в LS
  if (localStorage.getItem('bag') != null) {//если в LS что-то есть
    bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
  }
};
function saveBagToLS() {
  localStorage.setItem('bag', JSON.stringify(bag));
}







