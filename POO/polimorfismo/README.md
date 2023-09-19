# Polimorfismo

O que tem em comum um gato, um cachorro e um elefante? ....
...são animais, correto? Alguma dúvida? 🤔
Animais tem caraterísticas em comum, independente da espécie...porém, ao mesmo tempo, cada espécie tem caraterísticas diferentes.

Do ponto de vista da POO, poderíamos representar este conceito com **Herança**, porém a questão é mais sutil.

Considerando gato, cachorro e elefante como mamíferos que tem características comuns, algumas... o que tem em comum entre um peixe e um elefante?
Obviamente compartilham características dos seres vivos, a nível microscópico, analisando bem são muito diferentes. O meio que eles vivem, a maneira de respirar, reproduzir, etc... então, um peixe e um elefante são animais sim, mas bem diferentes.

Aqui entra o jogo o polimorfismo. Podemos criar classes para cada espécie que herdam de uma classe animal alguns métodos que representam o comportamento genérico do animal, e cada classe filha implementar estes métodos que produzam resultado diferente.

Vamos ver na prática como funciona o polimorfismo considerando a representação das entidades, Animal, Gato, Cachorro e Peixe.

Vamos considerar a hierarquia da herança
 - Animal (pai)
    - Cachorro (filhos)
    - Gato
    - Peixe 

O código será o mesmo do arquivo `Animal.js` :point_down:

```javascript
class Animal {
    

    comer(){
        console.log("comendo.");  
    }

    fazerSom() {
      console.log("Este é um som genérico de animal.");
    }
  }
  
  class Cachorro extends Animal {
    fazerSom() {
      console.log("O cachorro faz 'Au au!'");
    }
  }
  
  class Gato extends Animal {
    fazerSom() {
      console.log("O gato faz 'Miau!'");
    }
  }
  
  class Peixe extends Animal {
    fazerSom() {
      console.log("O pássaro faz 'Blub Blub!'");
    }
  }

const animal = new Animal();
const meuCachorro = new Cachorro();
const meuGato = new Gato();
const meuPeixe = new Peixe();

animal.fazerSom(); // Saída: Este é um som genérico de animal.
animal.comer();
meuCachorro.fazerSom();    // Saída: O cachorro faz 'Au au!'
meuCachorro.comer(); 
meuGato.fazerSom();        // Saída: O gato faz 'Miau!'
meuGato.comer();
meuPeixe.fazerSom();     // Saída: O peixe faz 'Blub Blub!'
meuPeixe.comer();

```

Animal é uma **classe genérica**, pai que tem dois métodos. Cachorro, Gato e Peixe, que são classes filhas de Animal também tem os métodos com a **mesma assinatura**, porém, enquanto `comer()` tem a mesma implementação para todos os filhos, `fazerSom()` tem uma implementação diferente, rendendo cada objeto bem **diferente do outro**, mas tendo a **mesma essência**.

Vamos tentar mais um exemplo. Esta vez imagine que estamos desenvolvendo um sistema de rastreamento de veículos para uma empresa de logística. 
Nesse sistema, precisamos calcular o custo de envio de diferentes tipos de veículos, como "Caminhão", "Carro" e "Moto". 
Cada veículo tem *um método para calcular o custo de envio*, mas a fórmula de cálculo é *diferente para cada tipo de veículo*.

Vamos ver o código 👇
```javascript
class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }

  calcularCustoEnvio(distancia) {
    console.log(`Custo de envio para ${this.modelo}: ${distancia * this.calcularTaxa()}`);
  }

  calcularTaxa() {
    return 0; // Taxa genérica, será sobrescrita nas classes filhas
  }
}

class Caminhao extends Veiculo {
  calcularTaxa() {
    return 2.5; // Taxa por quilômetro para caminhões
  }
}

class Carro extends Veiculo {
  calcularTaxa() {
    return 1.5; // Taxa por quilômetro para carros
  }
}

class Moto extends Veiculo {
  calcularTaxa() {
    return 1.0; // Taxa por quilômetro para motos
  }
}
```
Neste caso o método `calcularTaxa()` terá um valor diferente, mas a **assinatura é a mesma para cada classe** que herda esse metodo da classe Veiculo.

## Classes abstratas e polimorfismo

### Classes abstratas

Imagine que estamos criando um jogo onde existem diferentes tipos de personagens, como heróis e vilões. Uma classe abstrata seria como um "modelo" para esses personagens, mas não podemos criar um personagem diretamente a partir desse modelo. Em vez disso, usamos esse modelo para criar heróis e vilões reais, que têm suas próprias características e habilidades únicas. 🧙‍♂️

Sendo um pouco mais formal e detalhado as classes abstratas servem como modelos para outras classes derivadas. Elas não podem ser instanciadas diretamente, mas **fornecem uma estrutura comum e definem métodos que as classes derivadas devem implementar**. Essas classes abstratas são frequentemente usadas para **compartilhar comportamentos** comuns entre várias classes relacionadas, ao mesmo tempo em que garantem que cada **classe derivada forneça sua própria implementação** para métodos específicos.

### Relação com o polimorfismo

Agora imagine que temos um botão em um videogame que faz com que o personagem faça alguma ação, como pular. O botão sempre faz o personagem pular, mas o que acontece quando pressionamos o botão pode ser diferente para cada personagem. O herói pode dar um pulo alto, e o vilão pode fazer um pulo maluco para escapar. Mesmo que o botão seja o mesmo, o que acontece quando pressionamos é diferente para cada personagem. Isso é o polimorfismo - a mesma ação (pular) acontece de maneira diferente dependendo do personagem.

Classes abstratas são como modelos que ajudam a criar personagens diferentes, e o polimorfismo é quando todos esses personagens respondem à mesma ação de maneira única, de acordo com suas próprias características. É como se todos falassem a mesma língua, mas cada um tem seu jeito especial de falar.

Classes abstratas desempenham um papel importante no polimorfismo, pois definem uma interface comum que as classes derivadas devem seguir. Isso significa que objetos de classes diferentes, mas relacionadas por meio de herança de uma classe abstrata, podem ser tratados de maneira polimórfica, chamando os mesmos métodos de maneira consistente, mas com comportamentos específicos para cada classe.

### Classes abstratas em Javascript

JavaScript não suporta classes abstratas no mesmo sentido que linguagens como Java ou C#. No entanto, você pode **simular o comportamento de uma classe abstrata** usando funções construtoras ou classes e gerar erros intencionais para evitar que a classe seja instanciada diretamente. Aqui está um exemplo de como criar uma classe abstrata em JavaScript:

```javascript
// Defina uma função construtora como se fosse uma classe abstrata
function FormaGeometrica() {
  if (this.constructor === FormaGeometrica) {
    throw new Error("Você não pode instanciar uma classe abstrata diretamente.");
  }
}

// Adicione métodos à "classe abstrata"
FormaGeometrica.prototype.calcularArea = function() {
  throw new Error("Método calcularArea() deve ser implementado nas classes derivadas.");
};

FormaGeometrica.prototype.calcularPerimetro = function() {
  throw new Error("Método calcularPerimetro() deve ser implementado nas classes derivadas.");
};

// Agora, crie classes derivadas
function Circulo(raio) {
  FormaGeometrica.call(this); // Chame o construtor da classe abstrata
  this.raio = raio;
}

Circulo.prototype = Object.create(FormaGeometrica.prototype);
Circulo.prototype.constructor = Circulo;

Circulo.prototype.calcularArea = function() {
  return Math.PI * this.raio ** 2;
};

Circulo.prototype.calcularPerimetro = function() {
  return 2 * Math.PI * this.raio;
};

// Faça o mesmo para outras classes derivadas, como Retangulo

// Exemplo de uso
const circulo = new Circulo(5);
console.log(`Área do círculo: ${circulo.calcularArea()}`);
```

Neste exemplo, `FormaGeometrica` é tratada como uma "classe abstrata". Quando tentamos instanciar diretamente `FormaGeometrica`, lançamos um erro. Em seguida, criamos uma classe derivada `Circulo` e fornecemos implementações para os métodos `calcularArea()` e `calcularPerimetro()`. Certifique-se de fazer o mesmo para outras classes derivadas, como `Retangulo`, seguindo o

## Exercícios de fixação

**Controle remoto**

Você está desenvolvendo um sistema de controle remoto para dispositivos eletrônicos e deseja aplicar o conceito de polimorfismo para controlar diferentes tipos de dispositivos de forma eficaz.
Use encapsulamento com membros privados get e set.

Passo 1: Definir uma Classe Base DispositivoEletronico

Crie uma classe base chamada DispositivoEletronico com os seguintes métodos:

constructor(nome): Um construtor que define o nome do dispositivo.
ligar(): Um método que exibe uma mensagem genérica indicando que o dispositivo está ligado.
desligar(): Um método que exibe uma mensagem genérica indicando que o dispositivo está desligado.
Passo 2: Criar Classes Derivadas

Crie pelo menos três classes derivadas de DispositivoEletronico para representar diferentes tipos de dispositivos, como Televisor, FornoMicroondas e Luminaria. Cada classe derivada deve:

Herdar da classe base DispositivoEletronico.
Implementar os métodos ligar() e desligar(), mas de maneira específica para cada tipo de dispositivo. Por exemplo, a Luminaria pode acender e apagar, o Televisor pode mostrar uma mensagem de boas-vindas e desligar a tela, e o FornoMicroondas pode emitir um sinal sonoro e desligar o aquecimento.
Passo 3: Usar Polimorfismo

Crie instâncias de cada tipo de dispositivo e coloque-os em um array. Em seguida, percorra o array e chame os métodos ligar() e desligar() para cada dispositivo. Observe como, mesmo usando os mesmos métodos, cada tipo de dispositivo se comporta de maneira diferente.

Dicas:

Lembre-se de que as classes derivadas devem herdar da classe base usando extends.
Cada classe derivada deve implementar os métodos ligar() e desligar() de acordo com as características do dispositivo.
Crie objetos de cada classe derivada, adicione-os a um array e itere pelo array chamando ligar() e desligar() para cada objeto.
O polimorfismo permite que você chame os mesmos métodos (ligar() e desligar()) em objetos de diferentes classes e obtenha comportamentos diferentes, dependendo do tipo de objeto.
