//Comparando valor(numero) com frase(string). Utilizando ==
console.log(0 == ''); // true
console.log(10 == '10'); // true
console.log(null == undefined); //true



//Exemplo justificando o porque dos resultados anteriores.
console.log(10 == new Number(10)); // true
const dez = new Number(10);
console.log(dez); // [Number: 10]
console.log(dez.valueOf()); // 10
console.log(10 == dez); // true



//Comparando dois objetos em JS.
var x = {} // undefined
const y = {}; // undefined
x == y // false
x === y // false
x = y // {}
x == y // true
x === y // true



//Retornar o proprio operando
0 || 2 // 2 - Compara todos os valores, e retorna o último true(verdadeiro).
0 && 2 // 0 - Compara a príncipio só o primeiro valor, caso for true(verdadeiro), retorna-o, e finaliza a comparação.
-1 && 2 // 2 - Compara o segundo só se o primeiro for false(falso).



//Exemplo função. retorna(true) => 'ok'
if(10) {
  console.log('Ok');
}


//Exemplo negação.
!!0 // false
!!NaN // false
!!'' // false
!!false // false
!!null // false
!!undefined //false



//Exemplo prático utilizando generateSerial.
const generateSerial = max => {
  if (max === undefined || max === null || max === 0) {
    max = 1000;
  }
  return Math.floor(Math.random() * max);
};
console.log(generateSerial(1000)); //903
console.log(generateSerial(100)); // 24
console.log(generateSerial(10)); // 6
console.log(generateSerial()); // 201



//Exemplo simplificado 1.
var gSerial = max => {
  if(!max) {
    max = 1000;
  }
  return Math.floor(Math.random() * max);
};
console.log(gSerial(1000)); // 432
console.log(gSerial(100)); // 74
console.log(gSerial(10)); // 8
console.log(gSerial()); // 854



//Exemplo simplificado 2.
var gSerial = max => {
  max = max || 1000;
  return Math.floor(Math.random() * max);
};
console.log(gSerial(1000)); // 652
console.log(gSerial(100)); // 22
console.log(gSerial(10)); // 3
console.log(gSerial()); // 235



//Operadores lógicos (| e & e os || e &&).
console.log(1 | 2); // 3
console.log(1 & 2); // 0  //(0001 = 1) + (0010 = 2) = (0000) = 0
console.log(1 || 2); // 1
console.log(1 && 2); // 2



//Operadores Especiais
//typeof, retorna o typo da variavel
console.log(typeof 10); // number
console.log(typeof "JavaScript"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof /abc/); //object
console.log(typeof []); // object
console.log(typeof new Date()); // object



//new, cria um objeto com uma Função Construtora.
const Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};
const pedro = new Pessoa('Pedro', 20);
console.log(pedro);



//instanceof, verifica se o objeto possui uma determinada 'prototipagem' herança.
console.log(pedro instanceof Pessoa); // true, verifica se pedro é uma Pessoa.
console.log(pedro instanceof Date); // false, verifica se o pedro é uma Date.



//in, verifica se o objeto possui determinado atributo.
console.log('nome' in pedro); // true, verifica se pedro tem o atributo nome.
console.log('idade' in pedro); // true, verifica se pedro tem o atributo idade.
delete pedro.nome;
console.log('nome' in pedro); // false, pois o nome foi apagado.



//Operadores de comparação (>, <, <=, >=).
console.log(9 >= 3); // true
console.log(10 <= 7); // false
console.log('Fernando' > 'Lucas'); // false, Porque o F é 'menor' que o L.
console.log('Fernando' < 'Lucas'); // true, Porque o F é 'menor' que o L.



//Operadores aritméticos (+, -, *, / e %).
console.log('Fernando' + ' Lucas'); // Fernando Lucas
console.log(12 * 6);
console.log(10 % 2);



//Operadores de atribuição (+=, -=, *=, /= e %=)
var x = 10;
console.log(x = x + 2); // 12  Normal
var x = 10;
console.log(x += 2); // 12  Simplificado
var x = 10;
console.log(x = x - 3); // 7  Normal
var x = 10;
console.log(x -= 3); // 7  Simplificado



//Operador de incremento e decremento (++ e --)
var x = 0;
console.log(++x); // 1
var x = 10;
console.log(--x); // 9
var x = 0;
console.log(x++); // 0
console.log(x); // 1
var x = 10;
console.log(x--); // 10
console.log(x); // 9



//Operação ternária (expressão) ? true : false.
const idade = 22;
const retorno = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(retorno); // Maior de idade
