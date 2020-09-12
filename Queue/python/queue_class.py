class Queue:

    def __init__(self):
        self.queue = list()

    
    def enqueue(self, data):
        if data not in self.queue:
            self.queue.insert(0, data)
            return True
        return False

    def dequeue(self):
        if len(self.queue) == 0: 
            return False

        val =self.queue[0];
        self.queue.remove(val)
        return val

    def size(self):
        return len(self.queue)

    def peek(self):
        if len(self.queue) == 0: 
            return False
        return  self.queue[0]

    def isFull(self, size):
        return  len(self.queue) == size

    def printQueueElements(self): 
        elements= ''
        if len(self.queue) == 0:
            return 'Queue is empty' 
        return (self.queue)
 

#initialize the queue built based on list properties
newQueue = Queue() 

# insert operation
newQueue.enqueue("First Value")

newQueue.enqueue("Second Value")

newQueue.enqueue("Third Value")

newQueue.enqueue("Fourth Value")

# print elements
print(newQueue.printQueueElements())

# examine the queue size
print(newQueue.size())

#remove elements - pop operation on FIFO queue
print("dequeue 1=> ",newQueue.dequeue())
print("dequeue 2=> ",newQueue.dequeue())

# get the last added Item
print("Peek = ",newQueue.peek())
 
print(newQueue.isFull(3))
