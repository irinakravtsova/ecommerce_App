

export function createMsgErrorCard(selector) {
    const node = document.querySelector(selector);
    return {
      node,
      renderMsgError: function() {
        const msg = 
        `<div class="error">
            <p> Упс, ошибка. Такого товара нет.</p>
         </div> `;
         this.node.insertAdjacentHTML('beforeend', msg);
    
        }
    }
}

export function createMsgErrorOrder(selector) {
  const checkoutBag = document.querySelector(selector);
  return {
    checkoutBag,
    renderMsgErrorOrder: function() {
      const msg = 
      `<div class="error">
          <p>Страница не найдена</p>
       </div> `;
       this.checkoutBag.insertAdjacentHTML('beforeend', msg);
  
      }
  }
}


