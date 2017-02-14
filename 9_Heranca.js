//Exemplo 1 - Criando objetos diretamente.
var jose = {
    nome: 'José',
    idade: 22,
    sexo: 'masculino'
};

var maria = {
    nome: 'Maria',
    idade: 20,
    sexo: 'feminino'
};

console.log(jose); // { nome: 'José', idade: 22, sexo: 'masculino' }
console.log(maria); // { nome: 'Maria', idade: 20, sexo: 'feminino' }



//Exemplo 2 - Criando objetos com Função Fábrica. (Mais recomendada que a forma anterior).
var criarPessoa = function(nome, idade, sexo) {
  return {
    nome: nome,
    idade: idade,
    sexo: sexo
  };
};

var joao = criarPessoa('João', 30, 'masculino');
var lucia = criarPessoa('Lúcia', 35, 'feminino');
console.log(joao); // { nome: 'João', idade: 30, sexo: 'masculino' }
console.log(lucia); // { nome: 'Lúcia', idade: 35, sexo: 'feminino' }



//Exemplo 3 - Criando objetos com Função Construtora, usando o operador new.
var Pessoa = function(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
};

var roger = new Pessoa('Roger', 12, 'masculino');
var julia = new Pessoa('Julia', 10, 'feminino');
console.log(roger); // { nome: 'Roger', idade: 12, sexo: 'masculino' }
console.log(julia); // { nome: 'Julia', idade: 10, sexo: 'feminino' }



//Exemplo 4 - Criando objeto com Função Construtora, utilizando call.
var Pessoa = function(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
};

var isabella = {};
Pessoa.call(isabella, 'Isabella', 18, 'feminino');
console.log(isabella); //{ nome: 'Isabella', idade: 18, sexo: 'feminino' }



//Exemplo 4 - Criando objeto com Função Construtora, utilizando apply(adicionar []).
var Pessoa = function(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
};

var fernando = {};
Pessoa.apply(fernando, ['Fernando', 21, 'masculino']);
console.log(fernando); // { nome: 'Fernando', idade: 21, sexo: 'masculino' }



//O objeto que tem protótipo é completamente diferente da propriedade prototype. Diferença entre [[Prototype]] e prototype:
//[Prototype]] -> O conceito de protótipo é abstrato, é o protótipo que pode ser um objeto ou null.
//prototype -> Basicamente é uma propriedade de prototype que só as funções tem, capaz de inserir manipular e/ou
//transformar os objetos, inserindo, alterando ou excluindo propriedades em todos os objetos de uma só vez.
//É considerado orientação a objetos baseada em protótipo porque os objetos reusam(herdam) propriedades e métodos de
//outros objetos.
//Exemplo 5 - Definindo prototype e inserindo em todos os objetos. Basicamente os objetos não tem a propriedade
//sexo, quem a tem é o protótipo.
var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

Pessoa.prototype.sexo = 'masculino'; // >>atribuindo propriedade sexo a Pessoa.<<

var gabriel = new Pessoa('Gabriel', 23);
console.log(gabriel); // { nome: 'Gabriel', idade: 23 }
console.log(gabriel.sexo); // masculino

var rafael = {};
rafael.__proto__ = Pessoa.prototype; // >>Atribuindo o protótipo a rafael.<<
Pessoa.apply(rafael, ["Rafael", 18]);
console.log(rafael); // { nome: 'Rafael', idade: 18}
console.log(rafael.sexo); // masculino

Pessoa.prototype.sexo = 'feminino'; // >>Alterando propriedade sexo do prototype para 'feminino'<<
console.log(gabriel.sexo); // feminino
console.log(rafael.sexo); // feminino



//Em JavaScript quando você faz um new array, new object, new date, dentre outros. Todos eles são criados por meio de
//uma Função Construtora. Caso você esteja usando Função Construtora e queira usar herança, para manipular e/ou transformar
//os objetos, você pode utilizar o prototype para definir propriedades e inserir, alterar ou excluir em todos os objetos
//de uma vez.
//Exemplo 6 - Inserindo prototype direto na função new.
var _new = function(f) {
  var obj = {};
  obj.__proto__ = f.prototype; // >>O protótipo do objeto recebe a Função Construtora(f.prototype);<<
  f.apply(obj, ['Rafael', 18]); // >>Invoco a Função Cosnstrutora, passando o seu contexto, no caso object e um array com as propriedades do objeto <<
  return obj;
}; // >> Função generica <<

var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}; // >> Função direta <<

Pessoa.prototype.sexo = 'masculino';

var gabriel = new Pessoa('Gabriel', 23);
console.log(gabriel); // { nome: 'Gabriel', idade: 23 }
console.log(gabriel.sexo); // masculino

var rafael = _new(Pessoa, "Rafael", 18);

console.log(rafael);  // { nome: 'Rafael', idade: 18 }
console.log(rafael.sexo); // masculino



//Exemplo 7 - Inserindo prototype direto na função new, utilizando um array, de um modo dinâmico.
var _new = function(f) {
  var obj = {};
  obj.__proto__ = f.prototype; // >>O protótipo do objeto recebe a Função Construtora(f.prototype);<<
  f.apply(obj,Array.prototype.slice.call(arguments, 1)); // >>Invoco a Função Cosnstrutora, passando o seu contexto, no caso object e um array com as propriedades do objeto <<
  return obj;
}; // >> Função generica <<

var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}; // >> Função direta <<

Pessoa.prototype.sexo = 'masculino';

var gabriel = new Pessoa('Gabriel', 23);
console.log(gabriel); // { nome: 'Gabriel', idade: 23 }
console.log(gabriel.sexo); // masculino

var rafael = _new(Pessoa, "Rafael", 18);

console.log(rafael);  // { nome: 'Rafael', idade: 18 }
console.log(rafael.sexo); // masculino



//Exemplo 8 - Inserindo prototype direto na função new, utilizando um array, de um modo dinâmico. Exemplo 2.
var _new = function(f) {
  var obj = {};
  obj.__proto__ = f.prototype; // >>O protótipo do objeto recebe a Função Construtora(f.prototype);<<
  f.apply(obj,Array.prototype.slice.call(arguments, 1)); // >>Invoca a Função Cosnstrutora, passando o seu contexto, no caso object e um array com as propriedades do objeto <<
  return obj;
}; // >> Função generica <<

var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}; // >> Função direta <<

Pessoa.prototype.sexo = 'masculino';

var gabriel = _new (Pessoa, 'Gabriel', 23);
console.log(gabriel); // { nome: 'Gabriel', idade: 23 }
console.log(gabriel.sexo); // masculino

var rafael = _new(Pessoa, "Rafael", 18);

console.log(rafael);  // { nome: 'Rafael', idade: 18 }
console.log(rafael.sexo); // masculino



//Pseudo código do new
var _new = function(f) {
  var res = {};
if(f.prototype !== null) {
  res.__proto__ = f.prototype;
}

 var ret = f.aplly(res, Array.prototype.slice.call(arguments, 1));
 if((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
  return ret;
  }
  return res;
}
//Esclarecendo, [[prototype]] é uma propriedade que existe em todos os objetos do JavaScript que pode ser um objeto ou null.
//Já prototype é uma propriedade exclusiva de funções, é utilizado para manipular e/ou transformar os objetos,
//você pode utilizar o prototype para definir propriedades e inserir, alterar ou excluir em todos os objetos de uma vez.

//Retrospectiva: Todo mundo é objeto, porém JavaScript 'não possui classes'. Todo objeto possui um [[prototype]].
