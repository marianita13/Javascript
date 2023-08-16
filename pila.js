// class stack{
//     constructor(){
//         this.top=null;
//         this.size=0;
//     }
//     push(value){
//         const name = new node(value);
//         newNode.next = this.top
//         this.top = newNode
//         this.size++
//     }
// }

class Stack{
    constructor(){
        this.items=[]
    }

    isEmpty(){//Verificar si esta vacio
        return this.items.length == 0;
    }

    size(){//Retornar tamaño
        return this.items.length;
    }

    clear(){
        this.items = []
    }

    push(item){//Ingresar un dato
        this.items.push(item);
    }

    pop(){//Sacar un dato
        if(this.isEmpty()){
            return "La pila esta vacia";
        }
        return this.items.pop();
    }
    peek(){//Revisar el primer dato encontrado
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        return this.items[this.items.length - 1];

    }

}

[]

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.clear()
console.log(stack.peek())


class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class stack2{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    isEmpty(){
        return thid.size === 0;
    }
    push(value){
        const newNode = new node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop(){
        if(!this.top()){
            return "Is empty";
        }
        const popedvalue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return this.top.value;

    }
}
