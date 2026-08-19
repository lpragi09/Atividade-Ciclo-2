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
  avatarUrl: 'https://placehold.co/50'
};

const minhaLista = ['Maçã', 'Banana', 'Pão'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Perfil />

    <Produto nome="Notebook Gamer" preco={5000} />
    <Produto nome="Mouse sem Fio" preco={150} />

    <CardUsuario usuario={dadosUsuario} />

    <BotaoDownload />

    <ListaDeCompras itens={minhaLista} />
  </React.StrictMode>
);
