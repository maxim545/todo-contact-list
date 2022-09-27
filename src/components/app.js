import Model from "./model";
class App {
    constructor() {
        this.model = new Model();
    }

    start() {
        this.model.createItems();
    }
}

export default App;