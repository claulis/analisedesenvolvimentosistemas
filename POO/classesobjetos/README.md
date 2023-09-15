# Abstração - Classes e Objetos 

## O que é Abstração? :eyes:

Vamos supor que você está entrando no seu carro, liga o motor e vai no destino que deve ir. Para se mover com um carro, precisa saber dos detalhes do funcionamento do motor?
Precisa saber que tipo de engenharia foi utilizada? Precisa saber da hidráulica? Da eletronica?🤔
Claro que não! você só precisa saber como ligar, acelerar, usar o volante....saber qual a esquerda e a direta 😂

Essa é a abstração. **É a ideia de que você pode usar objetos em seu programa sem precisar entender todos os detalhes internos de como esses objetos funcionam.**

Aqui estão alguns pontos-chave sobre abstração em POO:

- **Esconder detalhes complexos:** Em POO, você cria objetos que têm propriedades (dados) e métodos (ações) associados a eles. A abstração permite que você se concentre apenas no uso desses objetos, sem precisar saber como eles são implementados internamente.

- **Facilita o gerenciamento de complexidade:** À medida que os programas se tornam mais complexos, a abstração torna mais fácil lidar com essa complexidade. Você pode pensar nos objetos como "caixas pretas" que fazem coisas úteis sem que você precise saber como funcionam por dentro.

- **Promove a reutilização de código:** Quando você usa abstração para criar objetos, você pode reutilizá-los em diferentes partes do seu programa ou mesmo em projetos diferentes. Isso economiza tempo e torna o desenvolvimento de software mais eficiente.

- **Melhora a colaboração:** Em projetos de programação maiores, diferentes pessoas podem trabalhar em diferentes partes do código. A abstração permite que cada pessoa se concentre em sua parte do código sem precisar entender tudo o que está acontecendo em outras partes.

## Representação dos dados

O mundo pode ser compreendido por nos humanos através de pensamentos e julgamentos sobre caraterísticas das coisas ao nosso redor.
Cores, sabores, cheiros, imagens, sensações do tato são fenômenos que nos colocam em relação com o mundo.
Um ser humano entende um objeto da realidade por meio de suas características e de relações. 
O milagre do cérebro humano está em entender os objetos na sua complexidade, nas suas características mais profundas.

E como um computador pode entender os objetos que nos circundam?🤔
Simplesmente não entendem...mas podemos fornecer uma **representação computacional** das caraterística dos objetos reais.

## Paradigma de Programação Orientada a Objetos (POO)
Na computação, até o advento das da linguagem c++ (anos 80-90), os dados eram representados de maneira não estruturada, por meio de variáveis.

> :memo: **Lembra:** Uma variável é um espaço na memória do computador que armazena um valor e possui um nome.
> Na programação, as variáveis são usadas para armazenar valores que podem ser usados posteriormente no programa.

Por exemplo: de que maneira o **conceito de pessoa** pode ser representada por variáveis isoladas? O conceito de uma pessoa é complexo e essa entidade possui caraterísticas relacionadas entre si e a própria entidade se relaciona com outras entidades.
A realidade é bem complexa! 😱

## Classe 
Enfim chegamos ao ponto da questão.
Podemos entender classes como o projeto, o modelo da representação computacional dos dados de uma entidade real e um objeto como seua realização ou implementação na memória do computador.

Do ponto de vista acadêmico, segundo Pressman (2011)
> :memo: Classe é um conceito orientado a objeto que encapsula dados e abstrações procedurais
> necessárias para descrever o conteúdo e comportamento de alguma entidade do mundo real.

Vamos tentar entender de um ponto de vista prático.

Vamos usar a linguagem Javascript, bastante popular e que implementa os paradigmas POO. E vamos usar o exemplo do código que está nesta pasta. 
Vamos trabalhar com o exemplo de carros e livros.

![Maserati](https://th.bing.com/th/id/OIP.BHyLJSt4fj8TMdv4dholagAAAA?pid=ImgDet&rs=1 "Top!!")

👆 este é um carro e 👇 este é um livro

![livro](https://th.bing.com/th/id/R.244e1c333892273064e754ea962deaa6?rik=uC0lAbcXrsA04w&riu=http%3a%2f%2fsr.photos2.fotosearch.com%2fbthumb%2fCSP%2fCSP993%2fk15420148.jpg&ehk=Z1KGnTJjRWca9Pf5q01hB1Q1k3dsOhQZ83NF99caS34%3d&risl=&pid=ImgRaw&r=0 "livro")

Claro né 😉

O que define um carro? O que define um livro? Como representar simplesmente as caraterísticas mais obvias desses objetos da vida real?

Vamos utilizar as classes.
No exemplo nessa pasta temos `Carro.js` e `Livro.js`

- Caraterísticas das entidades:
 - Carro:
   - marca
   - modelo
   - ano
 - Livro:
   - titulo
   - autor
   - ano
  
Como implementar uma classe em javascript? Preste atenção nos comentários 👉 `// /*..*/`
Vamos ver aqui 👇
```javascript
// a palavra reservada class, obivamente serve para declarar uma classe
class Carro{
/*a palavra reservada constructor serve para transforar a classe em objeto,
guardando em memória os dados do objeto(o estado)
dentro do constructor são declarados os attrubutos (attributes),
ou seja as caraterísticas da entidade que aclasse quer representar.
A palavra reservada this se refere ao atributos declarados que fazem parte detsa classe, são variáveis internas da classe. */
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
      }
/*a partir daqui tem a declaração e implementação dos metodos ou funções,
 que são o comportamento da classe, ou seja o que a classe faz. */
      acelerar() {
        console.log(`${this.marca} ${this.modelo} Acelerando...`);
      }
      frear() {
        console.log(`${this.marca} ${this.modelo} Freando...`);
      }
}
```

Essa classe tem um construtor que aceita três argumentos: marca, modelo e ano. Esses argumentos são usados para inicializar os atributos correspondentes da classe. Além disso, a classe possui dois métodos: acelerar e frear, que usam os atributos da classe para exibir mensagens indicando que o carro está acelerando ou freando, respectivamente.

Com base nesse código, você pode criar objetos do tipo Carro, atribuindo valores específicos para a marca, modelo e ano. E então, você pode chamar os métodos acelerar e frear nesses objetos para ver as mensagens de saída correspondentes.

## Objetos
Quando você cria um objeto a partir de uma classe, você está criando uma representação concreta dessa entidade específica, com valores reais para seus atributos e a capacidade de executar os métodos definidos na classe.
Um objeto é uma **instância em memória** concreta dessa classe. Se a classe é o plano, o objeto é a realização desse plano. Por exemplo, você pode criar um objeto do tipo Carro chamado meuCarro com a marca "Toyota", o modelo "Corolla" e o ano "2023". O objeto meuCarro terá os atributos específicos e poderá executar os métodos definidos na classe Carro.

> :memo: uma "instância em memória" refere-se ao espaço físico reservado na memória do computador para conter os dados específicos de um objeto criado a partir de uma classe. Cada instância tem sua própria cópia dos atributos e métodos definidos na classe, permitindo a criação de objetos independentes com  características distintas.

Quando você cria uma instância (ou objeto) de uma classe, o sistema aloca uma área na memória para armazenar os atributos e métodos específicos daquela instância.

Em linguagens de programação orientadas a objetos, como Java, Python, C++ e muitas outras, quando você cria um objeto, o espaço necessário para armazenar seus atributos (variáveis) e métodos (funções) é reservado na memória.

## Da classe para o objeto

Agora vamos utilizar a classe Carro e torná-la um objeto, ou seja alocar um espaço em memória para o objeto Carro.

```javascript
// Criação da primeira instância do objeto Carro
const carro1 = new Carro("Maserati", "Gran Turismo", 2016);

// Chamada do método 'acelerar' da instância carro1
carro1.acelerar();

// Chamada do método 'frear' da instância carro1
carro1.frear();

// Criação da segunda instância do objeto Carro
const carro2 = new Carro("Alfa Romeo", "Mito", 2015);

// Chamada do método 'acelerar' da instância carro2
carro2.acelerar();

// Chamada do método 'frear' da instância carro2
carro2.frear();
```

Neste exemplo são criadas duas instâncias de dois objetos Carro: carro1 e carro 2. Os dois objetos usam a mesma classe Carro mas são objetos diferentes pois ocupam espaços de memória diferentes para armazenar dados diferentes.

> :memo: a palavra-chave `new` é usada em várias linguagens de programação orientadas a objetos, como JavaScript, para criar uma nova instância (objeto) de uma classe. Ela indica ao interpretador ou compilador que você deseja alocar memória para um novo objeto com base na definição da classe e, opcionalmente, passar argumentos para o construtor da classe para inicializar os atributos.

## Como criar classes em Javascript?

Além de usar `class`e `new` (a maneira mais clássica) existem outras manerias de criar classes e objetos em Javascript, muitas. Essa linguagem é bastante dinâmica e flexível e se adapta a vários paradigmas e estilos de programação. També cabe ressaltar que é em constante e rápida evolução. A cada nova versão os recursos e as novidades aumentam.
As outras maneiras encontradas até agora são:
- **Função construtora**
- **Factory Functions**
- **Object.create**

( o resultado será o mesmo para todos)

Sem delongas vamos olhar um exemplo de código para a classe Pessoa 👇

```javascript
// Forma 1: Criando a classe usando uma função construtora
// essa função construtora recebe dos parametros
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

//com a técnica prototype incluimos mais detalhes à classe que antes não existiam
Pessoa.prototype.apresentar = function () {
  console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

Pessoa.prototype.envelhecer = function () {
  this.idade++;
};

// Criando objetos usando a função construtora
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 25 anos.
pessoa1.envelhecer();
pessoa1.envelhecer();
pessoa1.apresentar();// A idade mudou

pessoa2.apresentar(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
pessoa2.envelhecer();
pessoa2.apresentar();//A idade mudou


/*Factory Functions (Funções Fábrica):
Você pode criar objetos usando funções que retornam objetos.
Isso permite maior controle sobre a criação de objetos e pode ser útil para criar objetos com configurações personalizadas.*/
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },
    envelhecer() {
      this.idade++;
    },
  };
}

const pessoa3 = criarPessoa("Laura", 28);
pessoa3.apresentar(); // Saída: Olá, meu nome é Laura e tenho 28 anos.
pessoa3.envelhecer();
pessoa3.apresentar();//A idade mudou

/* A função Object.create permite criar um novo objeto com um protótipo especificado.
Isso é útil quando você deseja criar objetos sem usar uma classe ou uma função construtora.*/
const pessoaProto = {
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

const pessoa4 = Object.create(pessoaProto);
pessoa4.nome = "Eduardo";
pessoa4.idade = 35;
pessoa4.apresentar(); // Saída: Olá, meu nome é Eduardo e tenho 35 anos.
```

## Exercícios para fixação

### Exercício 1 - Criando Objetos em JavaScript com a Entidade "Produto"

Suponha que você está desenvolvendo um sistema de gerenciamento de produtos em um e-commerce. Cada produto tem um nome e um preço. **Crie três objetos de produto de diferentes maneiras**: usando uma classe, usando uma factory function e usando Object.create.

1. Utilizando uma **Classe** (usando a sintaxe de classe do ES6):
   - Crie uma classe chamada `Produto` com os atributos `nome` e `preco`.
   - Adicione um método chamado `exibirDetalhes()` que exibe no console o nome e o preço do produto.
   - Crie um objeto chamado `produto1` a partir dessa classe com o nome "Celular" e preço 999.

2. Utilizando uma **Factory Function**:
   - Crie uma função chamada `criarProduto` que aceita os parâmetros `nome` e `preco` e retorna um objeto com essas propriedades e o método `exibirDetalhes()`.
   - Crie um objeto chamado `produto2` usando a função `criarProduto` com o nome "Notebook" e preço 1499.

3. Utilizando **Object.create**:
   - Crie um objeto chamado `produtoProto` com um método `exibirDetalhes()` que exibe no console o nome e o preço do produto.
   - Crie um objeto chamado `produto3` usando `Object.create` com o nome "Fone de Ouvido" e preço 99. Defina `produtoProto` como seu protótipo.

Depois de criar esses objetos, chame o método `exibirDetalhes()` em cada um deles para verificar se estão funcionando corretamente. Certifique-se de que cada objeto tenha seu próprio nome e preço definidos.

Este exercício permite praticar a criação de objetos em JavaScript usando diferentes abordagens com a entidade "Produto".

### Exercício 2 - Criando Objetos em JavaScript com a Entidade "Cidade"

Suponha que você está desenvolvendo um sistema de informações sobre cidades. Cada cidade tem um nome e uma população. **Crie três objetos de cidade de diferentes maneiras:** usando uma classe, usando uma factory function e usando Object.create.

1. Utilizando uma **Classe** (usando a sintaxe de classe do ES6):
   - Crie uma classe chamada `Cidade` com os atributos `nome` e `populacao`.
   - Adicione um método chamado `exibirDetalhes()` que exibe no console o nome e a população da cidade.
   - Crie um objeto chamado `cidade1` a partir dessa classe com o nome "Nova York" e uma população de 8.4 milhões.

2. Utilizando uma **Factory Function**:
   - Crie uma função chamada `criarCidade` que aceita os parâmetros `nome` e `populacao` e retorna um objeto com essas propriedades e o método `exibirDetalhes()`.
   - Crie um objeto chamado `cidade2` usando a função `criarCidade` com o nome "Paris" e uma população de 2.2 milhões.

3. Utilizando **Object.create**:
   - Crie um objeto chamado `cidadeProto` com um método `exibirDetalhes()` que exibe no console o nome e a população da cidade.
   - Crie um objeto chamado `cidade3` usando `Object.create` com o nome "Tóquio" e uma população de 13.9 milhões. Defina `cidadeProto` como seu protótipo.

Depois de criar esses objetos, chame o método `exibirDetalhes()` em cada um deles para verificar se estão funcionando corretamente. Certifique-se de que cada objeto tenha seu próprio nome e população definidos.


👍👍


