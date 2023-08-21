# Classes e objetos
## Representação dos dados
O mundo pode ser compreendido por nos humanos atraves de pensamentos e julgamentos sobre caraterísticas das coisas ao nosso redor.
Cores,sabores,cheiros,imagens, sensações do tato são fenomenos que nos colocam em relação com o mundo.
Um ser humano entende um objeto da realidade por meio de suas carateristicas e de relações. 
O milagre do cerebro humano está em entender os objetos na sua complexidade, nas suas caraterístas mais profundas.
Isto são os humnaos.
E como um computador pode entender os objetos que nos circundam?
Simplesmente não entendem...mas podemos fornecer uma **representação computacional** das caraterística dos objetos reais.

## Paradigma de Programação Orientada a Objetos (POO)
Na computação, até o advento das da linguagem c++ (anos 80-90), os dados eram representados de maneira não estruturada, por meio de variáveis.

> :memo: **Lembra:** Uma variável é um espaço na memória do computador que armazena um valor e possui um nome.
> Na programação, as variáveis são usadas para armazenar valores que podem ser usados posteriormente no programa.

Por exemplo: de que maneira o **conceito de pessoa** pode ser representada por variáveis isoladas? O conceito de uma pessoa é complexo e essa entidade possui caraterísticas relacionadas entre si e a própria entedade se relaciona com outras entidades.
A realidade é bem complexa! 😱

## Classe e objetos
Enfim chegamos ao ponto da questão.
Podemos entender classes como o projeto, o modelo da representação computacional dos dados de uma entidade real e um objeto como seua realização ou implementação na memória do computador.

Do ponto de vista acadêmico, segundo Pressman (2011)
> :memo: Classe é um conceito orientado a objeto que encapsula dados e abstrações procedurais
> necessárias para descrever o conteúdo e comportamento de alguma entidade do mundo real.

Vamos tentar entender de um ponto de vista prático.

Vamos usar a linguagem Javascript, bastante popular e que implementa os paradigmas POO. E vamos usar o exemplos do código acima. 
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
  
Como implementar uma classe em javascript?
Vamos ver aqui 👇
```javascript
class Carro{
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
      }
      acelerar() {
        console.log(`${this.marca} ${this.modelo} Acelerando...`);
      }
      frear() {
        console.log(`${this.marca} ${this.modelo} Freando...`);
      }
}
```
