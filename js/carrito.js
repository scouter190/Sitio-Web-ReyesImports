
let datosCarrito = localStorage.getItem("datos-carrito");
if(datosCarrito == null)
{
    localStorage.setItem("datos-carrito", "[]")
}

/* Crear contador en el DOM */

let iconoCarrito = document.querySelector(".icono-carrito");
iconoCarrito.addEventListener("click", function(){
    location.href = "/pags/carrito-compras.html"
})

let iconContador = document.createElement("a");
iconContador.classList.add("icono-contador");
iconContador.style.display = "none";
iconoCarrito.append(iconContador);

validarCarrito();

// Eventos click
let allBtns = document.querySelectorAll(".info-product > button");
for (let btn of allBtns){
    btn.setAttribute("type", "button");
    btn.addEventListener("click", function(){
        let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
        let jsonParse = JSON.parse(obtenerDatosCarrito);
        jsonParse.push({
            "id": Math.floor(Math.random() * 999999999999),
            "NombreProducto": this.dataset.nombre,
            "PrecioProducto": this.dataset.precio,
            "CantidadProducto": 1
        });
        let stringParse = JSON.stringify(jsonParse); 
       localStorage.setItem ("datos-carrito", stringParse);
       validarCarrito();    
    }); 
}   
    
function validarCarrito(){  
    let obtenerDatosCarrito = localStorage.getItem("datos-carrito");
    let jsonParse = JSON.parse(obtenerDatosCarrito);
    if(jsonParse.length === 0){
        iconContador.style.display = "none";
    }else{
        if(jsonParse.length > 9) {
            iconContador.innerHTML = "9+";
        }else{
            iconContador.innerHTML = jsonParse.length;
        }
        iconContador.style.display = "";
    }
}

function pago(){
    alert("Pago realizado con éxito");
}
