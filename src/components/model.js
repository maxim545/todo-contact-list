import View from "./view";

class Model {
    constructor() {
        this.view = new View();
        this.listOfItems = JSON.parse(localStorage.getItem('items'));
        this.groupNameArr = Object.keys(this.listOfItems);
    }

    createItems() {
        const contactsBtn = document.querySelector('.buttons__contact');
        const groupBtn = document.querySelector('.buttons__group');
        contactsBtn.addEventListener('click', () => {
            this.view.renderContactEditor()
        });
        groupBtn.addEventListener('click', () => {
            this.view.renderGroupEditor()
        });
        this.view.renderItems(this.listOfItems, this.groupNameArr);
    }

    handlAddGroup(data) {
        this.model.updateGroup(data)
    }
}

export default Model;