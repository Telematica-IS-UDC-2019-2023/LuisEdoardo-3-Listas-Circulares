export default class Ruta {
    constructor(){
        this.inicio = null;
    }

    agregarBase(nuevo){
        if(this.inicio === null){
            this.inicio = nuevo;
            this.inicio.siguiente = this.inicio;
            this.inicio.anterior = this.inicio;
        } else{
            let aux = this.inicio;
            while(aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            aux.siguiente.anterior = aux;
            aux.siguiente.siguiente = this.inicio;
            this.inicio.anterior = nuevo;
        }
    }

    buscarBase(nombre){
        let aux = this.inicio;
        if (aux != null){
            while(aux.nombre != nombre && aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
            if(aux.nombre === nombre){
                return aux;
            } else {
                alert('No se encontro la base indicada');
            }
        }
    }

    eliminarBase(nombre){
        let aux = this.inicio;

        if(this.inicio.nombre === nombre  && this.inicio.siguiente === this.inicio){
            this.inicio = null;
        } else if (this.inicio.nombre === nombre){
            this.inicio.siguiente.anterior = this.inicio.anterior;
            this.inicio.anterior.siguiente = this.inicio.siguiente;
            this.inicio = this.inicio.siguiente;
        } else {
            while (aux.siguiente.nombre != nombre && aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }

            if (aux.siguiente.nombre == nombre){
                aux.siguiente = aux.siguiente.siguiente;
                aux.siguiente.anterior = aux;
            } else{
                alert('No se encontro el producto');
            }
        }
    }

    insertarBase(nuevo, posicion){
        let aux = this.inicio;
        if (posicion === 1){
            nuevo.anterior = aux.anterior;
            nuevo.anterior.siguiente = nuevo;
            nuevo.siguiente = aux;
            aux.anterior = nuevo;
            this.inicio = nuevo;
        } else {
            let i = 1;
            while (i != posicion){
                if (aux.siguiente != this.inicio){
                    aux = aux.siguiente;
                    i++;
                } else {
                    alert('Posición inválida');
                    break
                }
            } 
    
            if (i === posicion){
                nuevo.anterior = aux.anterior;
                nuevo.siguiente = aux;
                nuevo.anterior.siguiente = nuevo;
                nuevo.siguiente.anterior = nuevo;
            }
        }
    }

    listarBases(){
        let concat = "";
        let aux = this.inicio;
        concat = aux.nombre + " ";
        while (aux.siguiente != this.inicio){
            concat += aux.siguiente.nombre; + " "
            aux = aux.siguiente;
        }
        return concat;
    }

    crearRecorrido(inicio, horaI, horaF){
        let aux = this.buscarBase(inicio);
        let concat = aux.nombre + " " + horaI.getHours() + ":" + horaI.getMinutes();

        while(horaI.getHours() < horaF.getHours() || horaI.getMinutes() < horaF.getMinutes()){
            horaI.setMinutes(horaI.getMinutes() + aux.siguiente.minutos);
            aux = aux.siguiente;
            concat += " // " + aux.nombre + " " + horaI.getHours() + ":" + horaI.getMinutes();
        }
        return concat;
    }
}