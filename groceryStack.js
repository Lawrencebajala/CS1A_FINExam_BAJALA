let groceryStack = [];
const stackSize = 5;

function peek() {
  return groceryStack.length > 0;
}

function push(item) {
    if (groceryStack.length < stackSize) {
        groceryStack.push(item);
        console.log("Stack after push:", groceryStack);
    } else {
        console.log("Stack is full!");
    }
}

function pop() {
  if (peek()) {
    let poppedItem = groceryStack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack after pop:", groceryStack);
  } else {
    console.log("Stack is empty!");
  }
}

for (let i = 0; i < stackSize; i++) {
  let item = prompt("Enter a grocery item:");
  push(item);
}

pop();
