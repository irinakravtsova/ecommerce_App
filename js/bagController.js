// import { ECOMMERCE_ITEMS_STORAGE_KEY } from "./constants";
// import { ECOMMERCE_ORDERS_STORAGE_KEY } from "./constants";
// import { CURRENSY } from "./constants";
// import { ITEM_LOCALSTORAGE_KEY } from "./constants";


// import { createBagModel } from "./model";
// import { createUserModel } from "./model";
// // import  { createCardModel }   from "./model";

// import { createItemsStorage } from "./storage";
// // import { createItemsView } from "./view";
// // import { createBagPeviewView } from "./view";
// import { createLocalStorage } from "./localStorage";

// const initialItems = [];
// const bagModel = createBagModel(initialItems);
// const itemsModel = createItemsModel(initialItems); //инициализируем модель
// // const cardModel = createCardModel();
// const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
// const itemsView = createItemsView(".js-output", CURRENSY); //вью, передаем node, и функцию, где определено, что нужно делать при нажатии на кнопку
// const localStorage = createLocalStorage(ITEM_LOCALSTORAGE_KEY);
// const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
// const userModel = createUserModel();



export function createBagController() {
  let cart = {
    '3BymibxM9qHon5PU5R7n' : 2,
    '1jIYMJVgKSDRLN6oZnRz' : 2
  };
   document.onclick = event => {
    console.log(event.target);
   }

}


