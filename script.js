

/* Produtos */
let refrigerante = 19.99;
let quantRefrigerante = 3;
let totalRefrigerante = refrigerante * quantRefrigerante;

let macarrao = 6.99;
let quantMacarrao = 4;
let totalMacarrao = macarrao * quantMacarrao;

let ervilha = 6.99 ;
let quantErvilha = 3;
let totalErvilha = ervilha * quantErvilha;

let arroz = 22.99;
let quantArroz = 3;
let totalArroz = arroz * quantArroz;

let feijao = 11.89;
let quantFeijao = 2;
let totalFeijao = feijao * quantFeijao;

const vinho = 70.00;
const quantVinho = 3;
const totalVinho = vinho * quantVinho;

let valorTotalSemVinho = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao;

let valorTotal = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho;
let valorTotalInteiro = parseInt(valorTotal);

console.log(valorTotal);

if ( valorTotalInteiro % 2 == 0){
    voce = valorTotalSemVinho / 2;
    amigo = valorTotalSemVinho / 2 + totalVinho;
    console.log(` Que sorte, deu par! O valor total é: R$ ${valorTotalInteiro} eu vou pagar R$ ${voce} e meu amigo vai pagar R$ ${amigo}`);
}
else{ 
    voce = valorTotalInteiro / 2;
    amigo = valorTotalInteiro / 2;
    console.log(` Que Azar, deu ímpar! O valor total é: R$ ${valorTotalInteiro} eu vou pagar R$ ${voce} e meu amigo vai pagar R$ ${amigo}`);
}


/* ---------------------------- EXTRA ------------------------------ */
let newRefrigerante = parseFloat(prompt("Qual o valor do Refrigerante?")); 
let newQuantRefrigerante =  parseInt(prompt("Qual a quantidade?"));
let newTotalRefrigerante = newRefrigerante * newQuantRefrigerante;


let newMacarrao = parseFloat(prompt("Qual o valor do Macarrao?"));
let newQuantMacarrao = parseInt(prompt("Qual a quantidade?"));
let newTotalMacarrao = newMacarrao * newQuantMacarrao;

let newErvilha = parseFloat(prompt("Qual o valor da Ervilha?"));
let newQuantErvilha = parseInt(prompt("Qual a quantidade?"));
let newTotalErvilha = newErvilha * newQuantErvilha;

let newArroz = parseFloat(prompt("Qual o valor do Arroz?"));
let newQuantArroz = parseInt(prompt("Qual a quantidade?"));
let newTotalArroz = newArroz * newQuantArroz;

let newFeijao = parseFloat(prompt("Qual o valor do Feijao?"));
let newQuantFeijao = parseInt(prompt("Qual a quantidade?"));
let newTotalFeijao = newFeijao * newQuantFeijao;

const newVinho = parseFloat(prompt("Qual o valor do Vinho?"));
const newQuantVinho = parseInt(prompt("Qual a quantidade?"));
const newTotalVinho = newVinho * newQuantVinho;

let newValorTotalSemVinho = newTotalRefrigerante + newTotalMacarrao + newTotalErvilha + newTotalArroz + newTotalFeijao;

let newValorTotal = newTotalRefrigerante + newTotalMacarrao + newTotalErvilha + newTotalArroz + newTotalFeijao + newTotalVinho;
let newValorTotalInteiro = parseInt(newValorTotal);

let newVoce = "";
let newAmigo = "";
let mensagem = "";

if ( newValorTotalInteiro % 2 == 0){
    newVoce = newValorTotalSemVinho / 2;
    newAmigo = newValorTotalSemVinho / 2 + newTotalVinho;
    mensagem = "Que sorte, deu par!";
    console.log(` Que sorte, deu par! O valor total é: R$ ${valorTotalInteiro} eu vou pagar R$ ${newVoce} e meu amigo vai pagar R$ ${newAmigo}`);
}
else{ 
    newVoce = newValorTotalInteiro / 2;
    newAmigo = newValorTotalInteiro / 2;
    mensagem = "Que Azar, deu ímpar!"
    console.log(` Que Azar, deu ímpar! O valor total é: R$ ${newValorTotalInteiro} eu vou pagar R$ ${newVoce} e meu amigo vai pagar R$ ${newAmigo}`);
}

/* let  = parseFloat(prompt("Qual o valor do Refrigerante?")); 
let  = parseInt(prompt("Qual a quantidade?")); */

alert(`${mensagem} Valor total pago por mim foi: R$ ${newVoce} e o valor total pago pelo meu amigo foi R$ ${newAmigo}`);