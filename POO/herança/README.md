# Herança

O conceito de herança é fundamental na programação orientada a objetos (POO) e representa a capacidade de criar uma nova classe (chamada de **classe derivada ou subclasse**) com base em uma classe existente (chamada de **classe base ou superclasse**). 

> A herança permite que a classe derivada herde atributos e métodos da classe base, estendendo ou modificando seu comportamento conforme necessário.

## Vantagens da Herança:

:heavy_check_mark: **Reutilização de Código:** Uma das principais vantagens da herança é a reutilização de código. Você pode criar uma classe base com atributos e métodos genéricos que são comuns a várias classes derivadas. Isso evita a duplicação de código e facilita a manutenção.

:heavy_check_mark:**Polimorfismo:** O polimorfismo é outra vantagem da herança. Ele permite que objetos das classes derivadas sejam tratados como objetos da classe base, o que simplifica o código e torna mais fácil trabalhar com várias classes relacionadas de maneira uniforme.

:heavy_check_mark: **Extensibilidade:** Você pode estender uma classe base para criar novas classes derivadas com funcionalidades adicionais sem afetar a classe base. Isso torna o código mais flexível e adaptável a mudanças.

:heavy_check_mark: **Organização do Código:** A herança ajuda a organizar o código de maneira hierárquica, facilitando a compreensão da estrutura do programa.

:relieved:

## Quando Usar Herança:

A herança é apropriada quando há uma relação **"é um"** entre a classe derivada e a classe base. Em outras palavras, a classe derivada deve ser uma versão mais especializada ou específica da classe base. Alguns cenários comuns para usar herança incluem:

:arrow_right: **Modelagem de Objetos do Mundo Real:** Quando você está modelando objetos do mundo real em seu código, a herança pode ser usada para **representar hierarquias naturais**, como veículos (carros, motos, caminhões) ou animais (mamíferos, aves, répteis).

:arrow_right: **Reutilização de Comportamento:** Se você tem várias classes que **compartilham comportamento semelhante**, você pode criar uma classe base que contenha esse comportamento comum e, em seguida, criar classes derivadas que estendam ou personalizem esse comportamento conforme necessário.

:arrow_right: **Implementação de Interfaces e Contratos:** Em linguagens que suportam interfaces ou classes abstratas, a herança pode ser usada para implementar esses **contratos**, onde várias classes precisam aderir a um conjunto comum de métodos ou propriedades.

:arrow_right: **Polimorfismo:** Quando você deseja usar o polimorfismo para tratar objetos de diferentes classes de maneira uniforme, a herança pode ser usada para criar uma hierarquia de classes com métodos comuns.

É importante lembrar que, embora a herança tenha suas vantagens, ela também pode levar a um **acoplamento excessivo**  e a hierarquias complexas de classes :fearful:. Portanto, é essencial usá-la com cuidado e considerar outros princípios de design, como composição, quando necessário, para evitar problemas de manutenção e legibilidade de código.

## Como funciona a herança em Javascript?

A partir do ECMAScript 6 (ES6), a linguagem introduziu a sintaxe de classes, que fornece uma maneira mais "tradicional" de implementar herança e criação de objetos. Você pode usar `class` para definir classes e a palavra-chave `extends` para herança.

### Extends
Vamos ver um exemplo usando este recurso :point_down:

```javascript
// Classe base Personagem
class Personagem {
    #nome;     // Propriedades privadas
    #classe;
    #saude;
  
    constructor(nome, classe) {
      this.#nome = nome;
      this.#classe = classe;
      this.#saude = 100;
    }
  
    atacar(alvo) {
      console.log(`${this.#nome} ataca ${alvo.getNome()}!`);
    }
  
    receberDano(dano) {
      this.#saude -= dano;
      console.log(`${this.#nome} recebeu ${dano} de dano. Saúde restante: ${this.#saude}`);
    }
  
    getNome() {
      return this.#nome;
    }
  }
  
  // Classe Herói que herda de Personagem
  class Heroi extends Personagem {
    #arma;
  
    constructor(nome, classe, arma) {
      super(nome, classe);
      this.#arma = arma;
    }
  
    usarHabilidadeEspecial() {
      console.log(`${this.getNome()} usa uma habilidade especial!`);
    }
  }
  
  // Classe Inimigo que herda de Personagem
  class Inimigo extends Personagem {
    #tipo;
  
    constructor(nome, classe, tipo) {
      super(nome, classe);
      this.#tipo = tipo;
    }
  
    atacar(alvo) {
      console.log(`${this.getNome()} ataca ${alvo.getNome()} com ferocidade!`);
    }
  }
  
  // Uso das classes
  const heroi = new Heroi("Herói", "Guerreiro", "Espada");
  const inimigo = new Inimigo("Inimigo", "Orc", "Monstro");
  
  heroi.atacar(inimigo);
  inimigo.receberDano(20);
  inimigo.atacar(heroi);
  heroi.receberDano(15);
  heroi.usarHabilidadeEspecial();
```

> :memo: Lembre dos membros privados que começam com # e servem para implementar o encapsulamento

Tudo muito lindo :smiley:, mas existem outras maneiras de implementar herança? 
Claro que sim!
As ultimas versões do Javscript implementam a técnica de prototipagem (**prototype**)
Vamos ver melhor o que é prototype

### Prototype

Desde o ES12 em JavaScript, a herança é baseada em prototipagem, em vez de uma abordagem de classe tradicional, como em algumas outras linguagens de programação. O protótipo é um objeto a partir do qual outros objetos herdam propriedades e métodos.

Vamos explorar como a herança funciona em JavaScript:

:heavy_check_mark: **Cadeia de Protótipos (Prototype Chain):** Cada objeto em JavaScript tem uma referência interna para um objeto chamado de "protótipo". Quando você tenta acessar uma propriedade ou método em um objeto, o JavaScript primeiro verifica se essa propriedade existe no próprio objeto. Se não encontrar, ele procura no protótipo do objeto e, em seguida, no protótipo do protótipo, criando uma cadeia de protótipos.

:heavy_check_mark: **Objetos e Funções Construtoras:** Para criar uma hierarquia de objetos que usam herança em JavaScript, você pode usar funções construtoras e o operador `new`. Você define propriedades e métodos no objeto `prototype` da função construtora e, em seguida, cria novos objetos usando essa função construtora.


Quando uma classe é definida, com prototype é possível criar dinamicamente e *on the fly* um atributo ou metodo que antes não existia
Vamos ver o exemplo abaixo:

```javascript
class Personagem {
    #nome;
    #saude;
  
    constructor(nome, saúde) {
      this.#nome = nome; // Propriedades privadas
      this.#saude = saúde;
    }
  
    atacar(alvo) {
      console.log(`${this.#nome} ataca ${alvo.getNome()}!`);
    }
  
    getNome() {
      return this.#nome;
    }
  
    getSaúde() {
      return this.#saude;
    }
  
    setSaude(novaSaúde) {
      if (novaSaúde >= 0) {
        this.#saude = novaSaúde;
      } else {
        console.log("A saúde não pode ser um valor negativo.");
      }
    }
  }
  
  // Função construtora Herói que herda de Personagem
  class Heroi extends Personagem {
    #arma;
  
    constructor(nome, saúde, arma) {
      super(nome, saúde); // Chamando o construtor de Personagem
      this.#arma = arma;
    }
  
    usarHabilidadeEspecial() {
      console.log(`${this.getNome()} usa uma habilidade especial!`);
    }
  
    getArma() {
      return this.#arma;
    }
  }
  
  // Estabelecendo a herança
  Heroi.prototype = Object.create(Personagem.prototype);
  // prototype cria algo que antes não existia na classe
  Heroi.prototype.constructor = Heroi;
  
  // Criando instâncias
  const heroi = new Heroi("Herói", 100, "Espada");
  
  heroi.atacar({ getNome: () => "Inimigo" });
  heroi.usarHabilidadeEspecial();
  
  console.log(`Saúde do Herói: ${heroi.getSaúde()}`);
  console.log(`Arma do Herói: ${heroi.getArma()}`);
  heroi.setSaude(80);
  console.log(`Nova saúde do Herói: ${heroi.getSaúde()}`);
```

Este é um exemplo simplificado de herança em JavaScript. O código cria uma função construtora `Personagem`, define um método no protótipo `Personagem.prototype`, cria uma função construtora `Heroi` que herda de `Personagem`, estabelece a herança com `Object.create`, e adiciona um método específico a `Herói.prototype`.

## Exercício de fixação
**Instrumentos Musicais**

Você está desenvolvendo um sistema para uma loja de instrumentos musicais online. Crie uma **hierarquia de classes** que represente diferentes tipos de instrumentos musicais.

Comece criando uma **classe base** InstrumentoMusical. Esta classe deve ter as seguintes propriedades:

nome (string): O nome do instrumento musical.
categoria (string): A categoria do instrumento (por exemplo, "cordas", "sopro", "percussão").
preco (número): O preço do instrumento.
Crie pelo menos duas **classes derivadas** que representem tipos diferentes de instrumentos musicais. Por exemplo, você pode criar uma classe Guitarra e uma classe Flauta. Cada uma dessas classes derivadas deve ter propriedades e métodos específicos que as tornem únicas em relação à classe base InstrumentoMusical.

Demonstre a herança em ação, criando instâncias das classes derivadas e acessando propriedades e métodos específicos de cada tipo de instrumento musical. Por exemplo, você pode criar uma instância de Guitarra e chamar um método que simule a reprodução de uma melodia.
Também não esqueça de usar sempre encapsulamento, membros privados iniciando com `#` e sucessivamente `get` e `set`.

**Criaturas Mágicas**

Você está desenvolvendo um jogo de aventura mágica e precisa criar classes para representar criaturas mágicas no mundo do jogo. Crie uma **hierarquia de classes** que inclui uma **classe base** CriaturaMagica e várias classes derivadas para tipos específicos de criaturas mágicas.

Comece criando a classe base CriaturaMagica. Esta classe deve ter as seguintes propriedades:

nome (string): O nome da criatura mágica.
poder (número): O nível de poder da criatura mágica.
Crie pelo menos duas classes derivadas que representem tipos diferentes de criaturas mágicas. Por exemplo, você pode criar uma classe Dragao e uma classe Fada. Cada uma dessas classes derivadas deve ter propriedades e métodos específicos que as tornem únicas em relação à classe base CriaturaMagica.

Demonstre a herança em ação, criando instâncias das classes derivadas e acessando propriedades e métodos específicos de cada tipo de criatura mágica.
Também não esqueça de usar sempre encapsulamento, membros privados iniciando com `#` e sucessivamente `get` e `set`.

