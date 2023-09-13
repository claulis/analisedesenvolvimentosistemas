# Encapsulamento e Programação Orientada a Objetos
Encapsulamento é um dos quatro princípios fundamentais da programação orientada a objetos (POO), juntamente com abstração, herança e polimorfismo. Ele se refere à ideia de esconder os detalhes internos de uma classe ou objeto e expor uma interface pública consistente para interagir com esse objeto. Aqui estão os principais conceitos e vantagens do encapsulamento em POO:

## Principais conceitos do encapsulamento:

- **Acesso controlado**: O encapsulamento permite que você controle o acesso aos atributos e métodos de uma classe, determinando quais partes do código podem interagir com eles e como podem fazê-lo.

- **Membros privados e públicos**: Através do encapsulamento, você pode definir membros como privados, o que significa que eles só podem ser acessados internamente pela classe, e membros públicos, que são acessíveis externamente.

- **Métodos de acesso (getters e setters)**: Para atributos privados, é comum fornecer métodos públicos chamados `getters` e `setters` para acessar e modificar esses atributos de forma controlada. Isso permite que a classe defina regras ou validações antes de permitir a modificação dos dados internos.

## Vantagens do encapsulamento:

- **Controle**: O encapsulamento oferece controle sobre o acesso aos membros de uma classe. Isso impede que partes do código interfiram diretamente nos dados internos da classe, reduzindo o risco de erros e garantindo uma maior segurança.

- **Segurança e validação**: Ao usar métodos de acesso como `getters` e `setters`, você pode aplicar validações e regras de negócio antes de permitir a modificação de dados. Isso ajuda a manter a integridade dos dados e evita valores inválidos.

- **Reutilização de código*: Encapsulamento facilita a criação de componentes reutilizáveis, pois os detalhes de implementação ficam encapsulados na classe, permitindo que outras partes do código as utilizem sem conhecer esses detalhes.

## Quando usar o encapsulamento

- **Ocultação de Detalhes Internos**: O encapsulamento permite que você oculte os detalhes internos da implementação de uma classe. Isso significa que os usuários da classe *não precisam conhecer ou se preocupar com a lógica interna da classe*, apenas a interface pública é importante.

- **Controle de Acesso**: O encapsulamento ajuda a controlar quem pode acessar e modificar os atributos e métodos de uma classe. Isso evita a manipulação não autorizada de dados e garante que as *operações sejam realizadas de maneira segura e consistente*.

- **Validação e Regras de Negócio**: Usando métodos de acesso (como getters e setters), você pode aplicar validações e regras de negócio antes de permitir a modificação de atributos. Isso garante a *integridade dos dados* e ajuda a evitar valores inválidos.

- **Reutilização de Código**: Classes bem encapsuladas são *mais fáceis de reutilizar em diferentes partes do seu código* ou em projetos futuros. Você pode usá-las como componentes independentes sem se preocupar com os detalhes internos.

- **Abstração**: O encapsulamento permite que você crie abstrações mais eficazes, onde os usuários da classe só precisam se preocupar com o que a classe faz, não com como ela faz. Isso facilita o desenvolvimento de *código mais limpo e legível*.

- **Segurança**: Evita que partes não autorizadas do código modifiquem ou acessem dados sensíveis, *melhorando a segurança do sistema*.

# Encapsulamento e Javascript

A linguagem Javscript, diferentemente de outras linguagens, não tinha suporte nativo a membros public e privados, logo o encapsulamento era  um "faz de conta". Evidentemente os engenheiros criadores do interpretador Javascript não reputavam essenciais recursos nativos a suporte do encapsulamento.
Porém, com a introdução de **campos privados**, em versões mais recentes do JavaScript (ECMAScript 2019 e posteriores), agora pode-se criar atributos privados de uma forma mais robusta e com melhor suporte nativo.

> **Campos privados** são introduzidos usando a sintaxe `#nomeDoCampo`. Esses campos são verdadeiramente privados e não podem ser acessados de fora da classe em que são definidos. Isso fornece uma maneira eficaz de encapsular atributos sem depender de convenções de nomenclatura.

Vamos ver o exemplo de código

```javascript 
class Carro {
  // Membro privado
  #ligado= false;
  constructor(marca, modelo, ano) {
      this.marca = marca; // Membro público
      this.modelo = modelo; // Membro público
      this.ano = ano; // Membro público      
  }

  acelerar() {
      if (this.#ligado) {
          console.log(`${this.marca} ${this.modelo} Acelerando...`);
      } else {
          console.log(`${this.marca} ${this.modelo} está desligado. Não é possível acelerar.`);
      }
  }

  frear() {
      if (this.#ligado) {
          console.log(`${this.marca} ${this.modelo} Freando...`);
      } else {
          console.log(`${this.marca} ${this.modelo} está desligado. Não é possível frear.`);
      }
  }

  ligar() {
      this.#ligado = true;
      console.log(`${this.marca} ${this.modelo} foi ligado.`);
  }

  desligar() {
      this.#ligado = false;
      console.log(`${this.marca} ${this.modelo} foi desligado.`);
  }
}


// Criar uma instância de Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2023);

// Tentar acessar diretamente a propriedade privada #ligado (deve resultar em um erro)
//console.log(meuCarro.#ligado); // Isso resultará em um erro, pois #ligado é privado

// Ligar o carro
meuCarro.ligar();

// Acelerar o carro (deve funcionar)
meuCarro.acelerar(); // Saída: Toyota Corolla Acelerando...

// Tentar acessar diretamente a propriedade privada #ligado novamente (deve resultar em um erro)
//console.log(meuCarro.#ligado); // Isso resultará em um erro, pois #ligado é privado
```
