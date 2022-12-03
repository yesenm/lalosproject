function singup(e){
    event.preventDefault();
    
    
    var email = document.getElementById('emailR').value;
    var username = document.getElementById('usuarioR').value;
    var pass = document.getElementById('password1R').value;
    var pass2 = document.getElementById('password2R').value;
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    
    if (username == null || username == ""){
        alert("Escribe tu username");
    } else if (email == null || email == "" || !validEmail.test(email)){
        alert("Escribe un correo electrónico válido");
    } else if (pass == null || pass == "" || pass.length < 8){
        alert("La contraseña debe ser mayor a 8 dígitos");
    } else if (pass2 == null || pass2 == ""){
        alert("Repite la contraseña");
    } else if ( pass != pass2){
        alert("Las contraseñas no son iguales, verifica lo que has escrito");
    } else if(user != null){
        alert("Este usuario ya está registrado, elige otro.");
    } else {
        
        var user = {
            email: email,
            username: username,
            password: pass
        };
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        
        alert('Usuario agregado correctamente');

        window.location.href = "index.html";
    }
}

function loginFunc(e){
    event.preventDefault();
    
    var username = document.getElementById('usuarioL').value;
    var pass = document.getElementById('passwordL').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if (username == null || username == ""){
        alert("Escribe tu nombre de usuario");
    } else if (pass == null || pass == ""){
        alert("Escribe tu contraseña");
    } else if(user == null){
        alert('Usuario no existente');
    }else if(username == data.username && pass == data.password){
        window.location="main.html";
    }else{
        alert('Usuario y/o constraseña incorrecto');
    }
}
