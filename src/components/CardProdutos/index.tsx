import React from "react";
import './style.scss';

interface Props{
    imagem:string,
    altImagem: string,
    nome:string,
    descricao:string,
    preco:string
}


const CardProdutos: React.FC<Props> = ({imagem, altImagem, nome, descricao, preco}) => { {
        return (
        <div className="cardProdutos">
            <img src={imagem} alt={altImagem} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <h3>R$ {preco}</h3>
            <button>Ver Mais</button>
        </div>);
    }
}

export default CardProdutos;