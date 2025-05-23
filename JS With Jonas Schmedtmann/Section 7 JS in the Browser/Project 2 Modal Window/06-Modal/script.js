'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
const openModal = function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden'); // This is how you can remove classes from the list
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModel.length; i++) {
    btnsOpenModel[i].addEventListener('click', openModal);
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Below one is applied to the whole document, so it will work for all the buttons. No matter where they happen on the page. The Event handler will be called for all the buttons.
// The below function will be executed for any key press that happens
document.addEventListener('keydown', function (e) {
    // console.log('A Key was pressed!');
    console.log(e.key); // This will give the key that was pressed

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // This will check if the modal is not hidden and if the key pressed is Escape
        console.log('Escape was pressed!');
        // Also why we use (), because we need to execute the function, not just call it. If we don't use () it will just return the function and not execute it.
        // So we need to call the function to execute it. So we use () to call the function.
        closeModal();
    }
})
