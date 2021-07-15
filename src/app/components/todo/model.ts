export class Model {
    user : string
    items: any
    lastName : string
    constructor() {
    this.lastName = 'Tarasov'
    this.user = "Ilya";
    this.items = [new TodoItem("Buy Flowers", false),
    new TodoItem("Get Shoes", false),
    new TodoItem("Collect Tickets", false),
    new TodoItem("Call Joe", false)]
    }
    }
    export class TodoItem {
    action;
    done;
    constructor(action : string, done : boolean) {
    this.action = action;
    this.done = done;
    }
    }