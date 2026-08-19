import React from 'react';
import { arquivos } from '../dados.js';

export default function Downloads(props) {
  const { BotaoDownload } = props;

  return (
    <main>
      <section className="cabecalhoPagina">
        <span className="secaoTag">Atividade 4 · botão interativo</span>
        <h1>Central de downloads</h1>
        <p className="subtitulo">
          O componente <code>BotaoDownload</code> responde ao evento <code>onClick</code> e
          escreve <code>Iniciando download...</code> no console do navegador.
        </p>
      </section>

      <section className="secao">
        <div className="cartaoDestaque">
          <div>
            <span className="secaoTag">Documento do mês</span>
            <h2>Relatório completo de pedidos</h2>
            <p>
              Todas as compras, valores e prazos de entrega dos últimos doze meses reunidos em um
              arquivo só. Abra o console com F12 antes de clicar para ver a mensagem aparecendo.
            </p>
          </div>
          <BotaoDownload />
        </div>

        <div className="gradeArquivos">
          {arquivos.map((arquivo) => (
            <article className="arquivo" key={arquivo.nome}>
              <span className="arquivoIcone">📄</span>
              <h3>{arquivo.nome}</h3>
              <span className="arquivoFormato">{arquivo.formato}</span>
              <p>{arquivo.texto}</p>
              <BotaoDownload />
            </article>
          ))}
        </div>
      </section>

      <section className="banner">
        <div>
          <h2>Precisa de algum documento antigo?</h2>
          <p>O suporte recupera notas fiscais de até cinco anos atrás em poucas horas.</p>
        </div>
        <a className="botaoComprar" href="#/atividade-3">
          Falar com o suporte
        </a>
      </section>
    </main>
  );
}
