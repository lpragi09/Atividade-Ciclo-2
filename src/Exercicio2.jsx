import React from 'react';

export default function Produto(props) {
  return (
    <>
      <h2>{props.nome}</h2>
      <p>R$ {props.preco}</p>
    </>
  );
}
