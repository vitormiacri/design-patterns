![Observer UML Diagram](/assets/observer-uml.png)
# Observer Pattern
Define uma relação um-para-muitos entre um conjunto de objetos.
Quando o estado de um objeto é alterado, todos os seus dependentes são notificados.

## Benefícios do Observer
- Fornece um design de objeto de baixa ligação
- A única coisa que o "sujeito" conhece sobre um "observador" é que implementa uma certa interface
- Podemos adicionar novos "observadores" a qualquer momento
- Nunca precisamos modificar o "sujeito" para adicionar novos tipos de observadores
- Podemos reutilizar "sujeitos" ou "observadores" independentemente uns dos outros
- Alterações no "sujeito" ou num "observador" não irão afetar o outro.

## Pontos importantes do capítulo
- O padrão observer define uma relação um para muitos entre objetos
- Os Subjects, ou como são conhecidos, Observables, atualizam os observadores usando uma interface comum
- Os Observers são levemente ligados já que Observable não sabe de nada sobre eles, exceto que eles implementam a interface observadores
- Podemos usar empurrar ou puxar dados de Observable ao utilizar o padrão (puxar é considerado mais "correto")
- Nunca dependa de uma ordem ou notificação específica para seus Observers
- Não tenha medo de criar sua própria implementação de Observable, se necessário

## Exemplos de uso
- Sistema de notificação de novos vídeos
- Gráficos em um dashboard que precisam ser atualizados quando os valores forem alterados