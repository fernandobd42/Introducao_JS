//Criando data com new Date, utilizando Função Construtora.
var hoje = new Date();
console.log(hoje); // 2016-05-25T17:49:53.556Z
console.log(hoje.getTime()); // 1464198593556  Milisegundos
var natal = new Date(1464199028000)
console.log(natal); //2016-05-25T17:57:08.000Z


//Criando data com Date, utilizando Função Fábrica.
var hoje = Date()
console.log(hoje); // 'Wed May 25 2016 14:53:37 GMT-0300 (BRT)'
console.log(Date.parse(hoje)); // 1464199028000
var natal = Date(1464199028000)
console.log(natal); // 'Wed May 25 2016 14:57:56 GMT-0300 (BRT)'

//Date API
//getDate - Retorna o dia
//getDay - Retorna o dia da semana
//getFullYear - Retorna o ano
//getHours - Retorna as horas
//getMilliseconds - Retorna os milisegundos
//getMinutes - Retorna os minutos
//getMonth - Retorna o mês
//getSeconds - Retorna os segundos
//getTime - Retorna o tempo em Milisegundos
//toString - Retorna a data em String

//Criando uma data passando como parâmetro uma String.
//Função Construtora. (UTILIZA O OPERADOR NEW)
console.log(Date.parse('2016/05/25')); // 1464145200000
console.log(new Date(1464145200000)); // 2016-05-25T03:00:00.000Z
console.log(new Date('2016-05-25T16:20:00-00:00')); //2016-05-25T16:20:00-00:00'
var data = new Date();
console.log(data.getDate()); // 25
console.log(data.getDay()); // 3
console.log(data.getHours()); // 15
console.log(data.getFullYear()); // 2016
console.log(data.getMilliseconds()); // 916
console.log(data.getMinutes()); // 26
console.log(data.getMonth()); // 4
console.log(data.getSeconds()); // 9
console.log(data.getTime()); // 1464200769916
console.log(data.toString()); // Wed May 25 2016 15:26:09 GMT-0300 (BRT)


//Função Fábrica.
console.log(Date.parse('05/25/2016')); // 1464145200000
console.log(Date(1464145200000)); // Wed May 25 2016 15:12:02 GMT-0300 (BRT)
