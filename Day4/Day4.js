var maximo = 10;
var minimo = 0;
var numeroSortido = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

console.log(numeroSortido);

var pergunta = prompt("Digite um numero de 0 a 10 para descobrir o número secreto");


if (numeroSortido == pergunta) {
    document.write("Acertou");    
} else {
    document.write("Errou");
}