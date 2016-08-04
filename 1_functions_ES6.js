//Function Declaration: A função é carregada antes do código ser interpretado.
console.log(soma(2,3)); // 5

function soma(a, b) {
  return a + b;
}



//Function Expression: A função é carregada durante a interpretação do código.
var soma = (a, b) => a + b
console.log(soma(2,2)); // 4



//Invocando uma função diretamente no escopo global.
var soma = (a, b) => a + b
console.log(soma(2, 4)); // 6



//Passando uma função como parametro.
var helloWorld = () => "Hello World_1!";
console.log(helloWorld); // [Function]
console.log(helloWorld()); // Hello World_1!



//Passando uma função dentro de uma função como parametro.
var helloWorld = () => () => "Hello World_2!";
console.log(helloWorld); // [Function]
console.log(helloWorld()); // [Function]
console.log(helloWorld()()); // Hello World_2!
const hw = helloWorld();
console.log(hw()); // Hello World_2!



//Utilizando uma função como método, declarado dentro do objeto.
var pessoa = {
  nome: 'joão',
  idade: 20,
  getIdade() {
    return this.idade;
  }
};

console.log(pessoa); // {nome: 'joão', idade: 20, getIdade: [Function]}
console.log(pessoa.getIdade()); // 20



//Utilizando a função com call e apply
const getIdade = function(extra) {
  console.log(arguments);
  return this.idade + extra;
};

var pessoa = {
nome: 'João',
idade: 22,
getIdade
};

console.log(pessoa.getIdade(2)); // { '0': 2 } 24
console.log(getIdade.call(pessoa, 3, 1)); // { '0': 3, '1': 1 } 25
console.log(getIdade.apply(pessoa, [5, 1, 2])); // { '0': 5, '1': 1, '2': 2} 27



//(Funções Fábrica VS. Função Construtora)

//Função Fábrica.
const criar = (nome, idade) => ({
  nome,
  idade
});

console.log(criar('pedro', 20)); // { nome: 'pedro', idade: 20 }
console.log(criar('maria', 30)); // { nome: 'maria', idade: 30 }
console.log(criar('rafael', 40)); // {nome: 'rafael', idade: 40 }



//Função Construtora, utiliza o operador new
const Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa('Pedro', 20)); // { nome: 'pedro', idade: 20 }
console.log(new Pessoa('Maria', 30)); // { nome: 'maria', idade: 30 }
console.log(new Pessoa('Rafael', 40)); // { nome: 'rafael', idade: 40 }

const pedro = {};
Pessoa.call(pedro, 'Pedro', 20);
console.log(pedro); // { nome: 'Pedro', idade: 20 }

const maria = {};
Pessoa.call(maria, 'Maria', 30);
console.log(maria); // { nome: 'Maria', idade: 30 }
