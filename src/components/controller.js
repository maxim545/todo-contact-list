
class Controller {
    constructor() {
    }


    addContact(name, phone, groupe) {
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const newContact = {
            id: listOfItems[groupe].length,
            name,
            phone,
        }
        listOfItems[groupe].push(newContact);
        localStorage.setItem('items', JSON.stringify(listOfItems))
        this.toggleMenu();
    }

    deleteContact(id, groupeName) {
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const currentIndex = listOfItems[groupeName].findIndex(el => el.id === id);
        listOfItems[groupeName].splice(currentIndex, 1);
        localStorage.setItem('items', JSON.stringify(listOfItems))
    }

    updateContact(id, name, phone, newGroupe, oldGroupe) {
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const newContact = {
            id: listOfItems[newGroupe].length,
            name,
            phone,
        }
        if (newGroupe !== oldGroupe) {
            const currentIndex = listOfItems[oldGroupe].findIndex(el => el.id === id);
            listOfItems[oldGroupe].splice(currentIndex, 1);
            listOfItems[newGroupe].push(newContact);
            localStorage.setItem('items', JSON.stringify(listOfItems))
        } else {
            const currentContact = listOfItems[newGroupe].find(el => el.id === id);
            currentContact.name = name;
            currentContact.phone = phone;
            localStorage.setItem('items', JSON.stringify(listOfItems))
        }
        this.toggleMenu();
    }

    updateGroupNames() {
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const groupNameArr = Object.keys(listOfItems);
        const allInputs = document.querySelectorAll('.menu__input');
        const inputValues = [];
        allInputs.forEach(input => {
            if (input.value) {
                inputValues.push(input.value);
            }
        })
        const newNameArr = new Set([...inputValues])
        const newItems = {};
        newNameArr.forEach(item => {
            if (groupNameArr.includes(item)) {
                newItems[item] = listOfItems[item]
            } else {
                newItems[item] = [];
            }
        })
        localStorage.setItem('items', JSON.stringify(newItems))
        this.toggleMenu();
    }


    toggleMenu() {
        const blur = document.querySelector('.blur');
        blur.classList.toggle("active")
        const headerMenu = document.querySelector('.header__menu');
        const contactsBtn = document.querySelector('.buttons__contact');
        const groupBtn = document.querySelector('.buttons__group');
        let menuIsOpen = false;
        headerMenu.classList.toggle("header__menu_active")
        menuIsOpen = !menuIsOpen
    }

    makeNameMask(e, element, btn) {
        const value = e.target.value;
        const valueArr = value.split(" ").filter(str => str.trim() != '')
        if (valueArr.length !== 3 || value.length <= 9 || /\d/.test(value)) {
            element.innerHTML = 'Введите ФИО в формате "Фамилия Имя Отчество"';
            btn.disabled = true;
        } else {
            element.innerHTML = '';
            btn.disabled = false;

        }
    }

    makePhoneMask(e, element, btn) {
        const matrix = "+7 (___) ___ - __ - __";
        const def = matrix.replace(/\D/g, "");
        let i = 0;
        let val = e.target.value.replace(/\D/g, "");
        if (def.length >= val.length) { val = def };
        e.target.value = matrix.replace(/./g, (a) =>
            /[_\d]/.test(a) && i < val.length ? val.charAt(i++) :
                i >= val.length ? "" : a);
        if (e.target.value.length !== 22) {
            element.innerHTML = 'Введите номер в формате +7 (XXX) XXX-XX-XX';
            btn.disabled = true;
        } else {
            element.innerHTML = ''
            btn.disabled = false;
        }
    }

}

export default Controller; 