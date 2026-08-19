import React from 'react';

function Avatar(props) {
  return <img className="avatar" src={props.url} alt="Avatar" width={50} />;
}

function InfoUsuario(props) {
  return (
    <>
      <h3>{props.nome}</h3>
      <p>{props.email}</p>
    </>
  );
}

export default function CardUsuario(props) {
  return (
    <article className="usuario">
      <header className="usuarioTopo">
        <Avatar url={props.usuario.avatarUrl} />
        <div className="usuarioInfo">
          <InfoUsuario nome={props.usuario.nome} email={props.usuario.email} />
        </div>
      </header>

      <span className="estrelas">{'★'.repeat(props.usuario.nota)}</span>
      <p className="usuarioComentario">{props.usuario.comentario}</p>
      <span className="usuarioCompra">Comprou: {props.usuario.comprou}</span>
    </article>
  );
}
