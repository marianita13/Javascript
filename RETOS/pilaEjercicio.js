class Nodo{
    constructor(dato){
        this.dato=dato;
        this.next=null
    }
}

class Lista{
    constructor(){
        this.head=null
    }

    append(dato){ //Agregar datos en la cola (como si fuera el primero que se agregó)
        const newNodo = new Nodo(dato);
        if (!this.head){ //Verifica si la cabeza de la pila es nula
            this.head=newNodo // Como es nula, ahora la cabeza de la pila va a ser el nuevo nodo
        }else{
            let actual = this.head; //actual va a ser la cabeza ahora
            while (actual.next){ // Mientras exista un nodo siguiente el bucle se cumplira
                actual=actual.next // dice que actual ahora sera el nodo siguiente
            }
            actual.next = newNodo // Cuando el nodo siguiente sea nulo, se pondrá el nuevo nodo
        }

    }
}