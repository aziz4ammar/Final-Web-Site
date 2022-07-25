var dec = document.querySelector('.btn');
console.log(dec);
dec.addEventListener('click', fon);
// password settings
function fon(e) {
    var cible=e.target
    console.log(cible)
    var user="gomycode22@gmail.com"
    var pass="azerty22"
    var password=document.querySelector('.in2')
    var email=document.querySelector('.in1')
    if (email.value!=user) {
        alert("Wrong email!")
    } else if (password.value!=pass){
        alert("wrong password!")
    }else{
        window.location.replace("main page/index.html");
    }
}