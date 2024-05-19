import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
import { CURRENSY } from "./constants";
import { ITEM_LOCALSTORAGE_KEY } from "./constants";

import { createItemsModel } from "./model";
import { createBagModel } from "./model";
import { createUserModel } from "./model";
import  { createCardModel }   from "./model";

import { createItemsStorage } from "./storage";
import { createItemsView } from "./view";
import { createBagPeviewView } from "./view";
import { createLocalStorage } from "./localStorage";

const initialItems = [];
const bagModel = createBagModel(initialItems);
const itemsModel = createItemsModel(initialItems); //инициализируем модель
// const cardModel = createCardModel();
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const itemsView = createItemsView(".js-output", CURRENSY); //вью, передаем node, и функцию, где определено, что нужно делать при нажатии на кнопку
const localStorage = createLocalStorage(ITEM_LOCALSTORAGE_KEY);
const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const userModel = createUserModel();

export function createItemsController() {
  const node = document.querySelector(".js-output");
  const bag = {}; //сюда добавляй товары которые в корзину
  
 
  node.addEventListener("click", function(event) {
    const btn = event.target.closest(".add-bag"); //найди кнопку по которой кликнули
    if (!btn) return;
    const card = btn.closest(".item__card"); //найди карту товара, которой приндлежит кнопка по классу
    const id = card.dataset.productId; //забери ее id
    // const count = card.dataset.count;
    const bag = localStorage.pullBag(); //получи данные о корзине из LS

    if (bag.includes(id)) return; //проверь, есть ли там этот Id
    // bagModel.addProduct(id);//передай в модель для добавления нового id
    bag.push(id);
    localStorage.pushBag(bag);

    bagPreviewView.renderBag();
  })
  
  

   
   
    // if (event.target.classList.contains("add-bag")) {
    //   let articul = event.target.dataset['articul']; //забери ее id
    //   console.log(articul);
    //   if (bag[articul] !== undefined) {
    //       bag[articul]['count'] ++;
    //   }
    //   else {
    //     bag[articul] = items[articul];
    //     bag[articul]['count']++;
    //   }
    //   localStorage.pushBag(bag);
    // }


    storage.pull().then((items) => {
      //выкачиваем из хранилища
      const bag = localStorage.pullBag();
      const findeItems = items.filter((item) => bag.includes(item.id));

      bagPreviewView.renderBag(findeItems);
    });
 
    


 

  // const nodeBag = document.querySelector(".bag__item-wrapper");



  return {
    init() {
      //на старте приложения
      const bag = localStorage.pullBag();
      if (bag) {
        storage.pull().then((items) => {
          //выкачиваем из хранилища
          const findeItems = items.filter((item) => bag.includes(item.id)); //отфильтруй из общего массива те, которые есть в

          bag.push(findeItems);
          bagPreviewView.renderBag(findeItems);
        });
      }
      storage.pull().then((items) => {
        //выкачиваем из хранилища
        itemsModel.update(items); // когда они приходят, обновляем модель
        itemsView.renderItems(itemsModel.getItems()); //делаем отрисовку
      });
      
    },
  }
}





export function createCardController() {
  return {
    initCard() {
      //на старте приложения
      const localStorageItems = localStorage.pullBag();
      if (localStorageItems) {
        cardModel.updateBag(localStorageItems);
      }
      bagPreviewView.renderBag(bagModel.get());

      storage.pull().then((items) => {
        //выкачиваем из хранилища
        console.log(items);

        cardModel.loadCard(items); // когда они приходят, обновляем модель

        cardView.renderItems(itemsModel.getItems()); //делаем отрисовку
      });
    },
  };
}
