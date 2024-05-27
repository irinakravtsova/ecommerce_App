
  export function createBag(selector) {
   
    const bagNode = document.querySelector(selector);
    return {
      bagNode,
      renderBag: function(findProducts, bag) {
 
        let out = '';
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
              <div class="bag__counter">
                <button class="minus-btn" data-action="minus" data-id="${id}">
                  <img class="minus-btn" data-action="minus" data-id="${id}" src="./src/images/Increase-Button.png" alt="">
                </button>
                <p class="counter" data-counter>${bag[id]}</p>
                <button class="add-btn" data-action="plus" data-id="${id}">
                  <img class="add-btn" data-action="plus" data-id="${id}" src="./src/images/Decrease-Button.png" alt="">
                </button>
              </div>
             
            </div>
          </div>
        </div>
        ` 
        })
        bagNode.innerHTML = out;
      }
    }
  }




   


  


  


      


