import React from 'react';

export default function Produto(props) {
  return (
    <div className="produto">
      <h2>{props.nome}</h2>
      <p>R$ {props.preco}</p>
    </div>
  );
}
