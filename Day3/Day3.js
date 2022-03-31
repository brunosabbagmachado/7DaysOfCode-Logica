var textoInicial = document.write(
  "<h1>Jogo do destino</h1>" +
    "<p>Responda as perguntas para ver onde suas escolhas te levam.<p>" +
     "<br>"
);

var pergunta1 = prompt("1. Para qual área da programação você quer seguir: Front-End (1) ou Back-End (2)?'");

if(pergunta1 == 1){
   var pergunta2 = prompt("Você quer aprender React (3) ou aprender Vue (4)?");

} else if (pergunta1 == 2) {
    prompt("Você quer aprender C# (3) ou aprender Java (4)?");
} else {
    alert("Tente digitar um númro válido");
}