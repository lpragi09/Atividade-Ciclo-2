import React from 'react';

export default function BotaoDownload() {
  function lidarComClique() {
    console.log('Iniciando download...');
  }

  return <button onClick={lidarComClique}>Baixar Relatório</button>;
}
