var nomeUsuario = prompt("Qual o seu nome?");
var idadeUsuario = prompt("Quantos anos você tem?");
var linguagemUsuario = prompt("Qual linguagem de programação você está estudando?");

document.write("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos e já está aprendendo " + linguagemUsuario + ".");

document.write("<br><br>");

var perguntaEstudo = prompt("Você gosta de estudar JavaScript? Responda com o número 1 para SIM ou 2 para NÃO.");

if (perguntaEstudo == 1) {
    document.write("Muito bom! Continue estudando e você terá muito sucesso.");
} 

if (perguntaEstudo == 2) {
    document.write("Ahh que pena... Já tentou aprender outras linguagens?");
}