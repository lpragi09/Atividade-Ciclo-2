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
    <div className="usuario">
      <Avatar url={props.usuario.avatarUrl} />
      <div className="usuarioInfo">
        <InfoUsuario nome={props.usuario.nome} email={props.usuario.email} />
      </div>
    </div>
  );
}
