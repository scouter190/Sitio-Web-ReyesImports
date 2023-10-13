
mostrarTablaCarrito();


function mostrarTablaCarrito(){
    let tablaCarritoContenido = document.querySelector("#tabla-carrito-contenido");
    let totalElement = document.querySelector("#total");
    let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
    let jsonParse = JSON.parse(obtenerDatosCarrito);
    validarTablaCarritoVacio();
    let indice = 0;
    let total = 0;
    for (const itemProducto of jsonParse) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let btnEliminar = document.createElement("button");
        let btnEliminarIcono = document.createElement("i");
        btnEliminarIcono.classList.add("fa-solid");
        btnEliminarIcono.classList.add("fa-remove");
        btnEliminar.dataset.id = itemProducto["id"];
        btnEliminar.setAttribute("type", "button");
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.addEventListener("click", function(){
            eliminarProducto(this.dataset.id);
        });
        btnEliminar.append(btnEliminarIcono);
        td1.innerHTML = indice + 1;
        td2.innerHTML = itemProducto["NombreProducto"];
        td3.innerHTML = "S/" + itemProducto["PrecioProducto"];
        let input = document.createElement("input");
        input.dataset.index = indice;
        input.value = itemProducto["CantidadProducto"]
        input.addEventListener("change", function(){
            let nuevoPrecio = this.value;
            guardarNuevaCantidadEnLocalStorage(this.dataset.index, nuevoPrecio);
            let totalRecalculado = reCalcularTotal();
            totalElement.innerHTML = "S/ " + totalRecalculado;
        });
        td4.append(input);
        td5.append(btnEliminar);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.id = "tr" + itemProducto["id"];
        tablaCarritoContenido.append(tr);
        indice++;
        total += itemProducto["PrecioProducto"] * itemProducto["CantidadProducto"];
    }
    totalElement.innerHTML = "S/ " + total;
}

function reCalcularTotal(){
    let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
    let jsonParse = JSON.parse(obtenerDatosCarrito);
    let total = 0;
    for (const itemProducto of jsonParse) {
        total += itemProducto["PrecioProducto"] * itemProducto["CantidadProducto"];
    }
    return total;
}

function guardarNuevaCantidadEnLocalStorage(index, nuevaCantidad){
    let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
    let jsonParse = JSON.parse(obtenerDatosCarrito);
    let producto = jsonParse[index];
    producto["CantidadProducto"] = nuevaCantidad;
    let stringParse = JSON.stringify(jsonParse); 
    localStorage.setItem("datos-carrito", stringParse);
}


function eliminarProducto(id){
    //Eliminar arreglo y del localstorage
    let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
    let jsonParse = JSON.parse(obtenerDatosCarrito);

    let index = 0;
    for (const itemProducto of jsonParse) {
        if(itemProducto["id"] === parseInt(id))
        {
            jsonParse.splice(index, 1);
        }
        index++;
    } 
    
    let stringParse = JSON.stringify(jsonParse); 
    localStorage.setItem("datos-carrito", stringParse);

    //Eliminar del dom
    let elementoFila = document.getElementById("tr" + id);
    elementoFila.remove();

    //desde carrito.js -> Recalcular datos de carrito
    validarCarrito();
    validarTablaCarritoVacio();
    //recalcular total
    let totalElement = document.querySelector("#total");
    let totalRecalculado = reCalcularTotal();
    totalElement.innerHTML = "S/ " + totalRecalculado;
}


function validarTablaCarritoVacio(){  
    let trTablaVacia = document.querySelector("#tabla-carrito-contenido > tr");
    let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
    let jsonParse = JSON.parse(obtenerDatosCarrito);
    if(jsonParse.length === 0){
        trTablaVacia.style.display = "";
    }else{
        trTablaVacia.style.display = "none";
    }
}
