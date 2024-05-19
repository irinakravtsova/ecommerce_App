

import { ECOMMERCE_ITEMS_STORAGE_KEY,
      //  ITEM_LOCALSTORAGE_KEY
 } from "./constants";

// import {
//   setBagLocakStorage,
//   getBagLocalStorage
// } from './utils.js';
import { createItemsStorage } from "./storage";
// import { createLocalStorage } from "./localStorage";
import { createItemsView,
         createBagPeviewView
} from "./view";
import { createItemsModel } from "./model";
// import { createBagModel } from "./model";

const initialItems = [];
const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
// const localStorage = createLocalStorage("bag");
const itemsModel = createItemsModel(initialItems);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
// const itemsView = createItemsView(".js-output");
// const bagModel = createBagModel(initialItems);

// const node = document.querySelector(".js-output");
// const nodeBag = document.querySelector(".bag__item-wrapper");
// let items = [];
// const bag = {};
// let bagIds = [];

// storage.pull().then((items) => {
 
//   const node = document.querySelector(".js-output");
   
//     items.forEach(item => {
//       const { id, model, series, price, image } = item;

//       const outputListHTML = 
//       `
//        <li class="item__card" data-product-id="${id}">
//           <a class="image__wrapper" href="./card.html?id=${id}" class="image__wrapper"> 
//            <img class="item-image" src="${image}">    
//           </a>

//         <div class="item__content">
//           <a class="" href="./card.html?id=${id}"> 
//             <h2 class="item-model">${model}</h2>
//             <p class="item-series">${series}</p>
//           </a>
//         <div class="price-wrapper">
//            <p class="item-price">$ ${price} </p>
//            <button class="add-bag" data-id=${id} data-articul=${id}">
//             <img class="add-bag" data-articul=${id} src="./src/images/Button.png">
//            </button>    
//        </div>
//       </li>
//     ` 
//     node.insertAdjacentHTML('beforeend', outputListHTML);   
//      });
    // let bag = {};
    //  let bagIds = {};
  

   storage.pull().then((items) => {
    const bag = JSON.parse(localStorage.getItem('bag'));
    //выкачиваем из хранилища
   const bagIds = Object.keys(bag);
    const findProducts = items.filter(item => bagIds.includes(item.id));//отфильтруй из общего массива те, которые есть в
  
    bagPreviewView.renderBag(findProducts);
      //  if (bag) {
         
      //    });
     })     


  // node.addEventListener('click', event => {
  //   if (event.target.classList.contains('add-bag')) {
  //     let articul = event.target.dataset['articul'];
  //     if (bag[articul] != undefined) {
  //       bag[articul]++;
  //     }
  //     else {
  //       bag[articul] = items.id;
  //       bag[articul] = 1;
  //     }
  //     localStorage.setItem('bag', JSON.stringify(bag));

  //     bagIds = Object.keys(bag);
     
  //    const findProducts = items.filter(item => bagIds.includes(item.id));
  //    bagPreviewView.renderBag(findProducts);
  //   }
  // } )

 


  
