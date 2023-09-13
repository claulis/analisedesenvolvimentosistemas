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
## Getters e Setters em Javascript

Toda e qualquer linguagem de programação moderna providencia um recurso para a aplicação do encapsulamento. Essa técnica é conhecida como **getter e setter**. 
Em Javascript, segundo as últimas diretrizes da especificação ECMAScript 2024 Language encapsulamento é feito atraves de `get` e `set`

Com o exemplo abaixo queremos criar uma classe para o objeto *Pessoa* onde o *nome* seja público e de livre acesso, sem filtros ou validações, e *idade* seja privado para limitar o acesso para poder validar as informações para este atributo

```javascript
class Pessoa {
  // Atributo público
  constructor(nome) {
    this.nome = nome; // Atributo público
    this.#idade = 0; // Atributo privado com campo privado
  }

  // Getter para o atributo privado idade
  get idade() {
    return this.#idade;
  }

  // Setter para o atributo privado idade com validação
  set idade(novaIdade) {
    if (novaIdade >= 0 && novaIdade <= 120) {
      this.#idade = novaIdade;
    } else {
      console.log("Idade inválida");
    }
  }
}

const pessoa1 = new Pessoa("João");

// Acessando o atributo público diretamente
console.log(pessoa1.nome); // Saída: João

// Usando o getter para acessar o atributo privado
console.log(pessoa1.idade); // Saída: 0

// Usando o setter para modificar o atributo privado com validação
pessoa1.idade = 30;
console.log(pessoa1.idade); // Saída: 30

// Tentando definir uma idade inválida
pessoa1.idade = 150; // Saída: "Idade inválida"
console.log(pessoa1.idade); // Saída: 30 (idade não foi modificada devido à validação)

```

# Exercicio de fixação

Crie uma classe **ContaBancaria** que represente uma conta bancária. A classe deve encapsular os detalhes da conta, tornando os atributos privados e fornecendo métodos públicos para acessar e modificar esses atributos. A classe deve ter os seguintes atributos e métodos:

**Atributos (todos privados)**:

- saldo - Representa o saldo atual da conta bancária.
- titular - Representa o nome do titular da conta bancária.

**Métodos públicos**:

- constructor(titular) - Um construtor que inicializa o titular da conta e define o saldo inicial como zero.
- getSaldo() - Um getter que retorna o saldo atual da conta.
- getTitular() - Um getter que retorna o nome do titular da conta.
- depositar(valor) - Um método que permite depositar uma quantia valor na conta, aumentando o saldo.
- sacar(valor) - Um método que permite sacar uma quantia valor da conta, diminuindo o saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
- transferir(destino, valor) - Um método que permite transferir uma quantia valor da conta atual para outra conta destino. Certifique-se de verificar se há saldo suficiente antes de efetuar a transferência.

**Instruções**:

Crie a classe ContaBancaria conforme descrito acima.
Crie uma instância da classe ContaBancaria com um nome de titular de sua escolha e realize várias operações de depósito, saque e transferência para testar a funcionalidade da classe.
Use console.log para exibir mensagens informativas sobre as operações realizadas.
Faça isso em um arquivo único **conta.js** e teste no terminal con **node**

Exemplo de Uso:

```javascript
const minhaConta = new ContaBancaria("João");
console.log(`Saldo Inicial de ${minhaConta.getTitular()}: R$${minhaConta.getSaldo()}`);

minhaConta.depositar(1000);
console.log(`Saldo após depósito: R$${minhaConta.getSaldo()}`);

minhaConta.sacar(500);
console.log(`Saldo após saque: R$${minhaConta.getSaldo()}`);

const outraConta = new ContaBancaria("Maria");
minhaConta.transferir(outraConta, 200);
console.log(`Saldo após transferência: R$${minhaConta.getSaldo()}`);
console.log(`Saldo da conta de ${outraConta.getTitular()}: R$${outraConta.getSaldo()}`);

```





