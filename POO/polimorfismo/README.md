# Polimorfismo

O que tem em comum um gato, um cachorro e um elefante? ....
...são animais, correto? Alguma dúvida? 🤔
Animais tem caraterísticas em comum, independente da espécie...porém, ao mesmo tempo, cada espécie tem caraterísticas diferentes.

Do ponto de vista da POO, poderiamos representar este conceito com **Herança**, porém a questão é mais sutil.

Considerando gato, cachorro e elefante como mamíferos que tem carateristicas comuns, algumas... o que tem em comum entre um peixe e um elefante?
Obviamente compartilham carateristicas dos seres vivos, a nível macroscopico, analisando bem são muito diferentes. O meio que eles vivem, a maneira de respirar, reproduzir, etc... então, um peixe e um elefante são anaimais sim, mas bem diferentes.

Aqui entra o jogo o polimorfismo. Podemos criar classes para cada especie que herdam de uma classe animal alguns metodos que representam o comportamento generico do animal, e cada classe filha implementar estes metodos que produzam resultado diferente.

Vamos ver na prática como funciona o polimormismo considerando a representação das entidades, Animal, Gato, Cachorro e Peixe.
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

Animal é uma **classe generica**, pai que tem dois metodos. Cachorro, Gato e Peixe, que são classes filhas de Animal também tem os metodos com a **mesma assinatura**, porém, enquanto `comer()` tem a mesma implementação para todos os filhos, `fazerSom()` tem uma implementação diferente, rendendo cada objeto bem **diferente do outro**, mas tendo a **mesma essencia**.
