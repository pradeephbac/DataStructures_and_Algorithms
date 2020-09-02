class Stack: 
    items = [];

    def __init__(self):
        self.items = []

    def push(self, element): 
        self.items.append(element) 

    def pop(self): 
        if len(self.items) == 0:
            print('Can not pop form an empty list')
            return None
        print('Last item has been poped from the list')
        return self.items.pop();

    def printStack(self): 
        for i in self.items:
            print(i)

    def isEmpty(self):
        retun len(self.items) == 0

    def peek(self):
        if len(self.items) == 0:
            print('Stack is Empty')
            return None
        print(self.items[len(self.items) - 1]) ;
        return self.items[len(self.items) - 1]
        


    
