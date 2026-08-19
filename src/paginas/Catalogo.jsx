import React, { useState } from 'react';
import { produtos, categorias } from '../dados.js';

export default function Catalogo(props) {
  const { Produto } = props;
  const [filtro, setFiltro] = useState('Todos');
  const [ordem, setOrdem] = useState('relevancia');

  const filtrados = produtos.filter(
    (produto) => filtro === 'Todos' || produto.categoria === filtro
  );

  const listaFinal = [...filtrados].sort((a, b) => {
    if (ordem === 'menor') return a.preco - b.preco;
    if (ordem === 'maior') return b.preco - a.preco;
    return b.nota - a.nota;
  });

  return (
    <main>
      <section className="cabecalhoPagina">
        <span className="secaoTag">Atividade 2 · componente com props</span>
        <h1>Catálogo completo</h1>
        <p className="subtitulo">
          Cada card abaixo é o mesmo componente <code>Produto</code>, recebendo nome, preço,
          descrição e categoria por props.
        </p>
      </section>

      <section className="secao">
        <div className="barraFiltros">
          <div className="filtros">
            <button
              className={filtro === 'Todos' ? 'chip chipAtivo' : 'chip'}
              onClick={() => setFiltro('Todos')}
            >
              Todos
            </button>
            {categorias.map((categoria) => (
              <button
                key={categoria.nome}
                className={filtro === categoria.nome ? 'chip chipAtivo' : 'chip'}
                onClick={() => setFiltro(categoria.nome)}
              >
                {categoria.emoji} {categoria.nome}
              </button>
            ))}
          </div>

          <select
            className="ordenar"
            value={ordem}
            aria-label="Ordenar por"
            onChange={(evento) => setOrdem(evento.target.value)}
          >
            <option value="relevancia">Mais bem avaliados</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
        </div>

        <p className="contador">
          {listaFinal.length} {listaFinal.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </p>

        <div className="gradeProdutos">
          {listaFinal.map((produto) => (
            <Produto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              precoAntigo={produto.precoAntigo}
              descricao={produto.descricao}
              emoji={produto.emoji}
              categoria={produto.categoria}
              nota={produto.nota}
              avaliacoes={produto.avaliacoes}
              etiqueta={produto.etiqueta}
              aoComprar={props.aoComprar}
            />
          ))}
        </div>
      </section>

      <section className="banner">
        <div>
          <h2>Não achou o que queria?</h2>
          <p>Manda a configuração que você precisa que a gente monta o orçamento em 24h.</p>
        </div>
        <a className="botaoComprar" href="#/atividade-4">
          Baixar tabela de preços
        </a>
      </section>
    </main>
  );
}
