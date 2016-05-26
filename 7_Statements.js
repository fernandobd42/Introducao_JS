//Statement(Declaração) - (for, if, else, continue, while, switch, break, throw, try e catch)

//Exemplo 0 - Retornando um caractere por vez. FOR para ler cada caractere do texto
text = 'Introdução a JavaScript'
var exemplo0 = function(text) {
  for(var i = 0; i < text.length; i++ )
  console.log(text.charAt(i));
};
exemplo0(text); // Retornou um caractere da varviavel text por linha.



//Exemplo 1 - Substituindo determinado valor da string FOR para ler cada caractere do texto e IF para fazer a substituição.
text = 'Ola Mundo Louco'
var exemplo1 = function(text) {
  var array = [];
  for(var i = 0; i < text.length; i++ ) {
    if (text.charAt(i) === 'o') {
      array.push(0);
    } else {
      array.push(text.charAt(i));
    }
  }
  return array.join(',');
};
console.log(exemplo1(text)); // 'O,l,a, ,M,u,n,d,0, ,L,0,u,c,0'



//Exemplo 2 - Substituindo determinados valores da string. FOR para ler cada caractere do texto e IF para fazer a substituição.
text = 'Ola Mundo Sinistro'
var exemplo2 = function(text) {
  var array = [];
  for(var i = 0; i < text.length; i++ ) {
    if (text.charAt(i) === 'o') {
      array.push(0);
      continue;
    }
    if (text.charAt(i) === 'a') {
      array.push(4);
      continue;
    }
    if (text.charAt(i) === 'i') {
      array.push(1);
      continue;
    }
    if (text.charAt(i) === 't') {
      array.push(7);
      continue;
    }
      array.push(text.charAt(i));
    }
  return array.join('-');
};
console.log(exemplo2(text));// 'O-l-4- -M-u-n-d-0- -S-1-n-1-s-7-r-0'



//Exemplo 3 - Substituindo determinados valores da string. FOR para ler cada caractere do texto e
// SWITCH no lugar do IF para aperfeiçoar a substituição.
text = 'Ola Mundo Sinistro'
var exemplo3 = function(text) {
  var array = [];
  for(var i = 0; i < text.length; i++ ) {
    switch (text.charAt(i)) {
      case 'o':
        array.push(0);
        break;
      case 'a':
        array.push(4);
        break;
      case 'i':
        array.push(1);
        break;
      case 't':
        array.push(7);
        break;
      default:
        array.push(text.charAt(i));
    }
  }
  return array.join(',');
};
console.log(exemplo3(text)); // 'O,l,4, ,M,u,n,d,0, ,S,1,n,1,s,7,r,0'



//Exemplo 4 - Substituindo determinados valores da string. WHILE no lugar do FOR para ler cada caractere do texto e
// SWITCH no lugar do IF para aperfeiçoar a substituição.
text = 'Ola Mundo Sinistro'
var exemplo4 = function(text) {
  var array = [];
  var i = 0;
  while( i < text.length) {
    switch (text.charAt(i)) {
      case 'o':
        array.push(0);
        break;
      case 'a':
        array.push(4);
        break;
      case 'i':
        array.push(1);
        break;
      case 't':
        array.push(7);
        break;
      default:
        array.push(text.charAt(i));
    }
    i++;
  }
  return array.join('/');
};
console.log(exemplo4(text)); // 'O/l/4/ /M/u/n/d/0/ /S/1/n/1/s/7/r/0'



//Exemplo 5 - Tratamento de erros utilizando throw para lançar a string.
text = 'Ola Mundo Sinistro'
var exemplo5 = function(text) {
  // 0 , Nan, "", false, null e undefined. Caso seja algum destes, o (!text) será verdadeiro
  if(!text) throw " Invalid text.";
  var array = [];
  var i = 0;
  while( i < text.length) {
    switch (text.charAt(i)) {
      case 'o':
        array.push(0);
        break;
      case 'a':
        array.push(4);
        break;
      case 'i':
        array.push(1);
        break;
      case 't':
        array.push(7);
        break;
      default:
        array.push(text.charAt(i));
    }
    i++;
  }
  return array.join('');
};
try {
  console.log(exemplo5());
} catch(e) {
  console.log("Error:" + e); //Error: Invalid text
}
console.log(exemplo5(text)); // 'Ol4 Mund0 S1n1s7r0'




//Exemplo 6 - Tratamento de erros utilizando throw. Utiliza (!text) lançando a Função Construtora(new) para chamar
//variável VarError que recebe passa função.
text = 'Ola Mundo Sinistro'

var VarError = function(message) {
  this.message = message;
  this.nome = "Função armazenada na viriável VarError";
};

var exemplo6 = function(text) {
  // 0 , Nan, "", false, null e undefined. Caso seja algum destes, o (!text) será verdadeiro
  if(!text) throw new VarError(" Invalid text.");
  var array = [];
  var i = 0;
  while( i < text.length) {
    switch (text.charAt(i)) {
      case 'o':
        array.push(0);
        break;
      case 'a':
        array.push(4);
        break;
      case 'i':
        array.push(1);
        break;
      case 't':
        array.push(7);
        break;
      default:
        array.push(text.charAt(i));
    }
    i++;
  }
  return array.join('+');
};
try {
  console.log(exemplo6());
} catch(e) {
  console.log("Error:" + e.message + " " + e.nome); // Error Invalid text. Função armazenada na viriável VarError
}
console.log(exemplo6(text)); // 'O+l+4+ +M+u+n+d+0+ +S+1+n+1+s+7+r+0'



//Exemplo 7 - Tratamento de erros utilizando throw.
//Verificando se o text é falso, e retornando mensagem. Utiliza (!text) e typeof lançando a Função Construtora(new)
//para chamar variável VarError que passa uma função.
text = 'Ola Mundo Sinistro'

var VarError = function(message) {
  this.message = message;
  this.nome = "Função armazenada na viriável VarError";
};

var exemplo7 = function(text) {
  // 0 , Nan, "", false, null e undefined. Caso seja algum destes, o (!text) será verdadeiro
  if(!text) throw new VarError("Invalid text.");
  if(typeof text !== "string") throw new VarError("Invalid type.");
  var array = [];
  var i = 0;
  while( i < text.length) {
    switch (text.charAt(i)) {
      case 'o':
        array.push(0);
        break;
      case 'a':
        array.push(4);
        break;
      case 'i':
        array.push(1);
        break;
      case 't':
        array.push(7);
        break;
      default:
        array.push(text.charAt(i));
    }
    i++;
  }
  return array.join('=');
};
try {
  console.log(exemplo7());
} catch(e) {
  console.log("Error: " + e.message + " " + e.nome); // Error Invalid text. Função armazenada na viriável VarError
}
try {
  console.log(exemplo7(10));
} catch(e) {
  console.log("Error: " + e.message + " " + e.nome); // Error: Invalid type. Função armazenada na viriável VarError
}
console.log(exemplo7(text)); // 'O=l=4= =M=u=n=d=0= =S=1=n=1=s=7=r=0'
