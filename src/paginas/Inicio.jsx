import React from 'react';
import { produtos, beneficios, categorias, perguntas } from '../dados.js';

export default function Inicio(props) {
  const { Produto } = props;
  const destaques = produtos.slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="heroTexto">
          <span className="selo">Semana do setup · até 30% off</span>
          <h1>
            O seu setup dos sonhos <span className="destaque">começa aqui</span>
          </h1>
          <p>
            Periféricos, monitores e máquinas selecionadas peça por peça. Entrega rápida para
            todo o Brasil e suporte de gente que realmente usa o que vende.
          </p>

          <div className="heroBotoes">
            <a className="botaoComprar" href="#/atividade-2">
              Ver catálogo completo
            </a>
            <a className="botaoSecundario" href="#/atividade-3">
              Ler avaliações
            </a>
          </div>

          <dl className="heroNumeros">
            <div>
              <dt>+12 mil</dt>
              <dd>pedidos entregues</dd>
            </div>
            <div>
              <dt>4,8</dt>
              <dd>nota média da loja</dd>
            </div>
            <div>
              <dt>24h</dt>
              <dd>para postar o pedido</dd>
            </div>
          </dl>
        </div>

        <div className="heroArte">
          <div className="heroCard heroCard1">
            <span>💻</span>
            <strong>Notebook Gamer</strong>
            <span className="heroPreco">R$ 5000</span>
          </div>
          <div className="heroCard heroCard2">
            <span>🎧</span>
            <strong>Headset 7.1</strong>
            <span className="heroPreco">R$ 680</span>
          </div>
          <div className="heroCard heroCard3">
            <span>⌨️</span>
            <strong>Teclado Mecânico</strong>
            <span className="heroPreco">R$ 420</span>
          </div>
        </div>
      </section>

      <section className="faixaBeneficios">
        {beneficios.map((beneficio) => (
          <div className="beneficio" key={beneficio.titulo}>
            <span className="beneficioIcone">{beneficio.emoji}</span>
            <div>
              <strong>{beneficio.titulo}</strong>
              <p>{beneficio.texto}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="secao">
        <header className="secaoTopo">
          <div>
            <span className="secaoTag">Categorias</span>
            <h2>Escolha por onde começar</h2>
          </div>
          <a className="linkVerTudo" href="#/atividade-2">
            Ver tudo →
          </a>
        </header>

        <div className="gradeCategorias">
          {categorias.map((categoria) => (
            <a className="categoria" href="#/atividade-2" key={categoria.nome}>
              <span className="categoriaIcone">{categoria.emoji}</span>
              <strong>{categoria.nome}</strong>
              <span className="categoriaItens">{categoria.itens} itens</span>
            </a>
          ))}
        </div>
      </section>

      <section className="secao">
        <header className="secaoTopo">
          <div>
            <span className="secaoTag">Atividade 2 · componente com props</span>
            <h2>Destaques da semana</h2>
          </div>
          <a className="linkVerTudo" href="#/atividade-2">
            Ver os 8 produtos →
          </a>
        </header>

        <div className="gradeProdutos">
          {destaques.map((produto) => (
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
          <span className="selo">Frete grátis acima de R$ 199</span>
          <h2>Monte o combo e economize até R$ 900</h2>
          <p>
            Juntando máquina, monitor e periféricos o desconto aumenta a cada item adicionado ao
            carrinho.
          </p>
        </div>
        <a className="botaoComprar" href="#/atividade-2">
          Montar meu combo
        </a>
      </section>

      <section className="secao">
        <header className="secaoTopo">
          <div>
            <span className="secaoTag">Dúvidas</span>
            <h2>Perguntas frequentes</h2>
          </div>
        </header>

        <div className="gradePerguntas">
          {perguntas.map((item) => (
            <details className="pergunta" key={item.pergunta}>
              <summary>{item.pergunta}</summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Receba as ofertas antes de todo mundo</h2>
          <p>Um e-mail por semana com os cupons e os lançamentos da loja. Sem spam.</p>
        </div>
        <form className="formNewsletter" onSubmit={(evento) => evento.preventDefault()}>
          <input type="email" placeholder="seu melhor e-mail" aria-label="E-mail" />
          <button className="botaoComprar" type="submit">
            Quero receber
          </button>
        </form>
      </section>
    </main>
  );
}
