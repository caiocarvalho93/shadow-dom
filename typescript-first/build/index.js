"use strict";
function exibeObjetos(pessoa) {
    console.log(pessoa);
}
exibeObjetos({
    name: "bruce wayne",
    vulgo: "batman",
});
console.log("ola mundo");
//tipos primitivos:boolean, number, string
let ligado = false;
let nome = "caio";
let idade = 30;
let altura = 1.90;
//tipos especiais
//null
//undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "caio",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
};
let dados = ["caio", "ana", "adriana"];
let dados2 = ["caio", "ana", "adriana"];
let infos = ["caio", 30];
