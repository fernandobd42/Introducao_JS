//Função incrementar contador count.
var count = 0;
var add = () => ++count;
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3



////Função adicionar item em array.
var itens = [];
var add = item => {
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
  add() {
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
  add(item) {
    this.value.push(item);
    return this.value;
  }
};
console.log(itens.add('A')); // [ 'A' ]
console.log(itens.add('B')); // [ 'A', 'B' ]
console.log(itens.add('C')); // [ 'A', 'B', 'C' ]



//Função Fábrica
var count = () => {
  let value = 0;
  return {
        add() {
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
  let value = 0;
  this.add = () => ++value;
};
var c = new count();
console.log(c.value);
console.log(c.add()); // 1
console.log(c.add()); // 2
console.log(c.add()); // 3



//Função Module Pattern -- Encapsula tudo o que tiver como préfixo anderline(_)
var count = ((() => {
  let _value = 0;
  return {
        add() {
        return ++_value;
    },
    reset() {
      _value = 0;
    }
  };
}))();
console.log(count.value);
console.log(count.add()); // 1
console.log(count.add()); // 2
console.log(count.add()); // 3
count.reset(); // reseta
console.log(count.add()); // 1


//Função Revealing Module Pattern -- Encapsula tudo o que tiver como préfixo anderline(_)
var count = ((() => {
  let _value = 0;
  const _add = () => ++_value;
  const _reset = () => {
    _value = 0;
  };
  return {
    add: _add,
    reset: _reset
  };
}))();
console.log(count.value);
console.log(count.add()); // 1
console.log(count.add()); // 2
console.log(count.add()); // 3
count.reset(); // reseta
console.log(count.add()); // 1
