
class Controller {
    constructor() {
        this.listOfItems = JSON.parse(localStorage.getItem('items'));
        this.groupNameArr = Object.keys(this.listOfItems);
    }


    addContact(name, phone, groupe) {
        const newContact = {
            id: this.listOfItems[groupe].length + 1,
            name,
            phone,
        }
        this.listOfItems[groupe].push(newContact);
        localStorage.setItem('items', JSON.stringify(this.listOfItems))
        this.toggleMenu();
    }

    deleteContact(id, groupeName) {
        const currentIndex = this.listOfItems[groupeName].findIndex(el => el.id === id);
        this.listOfItems[groupeName].splice(currentIndex, 1);
        localStorage.setItem('items', JSON.stringify(this.listOfItems))
    }

    updateContact(id, name, phone, newGroupe, oldGroupe) {
        const newContact = {
            id: this.listOfItems[newGroupe].length + 1,
            name,
            phone,
        }
        if (newGroupe !== oldGroupe) {
            const currentIndex = this.listOfItems[oldGroupe].findIndex(el => el.id === id);
            this.listOfItems[oldGroupe].splice(currentIndex, 1);
            this.listOfItems[newGroupe].push(newContact);
            localStorage.setItem('items', JSON.stringify(this.listOfItems))
        } else {
            const currentContact = this.listOfItems[newGroupe].find(el => el.id === id);
            currentContact.name = name;
            currentContact.phone = phone;
            localStorage.setItem('items', JSON.stringify(this.listOfItems))
        }
        this.toggleMenu();
    }

    updateGroupNames() {
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
            if (this.groupNameArr.includes(item)) {
                newItems[item] = this.listOfItems[item]
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

}

export default Controller; 