import Controller from "./controller";
import Model from "./model";
import View from "./views/itemsView";

class App {
    constructor() {
        /*         this.model = new Model()
                this.view = new View(); */
        this.controller = new Controller();
    }

    start() {
        this.controller.updateItems();
    }
}

export default App;