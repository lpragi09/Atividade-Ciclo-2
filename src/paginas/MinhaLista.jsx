import React from 'react';
import { listaDeCompras, produtos } from '../dados.js';

export default function MinhaLista(props) {
  const { ListaDeCompras } = props;
  const sugestoes = produtos.slice(4, 8);

  return (
    <main>
      <section className="cabecalhoPagina">
        <span className="secaoTag">Atividade 5 · renderizando listas</span>
        <h1>Minha lista de compras</h1>
        <p className="subtitulo">
          O componente <code>ListaDeCompras</code> recebe um array por props e usa o método
          <code> .map()</code> para montar cada item da lista.
        </p>
      </section>

      <section className="secao">
        <div className="duasColunas">
          <div className="cartaoLista">
            <header className="listaTopo">
              <h2>Mercado da semana</h2>
              <span className="listaContagem">{listaDeCompras.length} itens</span>
            </header>

            <ListaDeCompras itens={listaDeCompras} />

            <footer className="listaRodape">
              <span>Lista salva automaticamente no seu perfil.</span>
            </footer>
          </div>

          <div className="cartaoDica">
            <h2>Como essa lista funciona</h2>
            <p>
              O array vive no arquivo de dados da loja e é entregue ao componente por props. Se
              amanhã a lista tiver trinta itens, nada no componente precisa mudar: o
              <code> .map()</code> percorre o que chegar.
            </p>
            <p>
              Cada item recebe uma <code>key</code> própria, que é o jeito do React saber qual
              linha mudou sem redesenhar a lista inteira.
            </p>
            <a className="botaoSecundario" href="#/atividade-2">
              Adicionar itens do catálogo
            </a>
          </div>
        </div>
      </section>

      <section className="secao">
        <header className="secaoTopo">
          <div>
            <span className="secaoTag">Sugestões</span>
            <h2>Costumam comprar junto</h2>
          </div>
          <a className="linkVerTudo" href="#/atividade-2">
            Ver tudo →
          </a>
        </header>

        <div className="gradeSugestoes">
          {sugestoes.map((produto) => (
            <article className="sugestao" key={produto.id}>
              <span className="sugestaoEmoji">{produto.emoji}</span>
              <div className="sugestaoInfo">
                <strong>{produto.nome}</strong>
                <span>R$ {produto.preco}</span>
              </div>
              <button className="botaoSecundario" onClick={() => props.aoComprar(produto.nome)}>
                Adicionar
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
