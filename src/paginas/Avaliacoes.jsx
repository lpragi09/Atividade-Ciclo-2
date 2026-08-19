import React from 'react';
import { clientes } from '../dados.js';

export default function Avaliacoes(props) {
  const { CardUsuario } = props;

  const media = (
    clientes.reduce((soma, cliente) => soma + cliente.nota, 0) / clientes.length
  ).toFixed(1);

  const distribuicao = [5, 4, 3, 2, 1].map((estrela) => ({
    estrela,
    total: clientes.filter((cliente) => cliente.nota === estrela).length
  }));

  return (
    <main>
      <section className="cabecalhoPagina">
        <span className="secaoTag">Atividade 3 · composição de componentes</span>
        <h1>Quem comprou, aprovou</h1>
        <p className="subtitulo">
          Cada card é o componente <code>CardUsuario</code>, que junta dentro dele o
          <code> Avatar</code> e o <code>InfoUsuario</code>.
        </p>
      </section>

      <section className="secao">
        <div className="resumoNotas">
          <div className="notaGrande">
            <strong>{media}</strong>
            <span className="estrelas">★★★★★</span>
            <span className="notaTexto">{clientes.length} avaliações verificadas</span>
          </div>

          <div className="barrasNota">
            {distribuicao.map((linha) => (
              <div className="linhaNota" key={linha.estrela}>
                <span>{linha.estrela} ★</span>
                <div className="barra">
                  <div
                    className="barraPreenchida"
                    style={{ width: (linha.total / clientes.length) * 100 + '%' }}
                  />
                </div>
                <span className="linhaTotalNota">{linha.total}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="gradeAvaliacoes">
          {clientes.map((cliente) => (
            <CardUsuario key={cliente.email} usuario={cliente} />
          ))}
        </div>
      </section>

      <section className="banner">
        <div>
          <h2>Comprou e quer contar como foi?</h2>
          <p>Toda avaliação publicada vira R$ 20 de crédito para o próximo pedido.</p>
        </div>
        <a className="botaoComprar" href="#/atividade-2">
          Avaliar minha compra
        </a>
      </section>
    </main>
  );
}
