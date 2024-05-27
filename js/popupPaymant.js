// popup оплата
// export function createPopupPaumant() {
//   const radios = document.querySelectorAll('input[name="r"]'); 
//   const saveBtn = document.querySelector('.btn-save');
//   const btnChengePaymant = document.querySelector('.btn-paymant');
  
//   const btnOpenPayment = document.querySelector('.js-btn__payment');
//   const popupPaymentNode = document.querySelector('.js-popup-payment');
//   const inputPaymant = document.querySelector('.input-payment');

//   btnOpenPayment.addEventListener('click', togglePopupPayment);
//   btnChengePaymant.addEventListener('click', togglePopupPayment);
//   btnChengePaymant.addEventListener('click', chengePaymatn);
 

//   return { 
//     togglePopupPayment: function() {
//       popupPaymentNode.classList.toggle("popup__payment_open");
//     },
//     chengePaymatn: function() {
     
//       for (let radio of radios) {
//         if (radio.checked) {
//           inputPaymant.innerText = radio.value;
//         }
//       }

//     }
//   }
// }

  




const radios = document.querySelectorAll('input[name="r"]'); 
const saveBtn = document.querySelector('.btn-save');
const btnChangePaymant = document.querySelector('.btn-paymant');

const btnOpenPayment = document.querySelector('.js-btn__payment');
const popupPaymentNode = document.querySelector('.js-popup-payment');
const inputPaymant = document.querySelector('.input-payment');

btnOpenPayment.addEventListener('click', togglePopupPayment);
btnChangePaymant.addEventListener('click', togglePopupPayment);
btnChangePaymant.addEventListener('click', changePatmant);


function togglePopupPayment() {
  popupPaymentNode.classList.toggle("popup__payment_open");
};

function changePatmant() {
  for (let radio of radios) {
    if (radio.checked) {
      inputPaymant.innerText = radio.value;
    }
  }
};

// btnChengePaymant.addEventListener('click', function () {
//   for (let radio of radios) {
//     if (radio.checked) {
//       inputPaymant.innerText = radio.value;
//     }
//   }
// })