const burger = document.querySelector(".burger");
const body = document.querySelector("body")

burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    body.classList.toggle("menu-shown")

})


