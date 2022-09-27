const headerMenu = document.querySelector('.header__menu');
const contactsBtn = document.querySelector('.buttons__contact');
const groupBtn = document.querySelector('.buttons__group');
let menuIsOpen = false;


function openMenu() {
    headerMenu.classList.toggle("header__menu_active")
    menuIsOpen = !menuIsOpen
}

contactsBtn.addEventListener("click", openMenu)
groupBtn.addEventListener("click", openMenu)

window.addEventListener('click', function (e) {
    if (!headerMenu.contains(e.target) && (!contactsBtn.contains(e.target)) && menuIsOpen) { openMenu() }
})