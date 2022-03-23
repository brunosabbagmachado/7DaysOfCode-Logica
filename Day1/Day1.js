let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

//...........................................................................................

document.write("numeroUm = " + numeroUm + "<br>");
document.write("stringUm = " + stringUm + "<br>");

if(numeroUm == stringUm) {
    document.write("As varíaveis 'numeroUm' e 'stringUm' tem o mesmo valor, mas tipos diferentes.<br>");
} else {
    document.write("As variáveis 'numeroUm' e 'stringUm' não tem o mesmo valor. <br>");
}

//...........................................................................................

document.write("<br><br>numeroTrinta = " + numeroTrinta + "<br>");
document.write("stringTrinta  = " + stringTrinta + "<br>");

if(numeroTrinta == stringTrinta) {
    document.write("As varíaveis 'numeroTrinta' e 'stringTrinta' tem o mesmo valor, mas tipos diferentes.<br>");
} else {
    document.write("As variáveis 'numeroTrinta' e 'stringTrinta' não tem o mesmo valor.<br>");
}

//...........................................................................................

document.write("<br><br>numeroUm = " + numeroTrinta + "<br>");
document.write("numeroUm = " + numeroTrinta + "<br>");

if(numeroDez == stringDez) {
    document.write("As varíaveis 'numeroDez' e 'stringDez' tem o mesmo valor, mas tipos diferentes.<br>");
} else {
    document.write("As variáveis 'numeroDez' e 'stringDez' não tem o mesmo valor.<br>");
}

