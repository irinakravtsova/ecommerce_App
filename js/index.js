

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
const itemsView = createItemsView(".js-output");
// const bagModel = createBagModel(initialItems);

const node = document.querySelector(".js-output");
const nodeBag = document.querySelector(".bag__item-wrapper");
let items = [];
// const bag = {};
// let bagIds = [];

storage.pull().then((items) => {
  itemsModel.setItems(items); // когда они приходят, обновляем модель
  itemsView.renderItems(itemsModel.getItems()); //делаем отрисовку
});

// init();
// node.addEventListener('click', addToBag);
// checkBag();
// loadPreviewBag();

// function init() {
// //   const bag = JSON.parse(localStorage.getItem('bag'));
// //   if (bag) {
// //     storage.pull().then((items) => {
// //       //выкачиваем из хранилища
// //       bagIds = Object.keys(bag);
     
// //       const findProducts = items.filter(item => bagIds.includes(item.id));//отфильтруй из общего массива те, которые есть в
// //       console.log(findProducts);
// //       bag.push(findProducts);
// //       bagPreviewView.renderBag(findProducts);
// //     });
// // }

//   // storage.pull().then((items) => {
//   //   itemsModel.setItems(items); // когда они приходят, обновляем модель
//   //   itemsView.renderItems(itemsModel.getItems()); //делаем отрисовку
  
//   // });

// }

  // function addToBag(e) {
    
  //   const btn = e.target.closest('.add-bag');
  //   if (!btn) return;
  //   const card = btn.closest('.item__card');
  //   const id = card.dataset.productId;
  //   let bag = {};
  //   bag = JSON.parse(localStorage.getItem('bag'));
  //      if (bag[id] != undefined) {
  //       bag[id] ++;
     
  //     } 
  //     else {
  //       bag[id] = 1;
  //     }
  
  //   storage.pull().then((items) => {
  //     //выкачиваем из хранилища
  //     // bagIds = Object.keys(bag);
     
  //     // const findProducts = items.filter(item => bagIds.includes(item.id));//отфильтруй из общего массива те, которые есть в
  //     // console.log(findProducts);
     
  //     bagPreviewView.renderBag(findProducts);
  //   })
  // }

   


    // const bag = JSON.parse(localStorage.getItem('bag'));
    // bag.push(id);
    // 
    //   
  
    // localStorage.setItem('bag', JSON.stringify(bag));
  //   storage.pull().then((items) => {
  //    bag = JSON.parse (localStorage.getItem('bag'));
  //     bagIds = Object.keys(bag);
  //     const findProducts = items.filter(item => bagIds.includes(item.id));
  //     bagPreviewView.renderBag(findProducts);
  // })
  // }






  // const btn = event.target.closest('.add-bag');
  // if (!btn) return;

  // const card = btn.closest('.item__card');
  // const id = card.dataset.productId;
  // console.log(id);
  // const bag = JSON.parse (localStorage.getItem('bag'));
  // console.log(bag);
  // // bag[id]++

  // if (bag.includes(id)) return;
  // bag.puch(bag);
  // console.log(bag);

      // if (event.target.classList.contains('add-bag')) {//если элемент, по которому клик содержит класс, то выполняется следущее
      //  const articul = event.target.dataset['articul'];
      //  const bag = JSON.parse (localStorage.getItem('bag'));
    
      //  if (bag[articul] != undefined) {
      //         bag[articul]++;
      //       }
      //       else {
      //         bag[articul] = 1;
      //       }
      //       localStorage.setItem('bag', JSON.stringify(bag));
      //       storage.pull().then((items) => {
      //         bagIds = Object.keys(bag);
      //         const findProducts = items.filter(item => bagIds.includes(item.id));
      //         bagPreviewView.renderBag(findProducts);
      //       })

    

      // }
 
 
  //   if (event.target.closest('.add-bag')) {
  //     let id = event.target.dataset.id;
  //     console.log(id);
 
  //     if (bag[id] != undefined) {
  //       bag[id]++;
  //     }
  //     else {
  //       bag[id] = items[id];
  //       bag[id] = 1;
  //     }
  //     localStorage.setItem('bag', JSON.stringify(bag));
  // };

 





// function hendleAddToBag() {


  // const btn = event.target.closest('.add-bag'); //найди кнопку по которой кликнули
 
  //     if (!btn) return;
  //     const card = btn.closest(".item__card"); //найди карту товара, которой приндлежит кнопка по классу
      // const id = card.dataset.productId; //забери ее id
  //     console.log(id);
  //     bag = JSON.parse (localStorage.getItem('bag'));
  //     console.log(bag);
  //     bag.push(id);
     


      






// function addToBag (event) {
//   const btn = event.target.closest('.add-bag'); //найди кнопку по которой кликнули
 
//     if (!btn) return;
//     const card = btn.closest(".item__card"); //найди карту товара, которой приндлежит кнопка по классу
//     const id = card.dataset.productId; //забери ее id
//     console.log(bag[id]);
//     if (bag[id] !=undefined ) {
//       bag[id]++;
//     }
//     else {
//       bag[id] = 1;
//     }
//     localStorage.setItem('bag', JSON.stringify(bag));
//     bagPreviewView.renderBag(findProducts);
   
// }

// function checkBag() {//проверь наличие корзины в LS (несуществующий элемент дает null)
//   // проверка console.log( localStorage.getItem('ddd')) выводит null;
//  if (localStorage.getItem('bag') != null) {
//  const bag = JSON.parse (localStorage.getItem('bag'));
//   console.log(bag);
//   bagPreviewView.renderBag();
//  }
// }

// function loadPreviewBag(items) {
//   // let bagIds = [];
//   nodeBag.textContent = '';
//   storage.pull().then((items) => {
//     bag = JSON.parse (localStorage.getItem('bag'));


//     bagIds = Object.keys(bag);
      
//      const findProducts = items.filter(item => bagIds.includes(item.id));

//   bagPreviewView.renderBag(findProducts);
//   })
// }

    




  
