import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Loja from './Loja.jsx';

import Perfil from './Exercicio1.jsx';
import Produto from './Exercicio2.jsx';
import CardUsuario from './Exercicio3.jsx';
import BotaoDownload from './Exercicio4.jsx';
import ListaDeCompras from './Exercicio5.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loja
      componentes={{ Perfil, Produto, CardUsuario, BotaoDownload, ListaDeCompras }}
    />
  </React.StrictMode>
);
