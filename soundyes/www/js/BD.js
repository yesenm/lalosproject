var base_datos = {
    bd: null,
    createDB: function(){
        if (window.cordova.platformId === 'browser'){
            this.bd = window.openDatabase('soundyes.db', '1.0', 'SoundYes', 1000);
        }else{
            this.bd = window.sqlitePlugin.openDatabase({
                name:'soundyes.db',
                location: 'default'
            });
        }
        this.bd.transaction(
            function(tx){
                tx.executeSql('CREATE TABLE IF NOT EXISTS usuario(id integer primary key, username text, email text, password text)',[],
                function(tx,resultado){
                    console.log("La base de datos ha sido creada");
                },
                function(tx, error){
                    alert("No se creó la base de datos, verifica la función");
                }
                );
            }
        )
    },
    function(error){
        console.log("Error: " + console.error.message);
    },
    function(){
        console.log("Funcionando!")
    }
}