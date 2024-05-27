// popup адрес
const btnOpenAddress = document.querySelector('.js-btn-address');
const saveBtn = document.querySelector('.btn-save');
const popupName = document.querySelector('.js-popup__input-name');
const popupStreet = document.querySelector('.js-popup__input-street');
const popupCity = document.querySelector('.js-popup__input-city');
const popupPhone = document.querySelector('.js-popup__input-phone');
const popupNode = document.querySelector('.js-popup');

const inputName = document.querySelector('.input-name');
const inputStreet = document.querySelector('.input-street');
const inputCity = document.querySelector('.input-city');
const inputPhone = document.querySelector('.input-phone');

btnOpenAddress.addEventListener('click', togglePopup);

saveBtn.addEventListener('click', newNameHandler);
saveBtn.addEventListener('click', togglePopup);

const phoneMask = document.getElementById('phone-mask');
IMask (
  phoneMask,
  {mask : '+{7}(000) 000-00-00'}
);

function togglePopup() {
  popupNode.classList.toggle("popup_open");
};

function getName() {
  return popupName.value;
};

function newNameHandler() {
  const name = getName();
  inputName.innerText = name;
}

popupStreet.addEventListener('input', function() {
  inputStreet.innerText = popupStreet.value;
});
popupCity.addEventListener('input', function() {
  inputCity.innerText = popupCity.value;
});
popupPhone.addEventListener('input', function() {
   inputPhone.innerText = popupPhone.value;
});
