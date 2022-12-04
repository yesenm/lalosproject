'use strict'

var likes = {
    updateSong: function(id, likes){
        base_datos.bd.transaction(
            function(tx){
                tx.executeSql("UPDATE like SET likes=?1 WHERE id=?2",[likes, id],
                function(tx, resultado){
                    console.log(resultado);
                    console.log("Acutialización correcta");
                },
                function(tx, error){
                    console.log("Falló actualizar, revisa la conexión");
                }
                );
            },
            function(error){
                console.log("Tenemos un problema" + error.message);
            },
            function(){
                console.log("Todo bien");
            }

        );
    },
    loadLikes: function(cargarInserts){
        base_datos.bd.transaction(
            function(tx){
                tx.executeSql("SELECT * FROM like",[],
                function(tx, resultado){
                   cargarInserts(resultado);
                },
                function(tx, error){
                    alert("Carga no válida, revisa la conexión");
                }
                );
            },
            function(error){
                console.log("Tenemos un problema" + error.message);
            },
            function(){
                console.log("Todo bien");
            }
        );
    }
}
