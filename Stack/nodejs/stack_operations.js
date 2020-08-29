const Stack = require('./stack_class.js')

var stack = new Stack();  // iniilize the stack object
stack.push("value 1");  // push values to the stack
stack.push("value 2");  
stack.push("value 3");  

console.log(stack.printStackItems())  // print all items in the stack 

console.log(stack.isEmpty()) // check the stack is empty

console.log(stack.pop()) // set, and remove the top most element from the stack

console.log(stack.peek()) // get the top most value fom the stack (do not delete the value)
