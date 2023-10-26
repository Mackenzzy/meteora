import React from "react";
import BotaoRoxo from "../BotaoRoxo/inde";
import './style.scss';
import produtos from "../../data/Produtos/produtos.json";



class ModalProduto extends React.Component {
    render() {
        return (
            <div className="modal-produto">
                {produtos.map((produto, index) => (
                    <div className="produtos" key={index}>
                            
                    <div className="imagem">
                        <img src={produto.imagem} alt="" />
                    </div>
                        
                        
                        
                        <div className="borda">

                            <form action="">

                            <h2>{produto.nome}</h2>
                            <p>{produto.descricao}</p>
                            <h3>R$ {produto.preco}</h3>

                                <h3>Vendido e entregue por Riachuelo</h3>
                                <p>Cores</p>
                                <input type="radio" value="Azul Claro" />
                                <label htmlFor="Azul Claro"> Azul Claro</label>
                                <input type="radio" value="Offwhite" />
                                <label htmlFor="Offwhite"> Offwhite</label>
                                <input type="radio" value="Preto" />
                                <label htmlFor="Preto"> Preto</label>
                                <BotaoRoxo
                                    texto="Adicionar à sacola" />
                            </form>
                        </div>
                    </div>
                ))};



            </div>
        );
    }
}

export default ModalProduto;