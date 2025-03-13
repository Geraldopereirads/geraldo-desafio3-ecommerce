function showMenu() {
    const menuButton = document.querySelector("#menu-button"); // Agora seleciona o botão corretamente
    const menuList = document.querySelector(".container__header--menu");

    menuButton.addEventListener("click", () => {
        menuList.classList.toggle("show__menu");
    });
}

showMenu();
