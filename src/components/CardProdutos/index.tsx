import { useState } from "react";
import React from "react";
import Modal from "../ModalProduto";
import './style.scss';

interface Props{
    imagem:string,
    altImagem: string,
    nome:string,
    descricao:string,
    preco:string
}



const CardProdutos: React.FC<Props> = ({imagem, altImagem, nome, descricao, preco}) => { {
    const [isOpen, setIsOpen] = useState<boolean>(false);
        return (
        <div className="cardProdutos">
            <img src={imagem} alt={altImagem} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <h3>R$ {preco}</h3>
            <button onClick={() => setIsOpen(!isOpen)}> Ver mais </button>
            <Modal isOpen={isOpen}/>
        </div>);
    }
}
export default CardProdutos;