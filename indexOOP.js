//Последовательность действий: Важно!!! сначала ждем загрузки страницы html, потом начинаем выводить товар из БД, из LS, потом обработчик клика
import { v4 as uuidv4 } from 'uuid';
import { ECOMMERCE_ITEMS_STORAGE_KEY,  ITEM_LOCALSTORAGE_KEY } from "./constants";
import { createItemsStorage } from "./storage";
// import { createLocalStorage } from "./localStorage";
import { createItemsView,
         createBagPeviewView
} from "./view";
import { createItemsModel } from "./model";
// import { createBagModel } from "./model";
// import { createCalcSum } from "./calcBagPrice";

const idUser = uuidv4();
console.log(idUser);
localStorage.setItem("userId", idUser); 
const initialItems = [];
const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
// const localStorage = createLocalStorage("bag");
const itemsModel = createItemsModel(initialItems);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const itemsView = createItemsView(".js-output");
// const bagModel = createBagModel(initialItems);
// const calcSum = createCalcSum();


const node = document.querySelector(".js-output");
const sumNode = document.querySelector(".sum");

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
  
  })

  