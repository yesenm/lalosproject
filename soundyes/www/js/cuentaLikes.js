$(document).ready(main);

var contarAntihero = 0;
var contarRcihflex = 0;
var contarUnholy = 0;
var contarBatHabit = 0;
var contarAsItWas = 0;
var contarImGood = 0;
var contarSuperFreakyGirl = 0;
var contarLiftMeUp = 0;
var contarLavanderHaze = 0;
var contarILikeYou = 0;


function main(){
    contarAntihero;
    contarRcihflex;
    contarUnholy;
    contarBatHabit;
    contarAsItWas;
    contarImGood;
    contarSuperFreakyGirl;
    contarLiftMeUp;
    contarLavanderHaze;
    contarILikeYou;
}

function addLike1(){
    contarAntihero ++;
    $('#cuenta1').text(contarAntihero);
}

function rmLike1(){
    if(contarAntihero <= 0){
        contarAntihero = 0;
        $('#cuenta1').text(contarAntihero);
    }else{
        contarAntihero --;
        $('#cuenta1').text(contarAntihero);
    }
}

function addLike2(){
    contarRcihflex ++;
    $('#cuenta2').text(contarRcihflex);
}

function rmLike2(){
    if(contarRcihflex <= 0){
        contarRcihflex = 0;
        $('#cuenta2').text(contarRcihflex);
    }else{
        contarRcihflex --;
        $('#cuenta2').text(contarRcihflex);
    }
}

function addLike3(){
    contarUnholy ++;
    $('#cuenta3').text(contarUnholy);
}

function rmLike3(){
    if(contarUnholy <= 0){
        contarUnholy = 0;
        $('#cuenta3').text(contarUnholy);
    }else{
        contarUnholy --;
        $('#cuenta3').text(contarUnholy);
    }
}

function addLike4(){
    contarBatHabit ++;
    $('#cuenta4').text(contarBatHabit);
}

function rmLike4(){
    if(contarBatHabit <= 0){
        contarBatHabit = 0;
        $('#cuenta4').text(contarBatHabit);
    }else{
        contarBatHabit --;
        $('#cuenta4').text(contarBatHabit);
    }
}

function addLike5(){
    contarAsItWas ++;
    $('#cuenta5').text(contarAsItWas);
}

function rmLike5(){
    if(contarAsItWas <= 0){
        contarAsItWas = 0;
        $('#cuenta5').text(contarAsItWas);
    }else{
        contarAsItWas --;
        $('#cuenta5').text(contarAsItWas);
    }
}

function addLike6(){
    contarImGood ++;
    $('#cuenta6').text(contarImGood);
}

function rmLike6(){
    if(contarImGood <= 0){
        contarImGood = 0;
        $('#cuenta6').text(contarImGood);
    }else{
        contarImGood --;
        $('#cuenta6').text(contarImGood);
    }
}

function addLike7(){
    contarSuperFreakyGirl ++;
    $('#cuenta7').text(contarSuperFreakyGirl);
}

function rmLike7(){
    if(contarSuperFreakyGirl <= 0){
        contarSuperFreakyGirl = 0;
        $('#cuenta7').text(contarSuperFreakyGirl);
    }else{
        contarSuperFreakyGirl --;
        $('#cuenta7').text(contarSuperFreakyGirl);
    }
}

function addLike8(){
    contarLiftMeUp ++;
    $('#cuenta8').text(contarLiftMeUp);
}

function rmLike8(){
    if(contarLiftMeUp <= 0){
        contarLiftMeUp = 0;
        $('#cuenta8').text(contarLiftMeUp);
    }else{
        contarLiftMeUp --;
        $('#cuenta8').text(contarLiftMeUp);
    }
}

function addLike9(){
    contarLavanderHaze ++;
    $('#cuenta9').text(contarLavanderHaze);
}

function rmLike9(){
    if(contarLavanderHaze <= 0){
        contarLavanderHaze = 0;
        $('#cuenta9').text(contarLavanderHaze);
    }else{
        contarLavanderHaze --;
        $('#cuenta9').text(contarLavanderHaze);
    }
}

function addLike10(){
    contarILikeYou ++;
    $('#cuenta10').text(contarILikeYou);
}

function rmLike10(){
    if(contarILikeYou <= 0){
        contarILikeYou = 0;
        $('#cuenta10').text(contarILikeYou);
    }else{
        contarILikeYou --;
        $('#cuenta10').text(contarILikeYou);
    }
}