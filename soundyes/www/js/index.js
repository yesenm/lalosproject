document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    base_datos.createDB();
}

function addUserIndividual(){   
     
    var username = $('#usuarioR').val();
    var email = $('#emailR').val();
    var password = $('#password1R').val();
    var password2R = $('#password2R').val();
    
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
   
    if (username == null || username == ""){
        alert("Escribe tu username");
    } else if (email == null || email == "" || !validEmail.test(email)){
        alert("Escribe un correo electrónico válido");
    } else if (password == null || password == "" || password.length < 8){
        alert("La contraseña debe ser mayor a 8 dígitos");
    } else if (password2R == null || password2R == ""){
        alert("Repite la contraseña");
    } else if ( password != password2R){
        alert("Las contraseñas no son iguales, verifica lo que has escrito");
    } else {

        usuarios.addUser(username, email, password);
        $('#usuarioR').val("");
        $('#emailR').val("");
        $('#password1R').val("");
        $('#password2R').val("");
        
    }
    
}