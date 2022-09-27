import CreateElement from "./common/createElement";
import Controller from "./controller";

class View {
    constructor() {
        this.controller = new Controller()
        this.createEl = new CreateElement();
    }

    renderItems(items, groupNameArr) {
        const { body } = document;
        const itemsWrapper = this.createEl.create('div', '', 'container', body);
        this.createEl.create('div', '', 'items', itemsWrapper);
        groupNameArr.forEach((groupName) => {
            const itemGroup = this.createEl.create('div', '', 'items__wrapper', itemsWrapper);
            this.createEl.create('div', groupName, 'items__title', itemGroup);
            items[groupName].forEach((item) => {
                const itemEL = this.createEl.create('div', '', 'item', itemGroup);
                this.createEl.create('div', item.name, 'item__name', itemEL);
                this.createEl.create('div', item.phone, 'item__name', itemEL);
                const editBtn = this.createEl.create('button', 'edit', 'item__btn item__btn_edit', itemEL);
                const deleteBtn = this.createEl.create('button', 'delete', 'item__btn item__btn_delete', itemEL);
                editBtn.addEventListener('click', () => {
                    this.renderContactEditor(groupNameArr, item.id, item.name, item.phone, groupName);
                })
                deleteBtn.addEventListener('click', () => {
                    itemGroup.removeChild(itemEL);
                    this.controller.deleteContact(item.id, groupName)
                })
            })
        });
    }

    renderMenu(title) {
        const headerMenu = document.querySelector('.header__menu');
        if (headerMenu) {
            headerMenu.innerHTML = '';
            const menuWrapper = this.createEl.create('div', '', 'menu__wrapper', headerMenu);
            const menuTop = this.createEl.create('div', '', 'menu__top', menuWrapper);
            this.createEl.create('div', title, 'menu__title', menuTop);
            this.createEl.create('button', 'close', 'menu__button', menuTop);
            return [headerMenu, menuWrapper]
        }
    }

    renderContactEditor(groupNameArr, id, name, phone, groupName) {
        this.controller.openMenu();
        const [headerMenu, menuWrapper] = this.renderMenu('Добавление контакта');
        if (headerMenu) {
            const menuCenter = this.createEl.create('div', '', 'menu__center', menuWrapper);
            const inputName = this.createEl.create('input', '', 'menu__input', menuCenter);
            if (name) { inputName.value = name; }
            const inputPhone = this.createEl.create('input', '', 'menu__input', menuCenter);
            if (phone) { inputPhone.value = phone; }
            const select = this.createEl.create('select', '', 'menu__select', menuCenter);
            this.createEl.create('option', 'Выберите группу', 'menu__option', select);
            groupNameArr.forEach(name => {
                this.createEl.create('option', name, 'menu__option', select);
            })
            if (groupName) { select.value = groupName }
            const menuBottom = this.createEl.create('div', '', 'menu__bottom', menuWrapper);
            const saveBtn = this.createEl.create('button', 'Сохранить', 'menu__btn', menuBottom);
            if (id) {
                saveBtn.addEventListener('click', () => {
                    if (inputName.value && inputPhone.value && select.value !== 'Выберите группу') {
                        this.controller.updateContact(id, inputName.value, inputPhone.value, select.value, groupName);
                    }
                })
            } else {
                saveBtn.addEventListener('click', () => {
                    if (inputName.value && inputPhone.value && select.value !== 'Выберите группу') {
                        this.controller.addContact(inputName.value, inputPhone.value, select.value);
                    }
                })
            }
        }
    }

    renderGroupEditor(groupNameArr) {
        this.controller.openMenu();
        const [headerMenu, menuWrapper] = this.renderMenu('Добавление группы');
        let inputValues = [];
        if (headerMenu) {
            const menuCenter = this.createEl.create('div', '', 'menu__center', menuWrapper);
            const menuBottom = this.createEl.create('div', '', 'menu__bottom', menuWrapper);
            groupNameArr.forEach(name => {
                const menuItem = this.createEl.create('div', '', 'menu__item', menuCenter);
                const input = this.createEl.create('input', '', 'menu__input', menuItem);
                input.type = 'text';
                input.disabled = true
                input.value = name;
                const deletNameBtn = this.createEl.create('button', 'del', 'menu__button', menuItem);
                deletNameBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menuCenter.removeChild(menuItem);
                });
            })
            const addGroupBtn = this.createEl.create('button', 'Добавить', 'menu__btn', menuBottom);
            const saveGroupeBtn = this.createEl.create('button', 'Сохранить', 'menu__btn menu__btn_save', menuBottom);
            addGroupBtn.addEventListener('click', () => {
                const menuItem = this.createEl.create('div', '', 'menu__item', menuCenter);
                const input = this.createEl.create('input', '', 'menu__input', menuItem);
                input.type = 'text';
                const deletNameBtn = this.createEl.create('button', 'del', 'menu__button', menuItem);
                deletNameBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menuCenter.removeChild(menuItem);
                })
                menuCenter.append(menuItem);
            })
            saveGroupeBtn.addEventListener('click', () => {
                const allInputs = document.querySelectorAll('.menu__input');
                inputValues = [];
                allInputs.forEach(input => {
                    if (input.value) {
                        inputValues.push(input.value);
                    }
                })
                this.controller.updateGroupNames(inputValues)
            })
        }
    }

}

export default View;