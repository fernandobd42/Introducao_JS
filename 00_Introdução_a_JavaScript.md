

###"A linguagem JavaScript é a única que as pessoas acham que não precisam aprender antes de começar a utilizar."
(Douglas Crockford)

##O que é?
```
  JavaScript é uma linguagem de programação, criada por Dan Winkler em 1987 para a plataforma HyperCard
da Apple. A princípio denominada HyperTalk, que era uma linguagem orientada a eventos, que veio para
simplificar, a proposta do criador era de fazer uma linguagem para iniciantes.
  A Netscape quando viu, ficou impressionada com a simplicidade da linguagem, e teve a idéia de embarcar
ela no browser. Foi ai que o tão famoso Brendan Eich, conhecido como o criador do JavaScript entrou em cena.
A Netscape então contratou-o para implementar uma linguagem para o seu browser. Tendo em vista que a Netscape
buscava algo simples, o Brendan Eich se baseou nas linguagens Java, Scheme, Self, e Perl. A seguir será 
esplanado superficialmente quais são as origens do JavaScript.

-Java:
  - Sintaxe; Sintaxe familiar, exemplo do objeto Math que faz operações, porém uma coisa não tem nada a
ver com a outra.
  - Algumas convenções; CamelCase, nome de função e variável com letra minuscúla, dentre algumas outras 
similaridades.

-Scheme:
  -Lambda; Função anônima.
  -Closure; Acontece quando uma função é criada dentro de outra função.
  -Tipagem Fraca; Torna possível fazer operações com valores de tipos diferentes, convertendo o tipo dos
valores e fazendo concatenção.

-Self:
  -Herança baseada em protótipos; É um estilo de programação orientada a objetos na qual não existe classes, 
em vez disso, a reutilização de comportamento(equivalente a herança das linguagens baseadas em classes) é 
realizada através de um processo de decorar(expandir) objetos existentes que servem como protótipos. 
Basicamente objetos herdam de outros objetos.
  -Objetos dinâmicos; Permite que você defina seus próprios objetos. Em JavaScript pode-se adicionar 
métodos a objetos individuais, sem a necessidade de reusos adicionais. Isso dá enorme poder, uma vez que
se pode escrever menos, com mais simplicidade e menor complexidade de código. É importante lembrar que 
objetos em JavaScript são como hashtables. Assim, se pode adicionar novos valores a qualquer momento. 
Já se o valor é  uma função, então se torna um método.

-Perl
  -Expressões Regulares; São padrões utilizados para selecionar cadeias de caracteres de interesse em um
texto.
Em JavaScript, expressões regulares são também objetos. Por exemplo elas podem ser utilizadas com os 
métodos exec e test do objeto RegExp, e com os métodos match, replace, search, e split do objeto String.


  O primeiro nome da linguagem foi Mocha, sugerido pelo fundador da Netcape Marc Andreessen, porém acabou
nem indo para o mercado. A linguagem foi lançada oficialmente em Setembro de 1995 com o nome de LiveScript
na versão beta do Netscape Navigator 2.0. A partir de então a Netscape estava entrando com tudo no mundo
dos browsers e a Microsoft não quis perder a carona e se deu início ao internet explorer.
  Em dezembro, o nome da linguagem mudou para JavaScript, a partir de um acordo feito com a Sun com o 
objetivo de destruir a Microsoft. A Sun então registrou o JavaScript como uma marca de uso exclusivo da
Netscape, impossibilitando a Microsoft de utilizar a linguagem. Ainda assim a Microsoft fez uma engenharia
reversa da linguagem JavaScript e criou a linguaguem JScript.
  A Netscape com medo de perder o controle, buscou padronizar a linguagem em entidades respeitadas, 
até que em 1997 junto a ECMA(European Computer Manufacturers Association) Internacional, conseguiu 
padronizar a linguagem nomeando-a ECMAScript como nome oficial, JavaScript é apenas o nome fantasia.
```

##Características
```
  JavaScript é uma linguagem interpretada, não é preciso instalar nada na sua máquina, nem um tipo de 
compilador a não ser que voce queira interpretá-la.
  Utiliza de uma orientação a objetos baseada em protótipos, basicamente não usa classes para promover 
heranças, mas sim os próprios objetos. Simplesmente objetos herdam de objetos. *
  É uma linguagem que possui tipagem fraca e dinâmica, isto quer dizer que a gente tem uma liberdade
muito grande, só que isso gera um pouco de insegurança já que a gente não tem garantia dos nossos tipos, 
com JavaScript é possível concatenar valores de tipos diferentes.
  A linguagem não apresenta suporte a programação multi-thread, mas nada impede que seus interpretadores
implementem esta habilidade de fazer algum tipo de processamento em paralelo.
```

##Como funciona?
```
  Esta linguagem vem sendo bastante utilizada para o desenvolvimento de aplicações web, atualmente tanto no
lado do cliente para promover os estilos nas páginas HTML com animações em CSS, quanto no lado do servidor
para fazer a manipulação e validação dos dados utilizando NodeJS. A linguagem permite que a aplicação seja 
totalmente funcional e dinâmica, sendo possível também modelar e manipular até o banco de dados através da 
linguagem utilizando MongoDB.
  Hoje esta presente nos Browsers, a até nas Tvs, como nas samsungs smart. Usa o V8 que é o motor de 
renderização da linguagem, que funciona como uma máquina virtual que compila o código em JavaScript para
o formato nativo de máquina antes de executá-lo, tendo como propósito aumentar o desempenho da aplicação.
```

##Por convenção aconselha-se criar as variáveis seguindo as regras:
``` 
  -Devem começar por uma letra, $, ou _
  -Após a primeira letra, podem conter números.
  -Começam com letra minúscula e usam camelCase
  -É case-sensitive
```

#OBS: Com o JavaScript ficou simples se tornar um fullstack, pois é possível fazer tudo com esta linguagem do caralho.

