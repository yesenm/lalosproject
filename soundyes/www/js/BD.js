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
        this.bd.transaction(function(tx){
          /*  tx.executeSql('CREATE TABLE IF NOT EXISTS usuario(id integer primary key, username text, email text, password text)');
            tx.executeSql('INSERT INTO usuario (username, email, password) SELECT * FROM (SELECT "ADMIN" AS username, "ADMIN@ADMIN.COM" AS email, "adminadmin" AS password) AS temp WHERE NOT EXISTS (SELECT username FROM usuario WHERE username ="ADMIN")'); */
            tx.executeSql('CREATE TABLE IF NOT EXISTS like(id integer primary key, song text, description text, artist text, album text, likes integer)');
            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "ANTIHERO" AS song, "Taylor Swift ha regresado a la música más fuerte con su nuevo álbum Midnights, por lo que acaba de lanzar el video oficial de Anti-Hero." AS description, "TAYLOR SWIFT" AS artist, "MIDNIGTHS" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="ANTIHERO")');

            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "RICH FLEX" AS song, "Rich Flex es una canción del rapero canadiense Drake y el rapero estadounidense 21 Savage. Fue lanzada el 4 de noviembre de 2022." AS description, "DRAKE & 21 SAVAGE" AS artist, "HER LOOS" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="RICH FLEX")');
            
            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "UNHOLY" AS song, "Unholy es una canción del cantante británico Sam Smith y la cantante alemana Kim Petras, lanzada el 22 de septiembre de 2022." AS description, "SAM SMIT & KIM PETRAS" AS artist, "GLORIA" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="UNHOLY")');
            
            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "BAD HABIT" AS song, "Bad Habit es una canción del músico estadounidense Steve Lazy, lanzada como segundo sencillo de su segundo álbum de estudio: Gemini Rights, el 29 de junio de 2022." AS description, "STEAVE LAZY" AS artist, "GEMINI RIGHTS" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="BAD HABIT")');

            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "AS IT WAS" AS song, "As It Was es una canción interpretada por el cantautor británico: Harry Styles, lanzada el 1 de abril de 2022." AS description, "HARRY STYLES" AS artist, "HARRYS HOUSE" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="AS IT WAS")');


            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "IM GOOD" AS song, "Im Good (Blue), es una canción del DJ francés: David Guetta, y la cantante estadounidense: Bebe Rexha. Fue lanzado como sencillo el 26 de agosto de 2022." AS description, "DAVID GUETTA & BABY REXHA" AS artist, "IM GOOD" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="IM GOOD")');
         
            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "SUPER FREAKY GIRL" AS song, "Super Freaky Girl es una canción de la rapera y cantante trinitense-estadounidense Niki Minaj, publicada el 12 de agosto de 2022." AS description, "NIKI MINAJ" AS artist, "QUEEN RADIO: VOLUME 1" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="SUPER FREAKY GIRL")');

            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "LIFT ME UP" AS song, "Rihanna regresa a la música con Lift Me Up, el single principal de la banda sonora de la película Black Panther: Wakanda Forever." AS description, "RIHANNA" AS artist, "BANDA SONORA BLACK PANTER" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="LIFT ME UP")');
            
            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "LAVENDER HAZE" AS song, "Lavender Haze es una canción de la cantautora estadounidense: Taylor Swift, extraída del décimo álbum de estudio de Swift, Midnights, que fue lanzado el 21 de octubre de 2022." AS description, "TAYLOR SWIFT" AS artist, "MIDNIGTHS" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="LAVENDER HAZE")');

            tx.executeSql('INSERT INTO like (song, description, artist, album, likes) SELECT * FROM (SELECT "I LIKE YOU" AS song, "I Like You (A Happier Song), es una canción del rapero y cantante estadounidense: Post Malone, con la también rapera y cantante estadounidense: Doja Cat." AS description, "POST MALONE & DOJA CAT" AS artist, "TWELVE CARAT TOOTHACHE" AS album, 0 AS likes) AS temp WHERE NOT EXISTS (SELECT song FROM like WHERE song ="I LIKE YOU")');

        }, function(tx,resultado){
            console.log("Usuario, like y sus canciones, han sido agregadas");
        }, function(tx, error){
            console.log("Error en las bases de datos, verifica las funciones - SI SE AGREGARON");
        });
    },
    function(error){
        console.log("Error: " + console.error.message);
    },
    function(){
        console.log("Funciona >u<")
    }
}