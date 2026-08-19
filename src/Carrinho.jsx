import React, { useState } from 'react';

export default function Carrinho(props) {
  const [finalizado, setFinalizado] = useState(false);

  const total = props.itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  function finalizar() {
    console.log('Pedido enviado:', props.itens);
    setFinalizado(true);
    setTimeout(() => {
      setFinalizado(false);
      props.aoLimpar();
      props.aoFechar();
    }, 2200);
  }

  return (
    <>
      <div
        className={props.aberto ? 'fundoEscuro fundoVisivel' : 'fundoEscuro'}
        onClick={props.aoFechar}
      />

      <aside className={props.aberto ? 'gaveta gavetaAberta' : 'gaveta'}>
        <header className="gavetaTopo">
          <h2>Seu carrinho</h2>
          <button className="botaoFechar" aria-label="Fechar carrinho" onClick={props.aoFechar}>
            ✕
          </button>
        </header>

        {props.itens.length === 0 && (
          <div className="carrinhoVazio">
            <span className="carrinhoVazioIcone">🛍️</span>
            <p>Seu carrinho ainda está vazio.</p>
            <a className="botaoSecundario" href="#/atividade-2" onClick={props.aoFechar}>
              Ver o catálogo
            </a>
          </div>
        )}

        {props.itens.length > 0 && (
          <>
            <ul className="listaCarrinho">
              {props.itens.map((item) => (
                <li key={item.id}>
                  <span className="itemFoto">{item.emoji}</span>

                  <div className="itemInfo">
                    <strong>{item.nome}</strong>
                    <span>R$ {item.preco}</span>
                  </div>

                  <div className="itemQuantidade">
                    <button onClick={() => props.aoMudarQuantidade(item.id, -1)}>−</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => props.aoMudarQuantidade(item.id, 1)}>+</button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="gavetaRodape">
              <div className="linhaResumo">
                <span>Subtotal</span>
                <span>R$ {total}</span>
              </div>
              <div className="linhaResumo">
                <span>Frete</span>
                <span className="gratis">Grátis</span>
              </div>
              <div className="linhaTotal">
                <span>Total</span>
                <strong>R$ {total}</strong>
              </div>

              <button className="botaoComprar botaoLargo" onClick={finalizar}>
                {finalizado ? 'Pedido confirmado ✓' : 'Finalizar compra'}
              </button>

              <button className="botaoTexto" onClick={props.aoLimpar}>
                Esvaziar carrinho
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
