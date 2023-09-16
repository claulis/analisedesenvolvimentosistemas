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
