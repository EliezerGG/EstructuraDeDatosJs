class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length ===0 ){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;

        return this;
    }
    dequeue(){
        //Eliminar el primer elemento
        if(this.length === 0){
            const msg = 'No hay elemento en su Queue';
            return msg;
        }else if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
    
}

const myStack = new Stack();

