import React from 'react';
import { links } from './Loja.jsx';

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodapeGrade">
        <div className="rodapeMarca">
          <span className="marcaIcone">R</span>
          <p>
            Loja fictícia criada para a atividade do ciclo 2, na disciplina de Programação Web
            do Unilavras.
          </p>
        </div>

        <div className="rodapeColuna">
          <h4>Atividades</h4>
          {links.map((link) => (
            <a key={link.rota} href={'#' + link.rota}>
              {link.rotulo}
            </a>
          ))}
        </div>

        <div className="rodapeColuna">
          <h4>Ajuda</h4>
          <a href="#/atividade-4">Downloads</a>
          <a href="#/atividade-3">Avaliações</a>
          <a href="#/atividade-5">Minha lista</a>
          <a href="#/">Central de trocas</a>
        </div>

        <div className="rodapeColuna">
          <h4>Contato</h4>
          <a href="#/">Lavras - MG</a>
          <a href="#/">(35) 99999-0000</a>
          <a href="#/">contato@ragistore.com</a>
        </div>
      </div>

      <div className="rodapeFinal">
        <span>© 2026 Ragi Store · Projeto acadêmico</span>
        <span>Feito com React e Vite</span>
      </div>
    </footer>
  );
}
