class Stack: 
    items = [];

    def __init__(self):
        self.items = []

    def  push(self, element): 
        self.items.append(element) 

    def  pop(self): 
        if len(self.items) == 0:
            print('Can not pop form an empty list')
        self.items.pop();
        print('Last item has been poped from the list')

    def  printStack(self): 
        for i in self.items:
            print(i)

    def isEmpty(self):
        print(len(self.items) == 0)

    def peek(self):
        if len(self.items) == 0:
            print('Stack is Empty')
        print(self.items[len(self.items) - 1]) ;
        


    