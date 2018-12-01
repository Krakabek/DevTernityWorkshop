import {Stack} from "./stack";

describe("StackShould", () => {
    let stack: Stack;
    const item1 = {foo: "bar"};
    const item2 = {foo: "baz"};
    const items = [1, 2, 3];

    beforeEach(() => {
        stack = new Stack();
    });

    it("pop pushed item", () => {
        stack.push(item1);
        expect(stack.pop()).toEqual(item1);
    });


    it("pop last pushed item", () => {
        stack.push(item1);
        stack.push(item2);

        expect(stack.pop()).toEqual(item2);
    });

    it("throw an error if popped when empty", () => {
        expect(() => stack.pop()).toThrow();
    });

    it("pop pushed items in reverse order", () => {

        for (let i = 0; i < items.length; i++) {
            stack.push(items[i]);
        }

        for (let i = items.length - 1; i >= 0; i--) {
            expect(stack.pop()).toEqual(items[i]);
        }
    })
});
