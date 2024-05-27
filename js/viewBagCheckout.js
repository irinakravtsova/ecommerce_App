
  export function createBagCheckout(selector) {

    const checkoutBag = document.querySelector(selector);
    return {
      checkoutBag,
      renderBagCheckout: function(findProducts, bag) {
        console.log(bag);
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
            </div>
          </div>
          
        </div>
        <img src="./src/images/Line 3.png" alt="">
        ` 
        })
        checkoutBag.innerHTML = out;
      }
    }
  }




   


  


  


      


