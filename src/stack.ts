export class Stack {
    private storage: Array<any>;

    constructor() {
        this.storage = [];
    }

    push(object: any) {
        this.storage.push(object);
    }

    pop(): any {
        if(!this.storage.length){
            throw Error("Can not pop from empty stack");
        }
        return this.storage.pop();
    }
}
