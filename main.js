document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "o nosso carinho e gratidao a voces," +
        "que alem de transmitir seus conhecimentos" +
        "e suas experiencias, souberam apoiar-nos" +
        "em nossas dificuldades" +
        "Feliz Dia dos Professores!";
    });
});

