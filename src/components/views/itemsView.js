import CreateElement from "../common/createElement";

class ItemsView {
    constructor() {
        this.createEl = new CreateElement();
    }

    renderItems(items) {
        const { body } = document;
        const itemsWrapper = this.createEl.create('div', '', 'container', body);
        this.createEl.create('div', '', 'items', itemsWrapper);
        const groupNameArr = Object.keys(items)
        groupNameArr.forEach((groupName) => {
            const itemGroup = this.createEl.create('div', '', 'items__wrapper', itemsWrapper);
            this.createEl.create('div', groupName, 'items__title', itemGroup);
            items[groupName].forEach((item) => {
                const itemEL = this.createEl.create('div', '', 'item', itemGroup);
                this.createEl.create('div', item.name, 'item__name', itemEL);
                this.createEl.create('div', item.phone, 'item__name', itemEL);
                this.createEl.create('button', 'edit', 'item__btn item__btn_edit', itemEL);
                this.createEl.create('button', 'delete', 'item__btn item__btn_delete', itemEL);
            })
        });
    }

    addContact() {
        const contactsBtn = document.querySelector('.buttons__contact');

    }


}

export default ItemsView;