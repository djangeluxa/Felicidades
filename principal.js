//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//Declaramos variables
var side__menu = document.getElementById("menu__side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu(){
    body.classList.toggle("body_move");
    side__menu.classList.toggle("menu_side_move")
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
if(window.innerWidth < 760){
    body.classList.add("body_move");
    side__menu.classList.add("menu_side_move")
}

//Haciendo el menú responsive

window.addEventListener("resize", function(){
    
    if(window.innerWidth > 760){

        body.classList.remove("body_move");
        side__menu.classList.remove("menu_side_move");

    }

    if(window.innerWidth < 760){

        body.classList.add("body_move");
        side__menu.classList.add("menu_side_move");

    }

})