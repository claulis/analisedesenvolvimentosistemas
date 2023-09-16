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
