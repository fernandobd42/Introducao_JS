//Um objeto é uma coleção dinâmica de chaves e valores, que podem ser de qualquer tipo, e um protótipo que pode ser
//objeto ou null. A propriedade do protótipo não pode ser acessada diretamente de um objeto. Apenas é possivel
//acessar determinada propriedade do protótipo passando o objeto pai e em sequencia a propriedade.
//Herança baseada em protótipo basicamente é um modelo de herança diferente da herança de orientação a objetos.
//que possibilita herdar propriedades e metodos de objetos existentes.
//Exemplo 1 - Criando objetos diretamente e atribuindo protótipo com __proto__
var homem = {
    sexo: 'masculino'
};

var mulher = {
    sexo: 'feminino'
};

var joao = {
    nome: 'João',
    idade: 20,
    __proto__: homem
};

var maria = {
    nome: 'Maria',
    idade: 18,
    __proto__: mulher
};

console.log(joao); // { nome: 'João', idade: 20 }
console.log(joao.sexo); // masculino
console.log(maria); // { nome: 'Maria', idade: 18 }
console.log(maria.sexo); // feminino



//Apesar da propriedade __proto__ ser suportada por todos os navegadores ela não é adotada por todos os interpretadores,
//então prefira utilizar Object.getPrototypeOf e Object.setPrototypeOf para interagir com o protótipo do objeto;
//Exemplo 2 - Criando objeto diretamente e atribuindo protótipo com Object.setPrototypeOf.
var homem = {
    sexo: 'masculino'
};

var joao = {
    nome: 'João',
    idade: 20,
};

console.log(joao); // { nome: 'João', idade: 20 }
console.log(joao.sexo); // undefined
Object.setPrototypeOf(joao, homem);
console.log(joao.sexo); // masculino



//Exemplo 3 - Criando objeto diretamente e atribuindo protótipo com Object.create. Que possibilita usar um objeto
//existente como protótipo. >>Melhor suporte entre os Browser<< RECOMENDADO
var homem = {
    sexo: 'masculino'
};

var jose = {
    nome: 'José',
    idade: 25,
};

console.log(jose); // { nome: 'José', idade: 25 }
console.log(jose.sexo); // undefined
var jose = Object.create(homem)
console.log(jose.sexo); // masculino



//Shadowing(sombra). O objeto busca a propriedade requisitada primeiro em sua própria estrutura, caso exista
//ele finaliza o processo. Ou seja, ele só vai buscar em outros protótipo caso não tenha a propriedade em sua própria estrutura.
//Exemplo 4 - Criando objeto diretamente, usando um delete para apagar a propriedade sexo, atribuindo protótipo com
//Object.setPrototypeOf. E, utilizando Object.keys para ver as propriedades do objeto.
var homem = {
    sexo: 'masculino'
};

var maria = {
    nome: 'Maria',
    idade: 25,
    sexo: 'feminino'
};

delete maria.sexo;

console.log(maria); // { nome: 'Maria', idade: 25 }
console.log(maria.sexo); // undefined
Object.setPrototypeOf(maria, homem);
console.log(maria.sexo); // masculino
console.log(Object.keys(maria)); // [ 'nome', 'idade' ]



//Exemplo 5 - Usando For in para buscar as propriedades do objeto, incluindo as protótipadas.
var homem = {
    sexo: 'masculino'
};

var lucas = {
    nome: 'Lucas',
    idade: 25,
    sexo: 'feminino'
};

delete lucas.sexo;

console.log(lucas); // { nome: 'Lucas', idade: 25 }
console.log(lucas.sexo); //undefined
Object.setPrototypeOf(lucas, homem);
console.log(lucas.sexo); // masculino

for(var property in lucas) {
  console.log(property);
}
// nome
// idade
// sexo



//Exemplo 8 - Usando For in para buscar as propriedades do objeto. Utilizando hasOwnProperty para retornar apenas
//as propriedades inerentes ao objeto.
var homem = {
    sexo: 'masculino'
};

var junior = {
    nome: 'Junior',
    idade: 25,
    sexo: 'feminino'
};

delete junior.sexo;

console.log(junior); // { nome: 'Junior', idade: 25 }
console.log(junior.sexo);
Object.setPrototypeOf(junior, homem);
console.log(junior.sexo); // masculino

for(var property in junior) {
  if (!junior.hasOwnProperty(property)) continue;
  console.log(property);
}
// nome
// idade
