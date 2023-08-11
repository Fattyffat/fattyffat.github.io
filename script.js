'use strict';

const blur = document.querySelector(".blur");
const overlay = document.querySelector(".panel");
const buttonsToOpenModal = document.querySelectorAll(".pricing-button");
const closeXButton = document.querySelector(".close");



for (let i = 0; i < buttonsToOpenModal.length; i++) {

    buttonsToOpenModal[i].addEventListener("click", () => {


        overlay.classList.remove("hidden");
        blur.classList.remove("hidden");


    })


}

blur.addEventListener("click", () =>  {


    overlay.classList.add("hidden");
    blur.classList.add("hidden");



})

closeXButton.addEventListener("click", () => {

    overlay.classList.add("hidden");
    blur.classList.add("hidden");

})