import React from 'react';
import { beneficios } from '../dados.js';

export default function SobreLoja(props) {
  const { Perfil } = props;

  return (
    <main>
      <section className="cabecalhoPagina">
        <span className="secaoTag">Atividade 1 · componente de perfil</span>
        <div className="perfilLoja">
          <div className="perfilFoto">👨‍💻</div>
          <Perfil />
          <p className="perfilCargo">
            Fundadores da Atividade Store · estudantes de Sistemas de Informação
          </p>
        </div>
      </section>

      <section className="secao">
        <div className="colunasTexto">
          <div>
            <h2>Como a loja começou</h2>
            <p>
              A Atividade Store nasceu de uma bancada de montagem improvisada no quarto, em Lavras.
              Eram só amigos pedindo ajuda para escolher peça de computador sem cair em
              propaganda enganosa. Quando a fila de pedidos passou de dez por semana, virou loja.
            </p>
            <p>
              Hoje a operação é pequena de propósito: cada item do catálogo é testado antes de
              entrar no site, e o que não passa no teste simplesmente não é vendido.
            </p>
          </div>

          <div>
            <h2>O que a gente promete</h2>
            <p>
              Preço honesto, descrição sem exagero e prazo que a gente consegue cumprir. Se o
              produto atrasar, o frete volta para a sua conta como crédito.
            </p>
            <p>
              O suporte responde em até um dia útil, e quem mora na região ainda conta com a
              montagem do setup sem custo nenhum.
            </p>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="gradeNumeros">
          <div className="numeroCard">
            <strong>2023</strong>
            <span>ano de fundação</span>
          </div>
          <div className="numeroCard">
            <strong>+12 mil</strong>
            <span>pedidos entregues</span>
          </div>
          <div className="numeroCard">
            <strong>348</strong>
            <span>cidades atendidas</span>
          </div>
          <div className="numeroCard">
            <strong>98%</strong>
            <span>de clientes satisfeitos</span>
          </div>
        </div>
      </section>

      <section className="secao">
        <header className="secaoTopo">
          <div>
            <span className="secaoTag">Compromissos</span>
            <h2>Por que comprar aqui</h2>
          </div>
        </header>

        <div className="faixaBeneficios semMargem">
          {beneficios.map((beneficio) => (
            <div className="beneficio" key={beneficio.titulo}>
              <span className="beneficioIcone">{beneficio.emoji}</span>
              <div>
                <strong>{beneficio.titulo}</strong>
                <p>{beneficio.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="banner">
        <div>
          <h2>Pronto para montar o seu?</h2>
          <p>O catálogo completo tem 8 produtos testados, com descrição e preço à vista.</p>
        </div>
        <a className="botaoComprar" href="#/atividade-2">
          Ir para o catálogo
        </a>
      </section>
    </main>
  );
}
