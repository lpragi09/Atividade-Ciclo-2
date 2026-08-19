import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Perfil from './Exercicio1.jsx';
import Produto from './Exercicio2.jsx';
import CardUsuario from './Exercicio3.jsx';
import BotaoDownload from './Exercicio4.jsx';
import ListaDeCompras from './Exercicio5.jsx';

const dadosUsuario = {
  nome: 'Ana Clara',
  email: 'ana.clara@email.com',
  avatarUrl: 'https://i.pravatar.cc/160?img=47'
};

const minhaLista = ['Maçã', 'Banana', 'Pão'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="pagina">
      <header className="topo">
        <span className="tag">Unilavras · Programação Web</span>
        <Perfil />
      </header>

      <main className="grade">
        <section className="cartao">
          <span className="numero">Atividade 2</span>
          <h2 className="tituloCartao">Componente com props</h2>
          <div className="produtos">
            <Produto nome="Notebook Gamer" preco={5000} />
            <Produto nome="Mouse sem Fio" preco={150} />
          </div>
        </section>

        <section className="cartao">
          <span className="numero">Atividade 3</span>
          <h2 className="tituloCartao">Composição de componentes</h2>
          <CardUsuario usuario={dadosUsuario} />
        </section>

        <section className="cartao">
          <span className="numero">Atividade 4</span>
          <h2 className="tituloCartao">Botão interativo</h2>
          <p className="dica">Abra o console do navegador antes de clicar.</p>
          <BotaoDownload />
        </section>

        <section className="cartao">
          <span className="numero">Atividade 5</span>
          <h2 className="tituloCartao">Renderizando uma lista</h2>
          <ListaDeCompras itens={minhaLista} />
        </section>
      </main>

      <footer className="rodape">Feito com React e Vite</footer>
    </div>
  </React.StrictMode>
);
