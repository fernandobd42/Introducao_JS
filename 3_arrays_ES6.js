//Iniciando array vazio e atribuindo valores depois.
var carros = []

console.log(carros[0] = 'KA'), // KA
console.log(carros[1] = 'Palio'), // Palio
console.log(carros[2] = 'Punto'), // Punto
console.log(carros) // [ 'KA', 'Palio', 'Punto' ]



//Iniciando array com new e atribuindo valores depois.
var carros = new Array()

console.log(carros[0] = 'Fusca'), // Fusca
console.log(carros[1] = 'Brasilia'), // Brasilia
console.log(carros[2] = 'Chevete'), // Chevete
console.log(carros) // [ 'Fusca', 'Brasilia', 'Chevete' ]



//Iniciando array in line.
var carros = ['Ka', 'Palio', 'Punto'];
console.log(carros) // [ 'KA', 'Palio', 'Punto' ]



//Iniciando array in line com new.
var carros = new Array('Fusca', 'Brasilia', 'Chevete');
console.log(carros) //[ 'Fusca', 'Brasilia', 'Chevete' ]



//Determinando tamanho INICIAL do array. (LEMBRANDO QUE EM JS O ARRAY NAO TEM TAMANHO FIXO)
var carros = new Array(10)
console.log(carros) // [ , , , , , , , , ,  ]



//Exemplo valueOf no array. Retorna o Array.
var carros = ['HRV', 'Jetta', 'Hillux'];
console.log(carros.valueOf()); // [ 'HRV', 'Jetta', 'Hillux' ]



//Exemplo toString no array. Retorna a String.
var carros = ['HRV', 'Jetta', 'Hillux'];
console.log(carros.toString()); // 'HRV,Jetta,Hillux'



//Exemplo length no array. Retorna a quantidade de objetos existentes no array.
var carros = ['HRV', 'Jetta', 'Hillux'];
console.log(carros.length) // 3



//Exemplo push no array. Insere um elemento no final do array.
console.log(carros.push('Gol')) // 4



//Exemplo unshift no array. Insere um elemento no início do array.
console.log(carros.unshift('Lamborghine')) // 5



//Exemplo pop no array. Remove o último elemento do array.
console.log(carros.pop()) // 'Gol'



//Exemplo shit no array. Remove o primeiro elemento do array.
console.log(carros.shift()) // 'Lamborghine'



//Exemplo indexOf no array. Retorna o indice de um objeto do array.
console.log(carros.indexOf('Jetta')) //1



//Exemplo de splice no array. Remove objetos do array utilizando o índice,
//sendo possível remover mais de um elemento de uma vez
console.log(carros.splice(1, 2)) //[ 'Jetta', 'Hillux' ]



//Exemplo de splice no array. Adiciona um ou mais elementos no array.
console.log(carros.splice(1, 0, 'jetta', 'hillux'))
//1 -> busca elemento com índice 1, 0 -> remove 0 objetos do array, 'jetta', 'hillux' -> elementos dicionados.



//Exemplo de iniciar array vazio e adicionar um elemento por vez com dois valores em cada elemento.
var carros = [];

carros[0] = {marca:'ford', modelo:'ka'};
carros[1] = {marca:'chevrolet', modelo:'corsa'}
carros[2] = {marca: 'fiat', modelo: 'palio'}



//Exemplo de iniciar array in line, adicionando três elementos de uma vez com dois valores em cara elemento.
var carros = [{marca: 'ford', modelo: 'ka'}, {marca:'chevrolet', modelo:'corsa'}, {marca:'fiat', modelo:'Palio'}];



//Exemplo de forEach no array. Busca todos os elementos do array. Evolução do for, mais simples.
carros.forEach(car => {
  console.log(car);
});
// { marca: 'ford', modelo: 'ka' }
// { marca: 'chevrolet', modelo: 'corsa' }
// { marca: 'fiat', modelo: 'Palio' }



//Exemplo de filter no array. Busca determinado elemento com algum(a) filtro(característica) específico.
carros.filter(car => car.marca === 'ford');
// [ { marca: 'ford', modelo: 'ka' } ]



//Exemplo de filter no array. Atribui função à variável carrosFord.
const carrosFord = carros.filter(car => car.marca === 'ford');
carrosFord // [ {marca: 'ford', modelo: 'ka' } ]



//Exemplo de every no array. Verifica se todos os elementos são da marca ford, funciona como um boolean.
carros.every(car => car.marca === 'ford'); //false



//Exemplo de some no array. Verifica se algum dos elementos é da marca ford, funciona como um boolean.
const s = carros.some(car => car.marca === 'ford');
s //true



//Exemplo de map no array. Mapeia os elementos por características.
//Mapeia a marca de todos os elementos do array
carros.map(car => car.marca); // ['ford', 'chevrolet', 'fiat']

//Mapeia quantos caracteres tem a marca de cada elemento do array
const mapLength = carros.map(car => car.marca.length);
mapLength // [4 ,9, 4]



//Exemplo diferença de forEach para reduce no array.
var carros = [];

carros[0] = {marca:'ford', modelo:'ka', preco: 25000};
carros[1] = {marca:'chevrolet', modelo:'corsa', preco: 35000}
carros[2] = {marca: 'fiat', modelo: 'palio', preco: 38000}

//ForEach
let total = 0;
carros.forEach(car => {
  total += car.preco;
});
total // 98000


//Reduce
carros.reduce((prev, cur) => prev + cur.preco, 0); //98000 || prev -> elemento anterior + cur -> elemento atual, 0 -> começa do elemento 0



//Criando 2 arrays, um de carros e um de motos
var carros = ['ka', 'corsa', 'palio']
const motos = ['honda', 'yamaha'];



//Exemplo de concat no array. Criando um array de veiculos, contendo os arrays carros e motos
const veiculos = carros.concat(motos);
veiculos // [ 'ka', 'corsa', 'palio', 'honda', 'yamaha' ]
veiculos.length // 5



//Exemplo de splice no array. Busca determinados elemetos pré-definidos
veiculos.slice(0,2) // [ 'ka', 'corsa' ]
veiculos.slice(0,4) // [ 'ka', 'corsa', 'palio', 'honda' ]
veiculos.slice(3,5) // [ 'honda', 'yamaha' ]



//Exemplo reverse no array. Reverte a ordem da listagem de elementos.
veiculos.reverse() // [ 'yamaha', 'honda', 'palio', 'corsa', 'ka' ]
veiculos // [ 'yamaha', 'honda', 'palio', 'corsa', 'ka' ]
veiculos.reverse() // [ 'ka', 'corsa', 'palio', 'honda', 'yamaha' ]
veiculos // [ 'ka', 'corsa', 'palio', 'honda', 'yamaha' ]



//Exemplo de sort no array. Ordena por ordem alfabetica, preco, ou qualquer outra caracteristica do elemento.
var carros = [];

carros[0] = {marca: 'fiat', modelo: 'palio', preco: 38000}
carros[1] = {marca:'ford', modelo:'ka', preco: 25000};
carros[2] = {marca:'chevrolet', modelo:'corsa', preco: 35000}

//Ordenar por preço, do menor para o maior.
carros.sort((a, b) => a.preco - b.preco);
// [ { marca: 'ford', modelo: 'ka', preco: 25000 },
//   { marca: 'chevrolet', modelo: 'corsa', preco: 35000 },
//   { marca: 'fiat', modelo: 'palio', preco: 38000 } ]

//Ordenar por preço, do maior para o menor.
carros.sort((a, b) => b.preco - a.preco);
// [ { marca: 'fiat', modelo: 'palio', preco: 38000 },
//   { marca: 'chevrolet', modelo: 'corsa', preco: 35000 },
//   { marca: 'ford', modelo: 'ka', preco: 25000 } ]



//Exemplo join no array. Junta elementos com um separados pré-determinado.
var carros = ['ka', 'corsa', 'palio', 'gol'];
carros.join('/') // 'ka/corsa/palio/gol' || / -> separador dos elementos na String
carros.join('-') // 'ka-corsa-palio-gol' || - -> separador dos elementos na String
