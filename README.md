# Sistema de Carrinho de Compras - Backend

Este é um sistema simples de carrinho de compras desenvolvido em **Node.js** utilizando **JavaScript** com funções assíncronas. Ele simula o backend de um e-commerce, permitindo adicionar itens, remover itens, exibir o carrinho e calcular o valor total. O código é modularizado em arquivos de serviços e pode ser facilmente integrado a um projeto maior.

## Funcionalidades

- **Adicionar itens ao carrinho**: Inclui itens com nome, preço e quantidade.
- **Remover itens**: Remove itens pelo índice ou pelo nome.
- **Exibir carrinho**: Mostra os itens no carrinho com detalhes como nome, preço unitário, quantidade e valor total por item.
- **Calcular total**: Calcula o valor total do carrinho com base nos itens adicionados.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **`services/cart.js`**: Contém as funções de manipulação do carrinho (adicionar, remover, exibir e calcular total).
2. **`services/item.js`**: Define a estrutura de um item do carrinho e sua função de cálculo de subtotal.
3. **`index.js`**: Arquivo principal que importa os serviços e demonstra o uso do sistema.

### Arquivos

#### `services/cart.js`
Contém as seguintes funções assíncronas:
- `addItem(userCart, item)`: Adiciona um item ao carrinho.
- `calculoTotal(userCart)`: Calcula e exibe o valor total do carrinho.
- `deleteItem(userCart, name)`: Remove um item pelo nome.
- `displayItem(userCart)`: Exibe os itens do carrinho no console.
- `removeItem(userCart, index)`: Remove um item pelo índice (baseado em 1).

#### `services/item.js`
Define a função `addItem` que cria um objeto de item com:
- `name`: Nome do item.
- `price`: Preço unitário.
- `amount`: Quantidade.
- `sumAmount()`: Método que calcula o valor total do item (preço × quantidade).

#### `index.js`
Exemplo de uso do sistema:
- Cria itens usando `createItem` (nome, preço, quantidade).
- Adiciona itens ao carrinho.
- Remove itens (opcional).
- Exibe o carrinho e calcula o total.

## Pré-requisitos

- **Node.js**: Versão 14 ou superior (suporte a módulos ES6).
- Conhecimento básico de JavaScript assíncrono (`async/await`).
