function createStack() {
    let items = [];   // in js if you dont declare a variable even inside a function then it will be considered as global variable by default;
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        },
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined