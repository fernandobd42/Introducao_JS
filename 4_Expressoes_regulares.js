//Exemplo criar expressão regular. Modelo Fábrica.
var regExp = /abc/;
console.log(regExp); // /abc/

//Exemplo criar expressão regular. Modelo Construção(Utiliza o new).
var regExp = new RegExp('def');
console.log(regExp); // /def/



//Passo 1) Reconhecer numero de telefone.
 var regExp = /9999-9999/;
 var telefone = '9999-9999';
//Modelo exec
 console.log(regExp.exec(telefone)); //[ '9999-9999', index: 0, input: '9999-9999' ]
//Modelo test
console.log(regExp.test(telefone)); //true



//Passo 2) Reconhecer numero de telefone com DDD.
 var regExp = /\(46\) 9999-9999/;
 var telefone = '(46) 9999-9999';
//Modelo exec
 console.log(regExp.exec(telefone)); //[ '9999-9999', index: 0, input: '9999-9999' ]
//Modelo test
console.log(regExp.test(telefone)); //true



//Passo 3) Reconhecer numero de telefone em uma String
var regExp = /\(46\) 9999-9999/;
var telefone = 'O telefone é (46) 9999-9999, tratar com o Jose';
//Modelo exec
console.log(regExp.exec(telefone)); //[ '(46) 9999-9999', index: 13, input: 'O telefone é (46) 9999-9999, tratar com o Jose' ]
//Modelo test
console.log(regExp.test(telefone)); //true



//ER (Expressão Regular)
//Passo 4) Flexibilizar a ER para reconhecer qualquer numero de telefone que esteja de acordo com o padrão pré-definido
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/; // ^ -> inicio da ER, $ -> fim da ER
var telefone = '(46) 8899-9999';
//Modelo exec
console.log(regExp.exec(telefone)); //[ '(46) 8899-9999', index: 0, input: '(46) 8899-9999' ]
//Modelo test
console.log(regExp.test(telefone)); //true



//Exemplo 1) Quantificador
//Passo 5) Facilitar ER anterior, com as {}.
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/; // ^ -> inicio da ER, $ -> fim da ER, {x} -> x indica a quantidade de numeros
var telefone = '(46) 8899-9999';
//Modelo exec
console.log(regExp.exec(telefone)); //[ '(46) 8899-9999', index: 0, input: '(46) 8899-9999' ]
//Modelo test
console.log(regExp.test(telefone)); //true



//Passo 6) Flexibilizar ER anterior. Caso o numero tenha 4 ou 5 digitos.
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/; // ^ -> inicio da ER, $ -> fim da ER, {x} -> x quantidade de numeros
var telefone = '(46) 58899-9999';
//Modelo exec
console.log(regExp.exec(telefone)); //[ '(46) 58899-9999', index: 0, input: '(46) 58899-9999' ]
//Modelo test
console.log(regExp.test(telefone)); //true



//Exemplo 2) Quantificador
//Passo 7) Flexibilizar ER anterior, utilizando '?' para dizer que o '-' é opcional.
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/; // ^ -> inicio da ER, $ -> fim da ER, {x} -> x quantidade de numeros
var telefone1 = '(46) 688999999';
var telefone2 = '(54) 98763-3434';
//Modelo exec
console.log(regExp.exec(telefone1)); //[ '(46) 688999999', index: 0, input: '(46) 688999999' ]
console.log(regExp.exec(telefone2)); //[ '(54) 98763-3434', index: 0, input: '(54) 98763-3434' ]
//Modelo test
console.log(regExp.test(telefone1)); //true
console.log(regExp.test(telefone2)); //true



//Passo 8) Reconhecer numeros de telefone dentro de uma tabela.
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/; // ()+ -> um ou mais, ou ()* -> zero ou mais
var telefone = '<table><tr><td>(80) 994534543</td><td>(70) 34353-4543</td><td>(60) 77774543</td></tr></table>';
//Modelo exec
console.log(regExp.exec(telefone)); //
//Modelo test
console.log(regExp.test(telefone)); // true



//Metacaracteres
// . - representa qualquer caracter
// \w - representa o conjunto [a-zA-Z0-9]
// \W - representa o conjunto [^a-zA-Z0-9] || ^ -> negação do conjunto
// \d - representa o conjunto [0-9]
// \D - representa o conjunto [^0-9] || ^ -> negação do conjunto
// \s - representa um espaço em branco
// \S - representa um não espaço em branco
// \n - representa uma quebra de linha
// \t - representa um tab
//Passo 9) Reconhecer numero de telefone dentro de uma tabela, utilizando as tags de Metacaracteres
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/; // \d e \s -> utilizando metacaracteres
var telefone = '<table><tr><td>(80) 994534543</td><td>(70) 34353-4543</td><td>(60) 77774543</td></tr></table>';
//Modelo exec
console.log(regExp.exec(telefone)); //
//Modelo test
console.log(regExp.test(telefone)); // true



//Passo 10) Exemplo match da String API. Para pegar somente o primeiro telefone.
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/; // Reconhecer somente o primeiro telefone. \d e \s -> metacaracteres
var telefone = '<table><tr><td>(80) 994534543</td><td>(70) 34353-4543</td><td>(60) 77774543</td></tr></table>';
console.log(telefone.match(regExp)); //[ '(80) 994534543', index: 15 .....] pegou só o primeiro.



//Modificadores
// i - Case-insensitive mtching
// g - Global matching
// m - Multiline matching
//Passo 11) Exemplo de da String API. Buscar todos os telefones da tabela utilizando modificadores.
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; // Reconhecer somente os telefones || g -> todos os matching || \d e \s -> metacaracteres
var telefone = '<table><tr><td>(80) 994534543</td><td>(70) 34353-4543</td><td>(60) 77774543</td></tr></table>';
console.log(telefone.match(regExp)); //[ '(80) 994534543', '(70) 34353-4543', '(60) 77774543' ]

//Buscar somente os telefones sem os préfixos.
var regExp = /\d{4,5}-?\d{4}/g; // Reconhecer somente os telefones || g -> todos os matching || \d e \s -> utilizando metacaracteres
var telefone = '<table><tr><td>(80) 994534543</td><td>(70) 34353-4543</td><td>(60) 77774543</td></tr></table>';
console.log(telefone.match(regExp)); // [ '994534543', '34353-4543', '77774543' ]



//Passo 12) Exemplo replace da String API. Substitui todos os telefones da tabela.
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; // Reconhecer somente os telefones || g -> todos os matching || \d e \s -> metacaracteres
var telefone = '<table><tr><td>(80) 994534543</td><td>(70) 34353-4543</td><td>(60) 77774543</td></tr></table>';
console.log(telefone.replace(regExp, 'Telefone'));
