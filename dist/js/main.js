const burger = document.querySelector(".burger");
const body = document.querySelector("body")

burger.addEventListener("click", function () {
    console.log('burger clicked')
    burger.classList.toggle("is-active")
    body.classList.toggle("menu-shown")
})
// Contact Form
// const form = document.querySelector('.form');