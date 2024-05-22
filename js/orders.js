
import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { createItemsStorage } from "./storage";
import { createOrdersStorage } from "./storageOrders";
import { createOrdersModel } from "./modelOrders";

const initialOrders = [];
const modelOrders = createOrdersModel(initialOrders);
const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const storageOrders = createOrdersStorage(ECOMMERCE_ORDERS_STORAGE_KEY);

const orderNode = document.querySelector('.order-node');
const checkoutBag = document.querySelector('.checkbag')

// const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
// const bagView = createBag(".big__bag__wrapper");
// const bagNode = document.querySelector(".big__bag__wrapper");
// const sumNode = document.querySelector('.sum-text_usd');
// const totalNode = document.querySelector('.total-sum-text');

let bag = {};
let bagIds = {};
let bagOrder = {};



//сумма, стоимость

// let SUM = parseInt(sumNode.innerText);

// function initSum() { //вызываем лимит из хранилища
//   const sumFromLStorage = parseInt(localStorage.getItem('sum'));
//   if (!sumFromLStorage) {
//     return;
//   }
//   sumNode.innerText =  sumFromLStorage;
//   SUM = parseInt(sumNode.innerText);
//  let total = 0;
//  total+=SUM+=6.99

//   totalNode.innerText = total
// }
// initSum();

storageOrders.pull().then((orders) => {
   loadOrderAddress(orders);
  
});

storage.pull().then((items) => {
  loadOrderBag(items);
});

  function getParameterFromURL(parameter) {//получи id из URL
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(parameter)//функция get - получи значение, которое там есть
  };

  function loadOrderAddress(orders) {
    const orderId = getParameterFromURL('id');
    
      if (!orderId) {
        const container = document.querySelector('.container')
        const heading = document.createElement('div');
        heading.classList.add("order-error");
        heading.textContent = 'Страница не найдена'
        container.append(heading);
        

      return
    }
    const findOrder = orders.find(order => order.id === orderId);
    
   bagOrder = findOrder.items;
     bagIds = Object.keys(bagOrder);
     console.log(bagOrder);
   
    renderOrderAddress(findOrder);
  };

  function loadOrderBag(items) {
   const findItems = items.filter(item => bagIds.includes(item.id));
    
    renderOrderBag(findItems);   
  }

  function renderOrderAddress(order) {
  let out = '';
    const { id, userName, city, line, phone, deliveryPrice, paymentMethod, sum, total } = order;
    out += `
    <h2 class="order__title">Заказ ${id} </h2>
    <div class="orders">
      <div class="checkout__wrapper">
        <div class="address">
          <h2 class="title">Адрес доставки</h2>
          <div class="address__wrapper">
            <form class="address__form" action="">
               <div class="address__content">
                <p class="input-name text">${userName}</p>
                <p class="input-street text">${line}</p>
                <p class="input-city text">${city}</p>
                <p class="input-phone text">${phone}</p> 
              </div>
            </form> 
          </div>
        </div>
      
        <div class="payment">
          <h2 class="title">способ оплаты</h2>
          <div class="address__wrapper">
            <div class="payment__content">
              <img class="payment__card" src="./src/images/card.png" alt="">
              <p class="input-payment text">${paymentMethod}</p>
            </div>
            
          </div>
        </div>
      </div>
     
      <div class="total">
        <h2 class="text total__text">Сумма</h2>
        <div class="sum-box">
          <p class="total-text label">Товары:</p>
          <span class="total-text sum-text_usd" >$ ${sum} </span>
        </div> 
        <div class="sum-box">
          <p class="total-text">Доставка:</p>
          <p class="delivery total-text">$ ${deliveryPrice}/p>
        </div>
        <img src="./src/images/total_line.png" alt=""> 
        <div class="sum-box">
          <p class="total__sum-text">Стоимость:</p>
          <span class="total-sum-text sum-text_usd" >$ ${total} </span>
        </div>
        <img src="./src/images/total_line.png" alt="">
       </div>
    `
   orderNode.innerHTML = out;
  }

  function renderOrderBag(findItems) {
     let out='';
    findItems.forEach(item => {
      const { id, model, series, price, image, descriptionShort } = item;
       out += 
      `
      <h2 class="title">проверь корзину</h2>
      <div class="big__bag__wrapper">
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
           <div class="counter"> ${bagOrder[id]} </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    ` 
    })
    checkoutBag.innerHTML = out;
  };

  function showErrorMassege() {
    const msg = 
    `<div class="error">
        <p> Страница не найдена</p>
     </div> `;
     checkoutBag.insertAdjacentHTML('beforeend', msg);
  }










