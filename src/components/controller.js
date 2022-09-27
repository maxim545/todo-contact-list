import Model from "./model";
import View from "./views/itemsView";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

    }

    updateItems() {
        this.model.showItems();
    }

    addContact() {
        const contactsBtn = document.querySelector('.buttons__contact');
    }

}

export default Controller;