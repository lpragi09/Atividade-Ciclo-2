# Atividade-Ciclo-2

Projeto React feito na aula de Programação Web do Unilavras. Os cinco exercícios da
atividade viraram uma loja fictícia, a Ragi Store, com navegação própria e carrinho.

Online: https://atividade-ciclo-2.vercel.app

## Rodando o projeto

```bash
npm install
npm run dev
```

Depois é só abrir o endereço que aparece no terminal (normalmente http://localhost:5173).

## Onde está cada exercício

Cada item da navbar leva para a página de um exercício.

| Página | Exercício | Componente |
| --- | --- | --- |
| Perfil | 1 | `src/Exercicio1.jsx` — `Perfil`, com nome e cidade |
| Catálogo | 2 | `src/Exercicio2.jsx` — `Produto`, recebendo tudo por props |
| Avaliações | 3 | `src/Exercicio3.jsx` — `CardUsuario` usando `Avatar` e `InfoUsuario` |
| Downloads | 4 | `src/Exercicio4.jsx` — `BotaoDownload`, com `onClick` no console |
| Lista | 5 | `src/Exercicio5.jsx` — `ListaDeCompras`, montada com `.map()` |

Os cinco componentes são importados no `src/main.jsx` e entregues para a loja.

## Estrutura

```
src/
  main.jsx          importa os componentes dos exercícios
  Loja.jsx          navegação por hash, estado do carrinho e as rotas
  Navbar.jsx        menu com os exercícios e o botão do carrinho
  Carrinho.jsx      gaveta lateral com quantidade, total e finalização
  Rodape.jsx        rodapé
  dados.js          produtos, clientes, categorias e textos da loja
  paginas/          uma página para cada exercício, mais a home
  Exercicio1..5.jsx os componentes pedidos na atividade
```

## Observações

- O botão da página de downloads escreve `Iniciando download...` no console (F12).
- O carrinho guarda quantidade por item e calcula o total; finalizar a compra também
  registra o pedido no console.
- O layout é responsivo: no celular a navbar vira menu e as grades passam para uma coluna.

## Tecnologias

React 19 + Vite, publicado na Vercel.
