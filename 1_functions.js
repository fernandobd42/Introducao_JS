//Function Declaration: A função é carregada antes do código ser interpretado.
console.log(soma(2,3)); // 5

function soma(a, b) {
  return a + b;
}



//Function Expression: A função é carregada durante a interpretação do código.
var soma = function(a, b) {
  return a + b;
}

console.log(soma(2,2)); // 4



//Invocando uma função diretamente no escopo global.
var soma = function(a, b) {
  return a + b;
}
console.log(soma(2, 4)); // 6



//Passando uma função como parametro.
var helloWorld = function() {
        return "Hello World_1!";
    };

console.log(helloWorld); // [Function]
console.log(helloWorld()); // Hello World_1!



//Passando uma função dentro de uma função como parametro.
var helloWorld = function() {
    return function(){
        return "Hello World_2!";
    };
};

console.log(helloWorld); // [Function]
console.log(helloWorld()); // [Function]
console.log(helloWorld()()); // Hello World_2!
var hw = helloWorld();
console.log(hw()); // Hello World_2!



//Utilizando uma função como método, declarado dentro do objeto.
var pessoa = {
  nome: 'joão',
  idade: 20,
  getIdade: function() {
    return this.idade;
  }
};
console.log(pessoa); // {nome: 'joão', idade: 20, getIdade: [Function]}
console.log(pessoa.getIdade()); // 20



//Utilizando a função com call e apply
var getIdade = function(extra) {
  console.log(arguments);
  return this.idade + extra;
}

var pessoa = {
nome: 'João',
idade: 22,
getIdade: getIdade
};

console.log(pessoa.getIdade(2, 5)); // 22
console.log(getIdade.call(pessoa, 3, 1, 3)); // undefined
console.log(getIdade.apply(pessoa, [5, 2, 5])); // 22



//(Funções Fábrica VS. Função Construtora)

//Função Fábrica.
var criar = function(nome, idade) {
  return {
    nome: nome,
    idade: idade
  };
};

console.log(criar('pedro', 20)); // { nome: 'pedro', idade: 20 }
console.log(criar('maria', 30)); // { nome: 'maria', idade: 30 }
console.log(criar('rafael', 40)); // {nome: 'rafael', idade: 40 }



//Função Construtora, utiliza o operador new
var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa('Pedro', 20)); // { nome: 'pedro', idade: 20 }
console.log(new Pessoa('Maria', 30)); // { nome: 'maria', idade: 30 }
console.log(new Pessoa('Rafael', 40)); // { nome: 'rafael', idade: 40 }

var pedro = {};
Pessoa.call(pedro, 'Pedro', 20);
console.log(pedro); // { nome: 'Pedro', idade: 20 }

var maria = {};
Pessoa.call(maria, 'Maria', 30);
console.log(maria); // { nome: 'Maria', idade: 30 }
