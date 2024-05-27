
export function createProductDetail(selector) { //передай действие, которое нужно сделать при клике на movie
  const node = document.querySelector(selector);
   return {
    node,
    renderInfoItem: function(item) {
      const { id, model, series, price, image, description, rating, descriptionShort } = item;
      const productItem = 
      `
      <div class="card__content" data-product-id="${id}" >
      <div class="card__image">
        <div class="card__image-wrapper">
          <img class="product__image" src="${image}" alt="">
        </div>
        
      </div>
      <div class="card__text">
        <h1>${model}</h1>
        <h2 class="subtitle" >${series}</h2>
        <div class="rating">
           <img class="" src="./src/images/rating_4.5.png" alt="">
        </div>
        <div class="price">$ ${price}</div>
        <p class="mini-content">${descriptionShort}</p>
        <div class="card__btn-wrapper"
          <button class="add-bag" data-action="addBag" data-id=${id}">
            <img data-action="addBag" data-id=${id} src="./src/images/BtnBag_prodactCard.png">
          </button> 
         
        </div>
      </div>
    </div>
    <div class="card__line">
      <img src="./src/images/Line 2.png" alt="">
    </div>
    <div class="card__description">
      <h3>Описание</h3>
      <p class="description">${description}</p>
    
    </div>
    
      `
      node.insertAdjacentHTML('beforeend', productItem);
    }
  }
}

