import React from 'react';

export default function ListaDeCompras(props) {
  const listaItens = props.itens.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return <ul className="lista">{listaItens}</ul>;
}
