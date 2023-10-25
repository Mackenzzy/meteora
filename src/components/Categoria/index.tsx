import React, { Component } from "react";

interface Props{
    nome:string,
    imagem:string
}

const Categoria: React.FC<Props> = ({ nome, imagem }) => {
    return (
      <div className="categoria">
        <img src={imagem} alt={nome} />
        <p className="categoria-legenda">{nome}</p>
      </div>
    );
  }



export default Categoria;

