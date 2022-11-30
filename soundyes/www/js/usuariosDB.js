var usuarios = {
    addUser: function(username, email, password){
        base_datos.bd.transaction(
            function(tx){
                tx.executeSql("INSERT INTO usuario(username, email, password) VALUES (?1, ?2, ?3)",[username, email, password],
                function(tx, resultado){
                    alert("El usuario se añadió correctamente");
                },
                function(tx, error){
                    alert("El usuario no se añadió, revisa la conexión");
                }
                );
            },
            function(error){
                console.log("Error: " + error.message);
            },
            function(){
                console.log("Funcionó!");
            }
        );
    }
}