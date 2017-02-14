//Função incrementar contador count.
var count = 0;
var add = function() {
    return ++count;
};
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3



////Função adicionar item em array.
var itens = [];
var add = function(item) {
  itens.push(item);
  return itens;
};
console.log(add('A')); // [ 'A' ]
console.log(add('B')); // [ 'A', 'B' ]
console.log(add('C')); // [ 'A', 'B', 'C' ]
console.log(add()); // [ 'A', 'B', 'C', undefined ]



//Função incrementar contador count.
var count = {
  value: 0,
  add: function() {
      return ++this.value;
  }
};
console.log(count.add()); // 1
console.log(count.add()); // 2
console.log(count.add()); // 3
count.value = undefined;
console.log(count.add()); //undefined



//Função adicionar item em array.
var itens = {
  value: [],
  add: function(item) {
    this.value.push(item);
    return this.value;
  }
};
console.log(itens.add('A')); // [ 'A' ]
console.log(itens.add('B')); // [ 'A', 'B' ]
console.log(itens.add('C')); // [ 'A', 'B', 'C' ]



//Função Fábrica
var count = function() {
  var value = 0;
  return {
        add: function() {
        return ++value;
    }
  };
};
var c = count();
console.log(c.value);
console.log(c.add()); // 1
console.log(c.add()); // 2
console.log(c.add()); // 3



//Função Construtora
var count = function() {
  var value = 0;
  this.add = function() {
    return ++value;
  };
};
var c = new count();
console.log(c.value);
console.log(c.add()); // 1
console.log(c.add()); // 2
console.log(c.add()); // 3



//Função Module Pattern -- Encapsula tudo o que tiver como préfixo anderline(_)
var count = (function() {
  var _value = 0;
  return {
        add: function() {
        return ++_value;
    },
    reset: function() {
      _value = 0;
    }
  };
})();
console.log(count.value);
console.log(count.add()); // 1
console.log(count.add()); // 2
console.log(count.add()); // 3
count.reset(); // reseta
console.log(count.add()); // 1


//Função Revealing Module Pattern -- Encapsula tudo o que tiver como préfixo anderline(_)
var count = (function() {
  var _value = 0;
  var _add = function() {
      return ++_value;
  };
  var _reset = function() {
    _value = 0;
  };
  return {
    add: _add,
    reset: _reset
  };
})();
console.log(count.value);
console.log(count.add()); // 1
console.log(count.add()); // 2
console.log(count.add()); // 3
count.reset(); // reseta
console.log(count.add()); // 1
