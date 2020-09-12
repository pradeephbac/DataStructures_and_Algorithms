// Queue class
class Queue {
    // Array is used to implement Queue
    constructor() {
      this.items = [];
    }

    enqueue(data){
        if(this.items.indexOf(data) == -1){
            this.items.push(data)
            return true;
        }
        return false 
    }

    dequeue(){
        if(this.items.length == 0){ 
            return false;
        }
        return this.items.splice(this.items.length-1, 1) 
    }

    peek(){
        if(this.items.length > 0){
            return this.items[this.items.length-1]
        }
    }

    isFull(size){
        return this.items.length === size
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length;
    }

    printQueueElements(){
        return this.items;
    }

  
}
 
let newQueue = new Queue()

console.log(newQueue.isEmpty())

newQueue.enqueue("First Value")
newQueue.enqueue("Second Value")
newQueue.enqueue("Third Value")
newQueue.enqueue("Fourth Value")


console.log(newQueue.printQueueElements())

console.log("Peek = ",newQueue.peek())

console.log("Dequeue Element > ",newQueue.dequeue())

console.log("Dequeue Element > ",newQueue.dequeue()) 

console.log(newQueue.isFull(3))



