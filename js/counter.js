
window.addEventListener('click', function(event) {
  let counter;
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
  
    const counterWrapper = event.target.closest('.bag__counter');

   counter = counterWrapper.querySelector('[data-counter]');
 }

  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === 'minus') {
    
    if (parseInt(counter.innerText) > 1) {

      counter.innerText = --counter.innerText;

    } else if (event.target.closest('.bag__counter') && parseInt(counter.innerText) === 1) {

      event.target.closest('.big__bag__item').remove();

      // toggleCartStatus();   
      //пересчет стоимости после удаления
      localStorage.setItem('bag', JSON.stringify(bag));
      calcBagPrice();
    }
    
    
  }

  //пересчет суммы при клике на +/-
  if (event.target.hasAttribute('data-action') && event.target.closest('.big__bag__wrapper')) {
    calcBagPrice()
  }
})


