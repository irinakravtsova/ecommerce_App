
function calcBagPrice() {
  //найдем все элементы item, которые лежат в оболочке корзины
  const cartItems = document.querySelectorAll('.big__bag__item');
  const totalPriceEl = document.querySelector('.sum-text_usd');

  let totalPrice = 0;
 
  //обходим полученную коллекцию циклом forEach 
  cartItems.forEach(function(item) {
 
    //внутри каждого item  ищем количество и стоимость;
    //найди элемент, в котором содержится количество по атрибуту
    //и элемент, в котором содержится стоимость по классу
    const amountEl = item.querySelector('[data-counter]');
    const priseEl = item.querySelector('.price-text');
 

    //посчитай стоимость этого товара = возьми текст из элементов
    //переведи в число и перемнож
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priseEl.innerText);

    //посчитай общую стоимость (прибавь к текущему значению стоимость которую только что посчитал)
    // totalPrice = totalPrice + currentPrice;
    //или сокращенно
    totalPrice += currentPrice;

  })
console.log(totalPrice);
  //отрисуй тотал
// totalPriceEl.innerText = totalPrice;
    
  };

//вызови функцию после добавления товара в корзину 
//и после изменения количества товара в корзине
//и после удаления товара из корзины
