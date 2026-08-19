import React, { useEffect, useState } from 'react';

import Navbar from './Navbar.jsx';
import Carrinho from './Carrinho.jsx';
import Rodape from './Rodape.jsx';

import Inicio from './paginas/Inicio.jsx';
import SobreLoja from './paginas/SobreLoja.jsx';
import Catalogo from './paginas/Catalogo.jsx';
import Avaliacoes from './paginas/Avaliacoes.jsx';
import Downloads from './paginas/Downloads.jsx';
import MinhaLista from './paginas/MinhaLista.jsx';

import { produtos } from './dados.js';

export const links = [
  { rota: '/', rotulo: 'Início' },
  { rota: '/atividade-1', rotulo: 'Perfil', numero: 1 },
  { rota: '/atividade-2', rotulo: 'Catálogo', numero: 2 },
  { rota: '/atividade-3', rotulo: 'Avaliações', numero: 3 },
  { rota: '/atividade-4', rotulo: 'Downloads', numero: 4 },
  { rota: '/atividade-5', rotulo: 'Lista', numero: 5 }
];

function lerRota() {
  return window.location.hash.replace('#', '') || '/';
}

export default function Loja(props) {
  const { Perfil, Produto, CardUsuario, BotaoDownload, ListaDeCompras } = props.componentes;

  const [rota, setRota] = useState(lerRota);
  const [itens, setItens] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [aviso, setAviso] = useState('');

  useEffect(() => {
    function aoTrocar() {
      setRota(lerRota());
      window.scrollTo({ top: 0 });
    }

    window.addEventListener('hashchange', aoTrocar);
    return () => window.removeEventListener('hashchange', aoTrocar);
  }, []);

  useEffect(() => {
    if (!aviso) return;
    const tempo = setTimeout(() => setAviso(''), 2600);
    return () => clearTimeout(tempo);
  }, [aviso]);

  function ir(destino) {
    window.location.hash = destino;
  }

  function adicionar(nome) {
    const produto = produtos.find((item) => item.nome === nome);
    if (!produto) return;

    setItens((atuais) => {
      const existente = atuais.find((item) => item.id === produto.id);

      if (existente) {
        return atuais.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }

      return [...atuais, { ...produto, quantidade: 1 }];
    });

    setAviso(`${nome} foi para o carrinho`);
  }

  function mudarQuantidade(id, passo) {
    setItens((atuais) =>
      atuais
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade + passo } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function limpar() {
    setItens([]);
  }

  const quantidadeTotal = itens.reduce((soma, item) => soma + item.quantidade, 0);

  const paginas = {
    '/': <Inicio Produto={Produto} aoComprar={adicionar} ir={ir} />,
    '/atividade-1': <SobreLoja Perfil={Perfil} ir={ir} />,
    '/atividade-2': <Catalogo Produto={Produto} aoComprar={adicionar} />,
    '/atividade-3': <Avaliacoes CardUsuario={CardUsuario} />,
    '/atividade-4': <Downloads BotaoDownload={BotaoDownload} />,
    '/atividade-5': <MinhaLista ListaDeCompras={ListaDeCompras} aoComprar={adicionar} ir={ir} />
  };

  return (
    <div className="site">
      <Navbar
        rota={rota}
        quantidade={quantidadeTotal}
        aoAbrirCarrinho={() => setCarrinhoAberto(true)}
      />

      {paginas[rota] || paginas['/']}

      <Rodape />

      <Carrinho
        aberto={carrinhoAberto}
        itens={itens}
        aoFechar={() => setCarrinhoAberto(false)}
        aoMudarQuantidade={mudarQuantidade}
        aoLimpar={limpar}
      />

      {aviso && <div className="aviso">{aviso}</div>}
    </div>
  );
}
