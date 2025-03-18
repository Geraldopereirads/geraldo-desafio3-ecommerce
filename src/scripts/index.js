function showMenu() {
    const menuButton = document.querySelector("#menu-button"); // Agora seleciona o botão corretamente
    const menuList = document.querySelector(".container__header--menu");

    menuButton.addEventListener("click", () => {
        menuList.classList.toggle("show__menu");
    });
}

showMenu();


const email = document.querySelector("#email");
const resultMessage = document.querySelector("#resultMessage");

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = email.value;
});


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};