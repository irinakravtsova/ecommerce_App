const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');

const btnOpenNode = document.querySelector('.js-btn-address');
console.log(btnOpenNode);
const popupContentNode = document.querySelector('.js-popup__content')
const popupName = document.querySelector('.js-popup__input-name');
console.log(popupName.value);
const popupStreet = document.querySelector('.js-popup__input-street');
const popupcity = document.querySelector('.js-popup__input-city');
const popupPhone = document.querySelector('.js-popup__input-phone');
const inputName = document.querySelector('.input-name');
console.log(inputName);
const inputStreet = document.querySelector('.input-street');
const inpuyCity = document.querySelector('.input-city');
const inoutPhone = document.querySelector('.input-phone');
const saveBtn = document.querySelector('.btn-save');
console.log(saveBtn);


btnOpenNode.addEventListener('click', togglePopup);


// popupNode.addEventListener('click', (event) => {
//     const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

//     if (isClickOutsideContent) {
//         togglePopup();
//     }
// })

function togglePopup() {
    console.log('click');
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

saveBtn.addEventListener('click', function() {
    console.log('click');
    const name = popupName.value;
    console.log(name);
    inputName.innerText = name;

    console.log(name); 
})
