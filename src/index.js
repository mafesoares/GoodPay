var janelaLogin = new bootstrap.Modal(document.getElementById('loginNegado'));
var janelaPromocao = new bootstrap.Modal(document.getElementById('promo1'));

function rotaCadastro(){
    window.location.href ='../registro.html';
}

function rotaRecuperar(){
    window.location.href ='../recuperar.html';
}
function rotaLogin(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    if(email === 'mfsoares00@gmail.com' && senha === '123456'){
        window.location.href ='../index.html';
    }else{
        janelaLogin.show();
    }
}

function alertaPromo(){
    let titulo = "Promoção 1 [Quebra da Banca]";
    let corpo = "<h6>Super legal</h6> <p><img src='./img/4.png' width='160' height='160'></p> ";
       
    janelaPromocao.show();

    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("corpo").innerHTML = corpo;
}