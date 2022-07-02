var login = "Unip"
var login_dig
var senha = 123
var senha_dig


// while (login_dig != login) {
//     login_dig = (window.prompt("Digite o Login:"))
//     if (login_dig != login) {
//         alert("Login Inválido.")
//         login_dig = (window.prompt("Digite o Login:"))
//     }


// }

// while (senha_dig != senha) {

//     senha_dig = (window.prompt("Digite o senha:"))

//     if (senha_dig != senha) {

//         alert("Senha Inválida.")
//         senha_dig = (window.prompt("Digite a Senha novamente."))

//     }


// }
function confirmar() {
    var loginjs = window.document.getElementById("login")
    var senhajs = window.document.getElementById("password")
    var n1 = Number(loginjs.value)
    var n2 = Number(senhajs.value)

    alert(`${loginjs}`)

}