const formLogin = document.getElementById("formLogin");


formLogin.addEventListener("submit", function (event){
    event.preventDefault(); //resentando as funções padrões do navegador

    const usuario = document.getElementById("usuario").value.trim()
    const senha = document.getElementById("senha").value;
   

    if( usuario === "comofazz" && senha === "3¨%D¨FS%" ) {
        window.location.href = "./js/sucesso.html";
    } else {
        window.location.href = "./js/erro.html";
    }
})


