import CreateElement from "./common/createElement";
import Controller from "./controller";

class View {
    constructor() {
        this.controller = new Controller()
        this.createEl = new CreateElement();
    }

    renderItems(items, groupNameArr) {
        const itemsElement = document.querySelector('.tabs');
        if (groupNameArr.length) {
            itemsElement.innerHTML = '';
            const itemGroup = this.createEl.create('div', '', 'tabs__wrapper', itemsElement);
            groupNameArr.forEach((groupName, i) => {
                const itemEL = this.createEl.create('div', '', 'tab', itemGroup);
                const input = this.createEl.create('input', '', 'tab__input', itemEL);
                input.type = 'checkbox';
                input.id = `tab_${i}`;
                const label = this.createEl.create('label', '', 'tab__label', itemEL);
                label.htmlFor = `tab_${i}`;
                this.createEl.create('div', groupName, 'tab__header', label);
                const content = this.createEl.create('div', '', 'tab__content', itemEL);
                if (!items[groupName].length) {
                    this.createEl.create('div', `Список ${groupName.toLowerCase()} пуст`, 'tab__item', content);
                } else {
                    items[groupName].forEach((item) => {
                        const contactEl = this.createEl.create('div', '', 'tab__item item', content);
                        this.createEl.create('div', item.name, 'item__name', contactEl);
                        this.createEl.create('div', item.phone, 'item__phone', contactEl);
                        const itemBtns = this.createEl.create('div', '', 'item__btns', contactEl);
                        const editBtn = this.createEl.create('button', '', 'btn btn_edit item__btn', itemBtns);
                        const deleteBtn = this.createEl.create('button', '', 'btn btn_delete item__btn', itemBtns);
                        editBtn.addEventListener('click', () => {
                            this.renderContactEditor(item.id, item.name, item.phone, groupName);
                        })
                        deleteBtn.addEventListener('click', () => {
                            content.removeChild(contactEl);
                            this.controller.deleteContact(item.id, groupName);
                            if (!item.id) {
                                this.createEl.create('div', `Список ${groupName.toLowerCase()} пуст`, 'tab__item', content);
                            }
                        })
                    })
                }
            });
        } else {
            itemsElement.innerHTML = '';
            this.createEl.create('div', 'Список контактов пуст', 'tabs__message', itemsElement);
        }
    }

    reRenderItems() {
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const groupNameArr = Object.keys(listOfItems);
        this.renderItems(listOfItems, groupNameArr)
    }

    renderMenu(title) {
        const headerMenu = document.querySelector('.header__menu');
        if (headerMenu) {
            headerMenu.innerHTML = '';
            const menuWrapper = this.createEl.create('div', '', 'menu__wrapper', headerMenu);
            const menuTop = this.createEl.create('div', '', 'menu__top ', menuWrapper);
            this.createEl.create('div', title, 'menu__title', menuTop);
            const closeMenuBtn = this.createEl.create('button', '', 'btn menu__button menu__button_top', menuTop);
            closeMenuBtn.addEventListener('click', () => {
                this.controller.toggleMenu();
            })
            return [headerMenu, menuWrapper]
        }
    }

    renderContactEditor(id, name, phone, groupName) {
        this.controller.toggleMenu();
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const groupNameArr = Object.keys(listOfItems);
        const [headerMenu, menuWrapper] = this.renderMenu('Добавление контакта');
        if (headerMenu) {
            const menuCenter = this.createEl.create('div', '', 'menu__center', menuWrapper);
            const menuItemName = this.createEl.create('div', '', 'menu__item', menuCenter);
            const inputName = this.createEl.create('input', '', 'menu__input', menuItemName);
            inputName.placeholder = 'Введите ФИО';
            const nameSubtitle = this.createEl.create('p', '', 'menu__subtitle', menuItemName);
            if (name) { inputName.value = name; }

            const menuItemPhone = this.createEl.create('div', '', 'menu__item', menuCenter);
            const inputPhone = this.createEl.create('input', '', 'menu__input', menuItemPhone);
            inputPhone.placeholder = 'Введите номер';
            const phoneSubtitle = this.createEl.create('p', '', 'menu__subtitle', menuItemPhone);
            if (phone) { inputPhone.value = phone; }

            const select = this.createEl.create('select', '', 'menu__select', menuCenter);
            this.createEl.create('option', 'Выберите группу', 'menu__option', select);
            groupNameArr.forEach(name => {
                this.createEl.create('option', name, 'menu__option', select);
            })
            if (groupName) { select.value = groupName; }
            const menuBottom = this.createEl.create('div', '', 'menu__bottom', menuWrapper);
            const saveBtn = this.createEl.create('button', 'Сохранить', 'btn btn_blue menu__btn', menuBottom);
            const btnSubtitle = this.createEl.create('p', '', 'menu__subtitle', menuBottom);
            inputName.addEventListener('input', (e) => { this.controller.makeNameMask(e, nameSubtitle, saveBtn) })
            inputPhone.addEventListener('input', (e) => { this.controller.makePhoneMask(e, phoneSubtitle, saveBtn) })
            saveBtn.addEventListener('click', () => {
                if (inputName.value && inputPhone.value && select.value !== 'Выберите группу') {
                    if (id) {
                        this.controller.updateContact(id, inputName.value, inputPhone.value, select.value, groupName);
                    } else {
                        this.controller.addContact(inputName.value, inputPhone.value, select.value);
                    }
                    this.reRenderItems();
                } else {
                    btnSubtitle.innerHTML = 'Заполните все поля'
                }
            })
        }
    }

    renderGroupEditor() {
        const listOfItems = JSON.parse(localStorage.getItem('items'));
        const groupNameArr = Object.keys(listOfItems);
        this.controller.toggleMenu();
        const [headerMenu, menuWrapper] = this.renderMenu('Добавление группы');
        if (headerMenu) {
            const menuCenter = this.createEl.create('div', '', 'menu__center', menuWrapper);
            const menuBottom = this.createEl.create('div', '', 'menu__bottom', menuWrapper);
            groupNameArr.forEach(name => {
                const menuItem = this.createEl.create('div', '', 'menu__item', menuCenter);
                const input = this.createEl.create('input', '', 'menu__input menu__input_groupe', menuItem);
                input.type = 'text';
                input.disabled = true
                input.value = name;
                const deletNameBtn = this.createEl.create('button', '', 'btn btn_delete menu__button', menuItem);
                deletNameBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menuCenter.removeChild(menuItem);
                });
            })
            const addGroupBtn = this.createEl.create('button', 'Добавить', 'btn menu__btn menu__btn_add', menuBottom);
            const saveGroupeBtn = this.createEl.create('button', 'Сохранить', 'btn btn_blue menu__btn', menuBottom);
            addGroupBtn.addEventListener('click', () => {
                const menuItem = this.createEl.create('div', '', 'menu__item', menuCenter);
                const input = this.createEl.create('input', '', 'menu__input menu__input_groupe', menuItem);
                input.type = 'text';
                input.placeholder = 'Ввведите название'
                const deletNameBtn = this.createEl.create('button', '', 'btn btn_delete menu__button ', menuItem);
                deletNameBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menuCenter.removeChild(menuItem);
                })
                menuCenter.append(menuItem);
            })
            saveGroupeBtn.addEventListener('click', () => {
                this.controller.updateGroupNames();
                this.reRenderItems();
            })
        }
    }

}

export default View;