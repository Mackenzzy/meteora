import React, { Component } from "react";
import './style.scss';

interface Props{
    nome:string,
    imagem:string
}

const Categoria: React.FC<Props> = ({ nome, imagem }) => {
    return (
      <div className="card-categoria">
        <img src={imagem} alt={nome} />
        <p className="categoria-legenda">{nome}</p>
      </div>
    );
  }



export default Categoria;

