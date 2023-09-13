# Encapsulamento e Programação Orientada a Objetos
Encapsulamento é um dos quatro princípios fundamentais da programação orientada a objetos (POO), juntamente com abstração, herança e polimorfismo. Ele se refere à ideia de esconder os detalhes internos de uma classe ou objeto e expor uma interface pública consistente para interagir com esse objeto. Aqui estão os principais conceitos e vantagens do encapsulamento em POO:

## Principais conceitos do encapsulamento:

- Acesso controlado: O encapsulamento permite que você controle o acesso aos atributos e métodos de uma classe, determinando quais partes do código podem interagir com eles e como podem fazê-lo.

- Membros privados e públicos: Através do encapsulamento, você pode definir membros como privados, o que significa que eles só podem ser acessados internamente pela classe, e membros públicos, que são acessíveis externamente.

- Métodos de acesso (getters e setters): Para atributos privados, é comum fornecer métodos públicos chamados "getters" e "setters" para acessar e modificar esses atributos de forma controlada. Isso permite que a classe defina regras ou validações antes de permitir a modificação dos dados internos.

## Vantagens do encapsulamento:

- Controle: O encapsulamento oferece controle sobre o acesso aos membros de uma classe. Isso impede que partes do código interfiram diretamente nos dados internos da classe, reduzindo o risco de erros e garantindo uma maior segurança.

- Abstração: Ao ocultar os detalhes de implementação e expor apenas uma interface pública, o encapsulamento permite que os desenvolvedores utilizem objetos complexos sem precisar entender todos os detalhes internos. Isso facilita a abstração e simplifica o uso de classes.

- Flexibilidade: O encapsulamento permite que você altere a implementação interna de uma classe sem afetar o código que a utiliza. Isso é conhecido como "encapsulamento de mudanças" e é fundamental para a manutenção de código de longo prazo.

- Segurança e validação: Ao usar métodos de acesso como getters e setters, você pode aplicar validações e regras de negócio antes de permitir a modificação de dados. Isso ajuda a manter a integridade dos dados e evita valores inválidos.

- Reutilização de código: Encapsulamento facilita a criação de componentes reutilizáveis, pois os detalhes de implementação ficam encapsulados na classe, permitindo que outras partes do código as utilizem sem conhecer esses detalhes.
