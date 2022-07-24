var hert = document.querySelector('#bh');
    hert.addEventListener('click', lke);
function lke(e) {
    var det=document.querySelector('#pap')
    var cible=e.target
    if(cible=true){
        det.style.background="blue"
    }
}
var her = document.querySelector('#bn');
    her.addEventListener('click', dke);
function dke(e) {
    var det=document.querySelector('#pap')
    var cib=e.target
    if(cib=true){
        det.style.background="red"
    }
}


