var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));

function rotaCadastro() {
    window.location.href = "../registro.html";
}
function rotaRecuperar() {
    window.location.href = "../recuperar.html";
}
function rotaLogin() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if (email === "mfsoares00@gmail.com" && senha === "123456") {
        window.location.href = "../index.html";
    } else {
        janelaLogin.show();
    }
}