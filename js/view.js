
export function createItemsView(selector) { //передай действие, которое нужно сделать при клике на movie
  const node = document.querySelector(selector);
   return {
    node,
    renderItems: function(items) {
        items.forEach(item => {
        const { id, model, series, price, image } = item;
        const outputListHTML = 
        `
         <li class="item__card" data-product-id="${id}">
            <a class="image__wrapper" href="./card.html?id=${id}" class="image__wrapper"> 
             <img class="item-image" src="${image}">    
            </a>

          <div class="item__content">
            <a class="" href="./card.html?id=${id}"> 
              <h2 class="item-model">${model}</h2>
              <p class="item-series">${series}</p>
            </a>
          <div class="price-wrapper">
             <p class="item-price">$ ${price} </p>
             <button class="add-bag" data-id=${id} data-articul=${id}">
              <img class="add-bag" data-articul=${id} src="./src/images/Button.png">
             </button>    
         </div>
        </li>
      ` 
      this.node.insertAdjacentHTML('beforeend', outputListHTML);   
        // this.addItem(item);
      });   
    },

    addItem: function(item) {
      const itemCard = document.createElement('li');
      const imageLink = document.createElement('a');
      const img = document.createElement('img');
      const itemContent = document.createElement('div');
      const link = document.createElement('a');
      const itemName = document.createElement('h2');
      const itemSeries = document.createElement('p');
      const priceBox = document.createElement('div');
      const itemPrice = document.createElement('p');
      const addBtn = document.createElement('button');

      // const {id, image, model, series, price} = item;

      itemCard.classList.add("item__card");
      itemCard.dataset.productId = item.id;
     
      imageLink.classList.add("image__wrapper");
      imageLink.href="itemCard.html?id=item.id"


      img.classList.add("item-image");
      img.src = item.image;

     
     

      itemContent.classList.add("item__content");
      itemName.classList.add("item-model");
      itemName.innerText = item.model;

      itemSeries.classList.add("item-series");
      itemSeries.innerText = item.series;

      priceBox.classList.add("price-wrapper");

      itemPrice.classList.add("item-price");
      itemPrice.innerText = item.price;

      addBtn.classList.add("add-bag");
      imageLink.append(img);

      link.append(itemContent);
      itemContent.append(itemName, itemSeries);
      priceBox.append(itemPrice, addBtn);
      itemCard.append(imageLink, itemContent)

      node.append(itemCard);
    }
  }
}

 export function createBagPeviewView(selector) {
    const nodeBag = document.querySelector(selector);
    return {
      nodeBag,
      renderBagPreview: function(findProducts) {
        let bagHTML = '';
        findProducts.forEach(item => {        
          bagHTML += 
             `
              <div class="bag__item">
                <img class="bag__image" src="${item.image}" alt="">
              </div>
            `
          this.nodeBag.innerHTML = bagHTML
        })
      }
    }
  };

  export function createOrdersPeviewView(selector) {
    const ordersNode = document.querySelector(selector);
    return {
      ordersNode,
      renderOrdersPreview: function(orders) {
        let out = '';
         orders.forEach(order => {
          out += `
             <a class="order-one bag__orders-text" href="./orders.html?id=${order.id}"># ${order.id};</a>
             `
        })
         this.ordersNode.innerHTML = out;
      }
    }
  };
 

  