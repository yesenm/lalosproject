'use strict'

$(document).ready(main);

var lista_canciones=[];

function main(){
    refresh();
    $('#AgregarCancion').click(agregarCancion);
    $('#cancion').keypress(teclado);
}

function teclado(key){
    if(key.keyCode == 13){
        agregarCancion();
    }
}

function agregarCancion(){
    var item = $('#cancion').val();

    var bandera = 0;

    if(item.length>0 && item.trim()){

        for (var i=0; i<lista_canciones.length; i++){
         
            if(lista_canciones[i] == item.toUpperCase()){
                bandera++;
                i = lista_canciones.length;
            }
         }
    }

    if(bandera != 0){
        alert("Ya existe esta canción en la lista");
        $('#cancion').val('');
    }else{
        lista_canciones.push(item.toUpperCase());
        localStorage.lista_canciones = lista_canciones;

        $('#cancion').val('');
        mostrarCanciones();
    }

}

function mostrarCanciones(){
    $("#lista").empty();
    for (var i=0; i<lista_canciones.length; i++){
        $("#lista").append(
            "<li class='list-group-item list-group-item-primary'><span class='badge bg-danger rounded-pill' onClick='borrarCancion(this)'>X</span>" + " " + lista_canciones[i] + "</li>");
    }
}

function borrarCancion(posicion){

    var resultado = window.confirm('¿Estás seguro de eliminar esta canción?, no la tomarémos en cuenta para la siguiente actualización y afectarás las listas de todos los usuarios');

    if (resultado === true) {
        lista_canciones.splice($(posicion).parent().index(), 1);
        $(posicion).parent().remove();
        localStorage.lista_canciones = lista_canciones;
        window.alert('Canción eliminada');
    } else { 
        window.alert('Nada se eliminó');
    }
}

function refresh(){
    if(localStorage.lista_canciones != null){
        lista_canciones = localStorage.lista_canciones.split(",");
        mostrarCanciones();
    }
}
