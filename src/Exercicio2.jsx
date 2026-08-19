import React from 'react';

export default function Produto(props) {
  return (
    <article className="produto">
      <div className="produtoFoto">
        <span className="produtoEmoji">{props.emoji}</span>
        {props.etiqueta && <span className="produtoEtiqueta">{props.etiqueta}</span>}
      </div>

      <div className="produtoCorpo">
        <span className="produtoCategoria">{props.categoria}</span>
        <h2>{props.nome}</h2>
        <p className="produtoDescricao">{props.descricao}</p>

        <div className="produtoNota">
          <span className="estrelas">{'★'.repeat(Math.round(props.nota))}</span>
          <span className="produtoAvaliacoes">
            {props.nota} ({props.avaliacoes} avaliações)
          </span>
        </div>

        <div className="produtoPreco">
          {props.precoAntigo && <span className="precoAntigo">R$ {props.precoAntigo}</span>}
          <p>R$ {props.preco}</p>
          <span className="parcelas">12x de R$ {Math.round(props.preco / 12)} sem juros</span>
        </div>

        <button className="botaoComprar" onClick={() => props.aoComprar(props.nome)}>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}
