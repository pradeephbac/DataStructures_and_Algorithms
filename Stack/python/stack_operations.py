from stack_class import Stack

stack = Stack() # iniilize the stack object
 
stack.push(10)  # push values to the stack
stack.push(20) 
stack.push(22) 

stack.printStack() # print the stack

stack.pop()   # remove the last element from the list

stack.printStack() # print the stack

stack.isEmpty()# check is Empty on the stack

stack.peek() # print the top most element in the stack