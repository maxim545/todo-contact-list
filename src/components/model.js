import View from "./views/itemsView";

class Model {
    constructor() {
        this.view = new View();
        this.listOfItems = JSON.parse(localStorage.getItem('items'))
    }

    showItems() {
        if (Object.keys(this.listOfItems).length) {
            this.view.renderItems(this.listOfItems)
        }
    }
}

export default Model;