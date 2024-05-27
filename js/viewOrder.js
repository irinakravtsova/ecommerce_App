
  export function createOrderView(selector) {

    const orderNode = document.querySelector(selector);
    return {
      orderNode,
      renderOrderAddress: function(order) {
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
                <p class="delivery total-text">$ ${deliveryPrice}</p>
              </div>
              <img src="./src/images/total_line.png" alt=""> 
              <div class="sum-box">
                <p class="total__sum-text">Стоимость:</p>
                <span class="total-sum-text sum-text_usd">$ ${total} </span>
              </div>
              <img src="./src/images/total_line.png" alt="">
             </div>
          `
         orderNode.innerHTML = out;
        }
      }
  }

  export function createOrderBagView(selector) {
    const orderBagNode = document.querySelector(selector);;
      return {  
        orderBagNode,  
     
        renderOrderBag: function (findItems, bagOrder) {
           let out='';
          findItems.forEach(item => {
            const { id, model, series, price, image, descriptionShort } = item;
             out += 
            `
            <div class="big__bag__wrapper order__card-wrapper">
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
          <img src="./src/images/Line 3.png" alt="">
          `
          })
          orderBagNode.innerHTML = out; 
        }
      }
    }
      







   


  


  


      


