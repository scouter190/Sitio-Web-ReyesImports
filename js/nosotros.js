var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
            if(counter>4){
                counter=1;
            }

    },5000)

/*BANNER*/
    var i=0;
    var txt ='LLÉVANOS CONTIGO A TODOS LADOS';
    var speed = 80;

    function bannerauto(){
        if(i<txt.length){
            document.getElementById('texto').innerHTML += txt.charAt(i);
            i++;
            setTimeout(bannerauto, speed);
        }
    }
    bannerauto();

/*GALERIA*/

    document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
        el.addEventListener('click', function (ev) {
            ev.stopPropagation();
            this.parentNode.classList.add('active');
        });
    });

    document.querySelectorAll('.contenedor-modal ').forEach((el) => {
        el.addEventListener('click', function (ev) {
            this.classList.remove('active');
        });
    });