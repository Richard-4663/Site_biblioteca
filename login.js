const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("btn-login");

function login(){
    const user = username.value;
    const pass = password.value;

    if(user === "" || pass === ""){
        alert("Preencha todos os campos!");
        return;
    }

    if(user === "Elaine_Rafael123" && pass === "123456"){
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    }
    else{
        alert("Usuário ou senha incorretos!");
    }
}