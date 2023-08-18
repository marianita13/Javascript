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

    prepend(dato){
        const newNode = new Node(dato); // Se crea una variable con la informacion del nuevo nodo
        newNode.next=this.head; // decimos que la cabeza de la pila es el nodo siguiente al nuevo
        this.head=newNode; // convertimos el nuevo nodo en la cabeza de la pila
    }

    delete(dato){ //Eliminar nodos
        if(!this.head){ // Verifica si la cabeza de la pila es nula osea si esta vacia
            return; // Como esta vacia returna sin nada porque no existen nodos en la pila
        }
        if(this.head.dato === dato){ //Si los datos a borrar se encuentran en la cabeza
            this.head = this.head.next; // Como son iguales, reemplazamos la cabeza de la pila con el nodo que le sigue, eliminando el nodo
            return // La función retorna
        }
        let actual = this.head; //actual va a ser la cabeza ahora
        while(actual.next){ // Mientras exista un nodo siguiente el bucle se cumplira
            if(actual.next.dato === dato){ // Busca entre los nodos y la compara con el dato propuesto
                actual.next = actual.next.next; // Se actualiza el puntero. Ya no mira al nodo que queremos eliminar, sino al nodo siguiente
                break; //Usamos el break para que no siga recorriendo la pila
            }
            actual = actual.next; // Ahora decimos que el nodo que debe ir ahi. debe ser el siguiente al que eliminamos
        }
    }

    display(){ // Mostrar los datos dentro de los nodos
        let actual = this.head; // Actual será la cabeza de la pila
        while (actual){ // Mientras actual no sea nulo
            console.log(actual.data); // Imprimira los datos dentro del nodo
            actual = actual.next // Actualiza para que vaya al siguiente nodo
        }
    }
}
