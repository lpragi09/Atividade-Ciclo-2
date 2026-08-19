import React, { useState } from 'react';
import { links } from './Loja.jsx';

export default function Navbar(props) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="navbar">
      <div className="navbarConteudo">
        <a
          className="marca"
          href="#/"
          aria-label="Atividade Store, ir para a página inicial"
          onClick={() => setMenuAberto(false)}
        >
          <span className="marcaIcone">A</span>
          <span className="marcaTexto">
            Atividade <strong>Store</strong>
          </span>
        </a>

        <nav className={menuAberto ? 'menu menuAberto' : 'menu'}>
          {links.map((link) => (
            <a
              key={link.rota}
              className={props.rota === link.rota ? 'linkMenu linkAtivo' : 'linkMenu'}
              href={'#' + link.rota}
              onClick={() => setMenuAberto(false)}
            >
              {link.numero && <span className="linkNumero">{link.numero}</span>}
              {link.rotulo}
            </a>
          ))}
        </nav>

        <div className="navbarAcoes">
          <button
            className="botaoCarrinho"
            aria-label={`Abrir carrinho com ${props.quantidade} itens`}
            onClick={props.aoAbrirCarrinho}
          >
            <span className="carrinhoIcone">🛒</span>
            <span className="carrinhoTexto">Carrinho</span>
            {props.quantidade > 0 && <span className="carrinhoBadge">{props.quantidade}</span>}
          </button>

          <button
            className="botaoMenu"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto((atual) => !atual)}
          >
            {menuAberto ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
