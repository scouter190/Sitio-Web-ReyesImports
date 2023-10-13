// Ejecutando funciones
document.getElementById("iconoBuscar").addEventListener("click", mostrarBuscador);
document.querySelector(".cubrirFondo").addEventListener("click", ocultarBuscador);
document.getElementById('inputBuscador').addEventListener('keyup', buscadorInterno);
// Declarando variables
var barra_busqueda = document.querySelector(".contenedorBarraBusqueda");
var cover = document.querySelector('.cubrirFondo');
var inputBuscador = document.getElementById('inputBuscador');
var cajaBusqueda = document.querySelector('.cajaBusqueda');

// Función para mostrar el buscador
function mostrarBuscador() {
    barra_busqueda.style.top = "100px";
    //aparece el recuadro en negro
    cover.style.display= "block";
    //aparecer en el input
    inputBuscador.focus();
}

//función para ocultar el buscador

function ocultarBuscador(){
    barra_busqueda.style.top= "-90px"
    cover.style.display= "none";
    //borrar texto ingresado en input cuando se oculte
    inputBuscador.value= "";
    //ocultar la caja de búsqueda al presionar enter
    cajaBusqueda.style.display= "none";
}

//Creación de filtrado de búsqueda

function buscadorInterno(){
    let filtro= inputBuscador.value.toUpperCase(); //pasar a mayúscula lo ingresado en el input
    let li= cajaBusqueda.getElementsByTagName("li"); //obtener etiquetas dentro del recuadro
    //Recorriendo elementos a filtrar mediante los 'li'
    let i;
    for(i=0; i<li.length; i++){
        let a= li[i].getElementsByTagName('a')[0]; //parámetro en 0 para que comience en 0
        let valortexto= a.textContent || a.innerText; //almacena la etiqueta 'a' y obtén el valor del texto y el inner.
        // 

        if(valortexto.toUpperCase().indexOf(filtro) > -1){ //indexOf para que la búsqueda sea organizada
            li[i].style.display= "";
            cajaBusqueda.style.display= "block";

            if(inputBuscador.value== ""){
                cajaBusqueda.style.display= "none";
                
            }
        }
        else{
            li[i].style.display= "none";
        }
    }
}

(function(){
    const listaElementos= document.querySelectorAll('.opcionesMenu');
    const lista= document.querySelector('.menu');
    const menu= document.querySelector('.iconMenu');

    const addClick= ()=> {
        listaElementos.forEach(element =>{
            element.addEventListener('click', ()=>{ 
                let subMenu= element.children[1];
                let height= 0;
                element.classList.toggle('menuActivo');
                
                //console.log(subMenu.clientHeight); //clientHeight= devuelve la altura

                if(subMenu.clientHeight=== 0){
                    height= subMenu.scrollHeight; //quiero quela variable altura tenga la altura mínima para que exista
                }

                subMenu.style.height = `${height}px`; //agregar altura

           });
        });
    }
    addClick();

    menu.addEventListener('click', ()=> lista.classList.toggle('menuMostrarLinks'));
})();