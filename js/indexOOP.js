//Последовательность действий: Важно!!! сначала ждем загрузки страницы html, потом начинаем выводить товар из БД, из LS, потом обработчик клика
import { v4 as uuidv4 } from 'uuid';
import { ECOMMERCE_ITEMS_STORAGE_KEY,  ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { createItemsStorage } from "./storage";
import { createOrdersStorage } from "./storageOrders";
// import { createLocalStorage } from "./localStorage";
import { createItemsView,
         createBagPeviewView
} from "./view";
import { createItemsModel } from "./model";
import { createOrdersModel } from "./modelOrders";
// import { createBagModel } from "./model";
// import { createCalcSum } from "./calcBagPrice";

const idUser = uuidv4();
console.log(idUser);
localStorage.setItem("userId", idUser); 

const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const storageOrders = createOrdersStorage(ECOMMERCE_ORDERS_STORAGE_KEY);
const initialOrders = [];
const modelOrders = createOrdersModel(initialOrders);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const itemsView = createItemsView(".js-output");
const node = document.querySelector(".js-output");
const ordersNode = document.querySelector('.bag__order');


let bag = {}; //при загрузке объяви пустой массив корзины

storage.pull().then((items) => {//выведи товары на страницу
     itemsView.renderItems(items);
     checkBag();//проверь есть ли что-то в корзине вызываем функцию или на старте или после загрузки товара на страницу
     showPreviewBag();
    
    node.addEventListener('click', event => {
      
    if (event.target.classList.contains('add-bag')) {
      let articul = event.target.dataset['articul'];
      if (bag[articul] != undefined) {
        bag[articul]++;
      }
      else {
        bag[articul] = items.id;
        bag[articul] = 1;
      }
      localStorage.setItem('bag', JSON.stringify(bag));
     
      showPreviewBag();
      calcBagPrice()
      
    }
    })
    function checkBag() {//проверяем наличие корзины в LS
      if (localStorage.getItem('bag') != null) //если в LS что-то есть
        bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
    }

    function showPreviewBag() {
      const bagIds = Object.keys(bag);
      const findProducts = items.filter(item => bagIds.includes(item.id));
      bagPreviewView.renderBagPreview(findProducts);
    }
  });
 
  storageOrders.pull().then((orders) => {
    modelOrders.update(orders);
    let out = '';
     orders.forEach(order => {
      out += `
      <a class="order-one bag__orders-text" href="./orders.html?id=${order.id}"># ${order.id};</a>
      `
    });
    ordersNode.innerHTML = out;
  });



  