import { useState } from "react";
import React from "react";
import Modal from "../ModalProduto";
import './style.scss';

interface Props{
    imagem:string,
    altImagem: string,
    nome:string,
    descricao:string,
    preco:string,
    id:number
}



const CardProdutos: React.FC<Props> = ({imagem, altImagem, nome, descricao, preco,id}) => { {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
        return (
        <div className="cardProdutos">
            <img className="imagem" src={imagem} alt={altImagem} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <h3>R$ {preco}</h3>
            <button onClick={() => {
                setSelectedProductId(id); // Define o ID do produto selecionado
                setIsOpen(true);
                console.log(id)
            }}> Ver mais </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
        </div>
        );
    }
}
export default CardProdutos;