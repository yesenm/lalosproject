document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    base_datos.createDB();
    likes.loadLikes(cargarInserts);
}

function cargarInserts(resultado){
    var length = resultado.rows.length;

    for (var i = 0; i<length;  i++){
        var item = resultado.rows.item(i);
        
        $('#lista').append(
            "<div class='col-sm-12 col-md-6 col-lg-6 card' style='align-content: center; ><div class='card' id='cartita'><div class='face front'><img src='img/TopSongs/" + item.id +".jpg'></img><h3>" + 
            item.song + "</h3></div><div class='face back'><h3>" 
            + item.song + "</h3><p>" + item.description + "<br><br> ARTISTA: " +
            item.artist +  "<br> ÁLBUM: " + item.album + "</p>" +
            "<div class='row'><div class='col-4'><a class='buttonsLikes' id='btnLike" + item.id +"' onclick='addLike" + item.id + "(), vibrate(), updateSong()'><i class='bi bi-hand-thumbs-up'></i></a></div><div class='col-4'><h6 id='cuenta" +  item.id + "'>" +item.likes +"</h6></div><div class='col-4'><a class='buttonsLikes' id='btnDislike" + item.id + "' onclick='rmLike" + item.id + "(), vibrate(), updateSong()'><i class='bi bi-hand-thumbs-down'></i></a></div></div>" +
            "<p class='esconder' id='id" + item.id + "'> ID: " + item.id + "</p></div></div></div>" 
        );
    }
}

function updateSong(){
    var nuevoLike = $("#cuenta1").text();
    var nuevoId = $("#id1").text();

    likes.updateSong(nuevoId, nuevoLike);
    
}