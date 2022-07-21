var dec = document.querySelector('.btn');
console.log(dec);
dec.addEventListener('click', fon);
function fon(e) {
    var cible=e.target
    console.log(cible)
    var user="gomycode22@gmail.com"
    var pass="azerty22"
    var password=document.querySelector('.in2')
    var email=document.querySelector('.in1')
    if (user==email.value && pass==password.value) {
            window.location.replace = "index.html";
    } else{
        alert("Wrong email or password!")
    }
}