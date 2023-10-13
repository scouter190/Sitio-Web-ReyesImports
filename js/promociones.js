//---------------------PROMOCIONES IMG//
const cards = document.querySelectorAll('.card'); //seleccionamos todas las clases card

//recorremos todas las card
cards.forEach( card => {
  //asignamos un evento click
  card.addEventListener('click', () => {
    removeActiveClass(); //removemos la clase anterior para que asi otra card pueda expandirse

    //añadimos la clase active lo que permite expandir a esa card
    card.classList.add('active');
  });
});

//funcion que permite remover la clase active de una card
function removeActiveClass() {
  cards.forEach( card => card.classList.remove('active'));
}

var button=document.getElementById('id_testi_back')

//-------------COLECCIONES-----------------//

    let scrollContainer = document.querySelector(".gallery");
    let backbtn = document.getElementById("backBtn");
    let nextbtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) =>{
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior ="auto";
    });

    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior ="smooth";
        scrollContainer.scrollLeft +=1000;
    });
    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior ="smooth";
        scrollContainer.scrollLeft -=1000;
    });

    // Obtener todas las imágenes dentro del contenedor de la galería
    let images = document.querySelectorAll(".gallery img");

    // Definir un objeto que asocie cada imagen con su URL correspondiente
    let imageUrls = {
        "../imgs/PROMOCIONES/col1.jpg": "categoria_mujer.html",
        "../imgs/PROMOCIONES/col2.jpg": "categoria_hombre.html",
        "../imgs/PROMOCIONES/col3.jpg": "categoria_training.html",
        "../imgs/PROMOCIONES/col4.jpg": "categoria_urbano.html",
        "../imgs/PROMOCIONES/col5.jpg": "categoria_deportes.html",
        "../imgs/PROMOCIONES/col6.jpg": "pagina6.html"
    };

    // Agregar evento de click a cada imagen
    images.forEach((image) => {
        image.addEventListener("click", () => {
            // Obtener la URL correspondiente a la imagen actual
            let imageUrl = image.getAttribute("src");
            let pageUrl = imageUrls[imageUrl];

            // Redirigir al usuario a la página deseada
            if (pageUrl) {
                window.location.href = pageUrl;
            }
        });
    });

//-------------LIQUIDACIÓN-----------------//