import React from "react";
import './style.scss';

class Facilidades extends React.Component {
    render() {
        return (
            <div className="fundo">
                <h2>Conheça todas as nossas facilidades</h2>
                <div className="facilidades">
                    <div className="facilidades-itens">
                        <img src="./imagens/Facilidades/Union.png" alt="imagem representativa do PIX" />
                        <div className="item-texto">
                            <h3>PAGUE PELO PIX</h3>
                            <p>Ganhe 5% OFF em pagamentos via PIX</p>
                        </div>

                    </div>
                    <div className="facilidades-itens">
                        <img src="./imagens/Facilidades/arrow-repeat.png" alt="imagem representativa da troca" />
                        <div className="item-texto">
                            <h3>TROCA GRATIS</h3>
                            <p>Fique livre para trocar em até 30 dias.</p>
                        </div>

                    </div>
                    <div className="facilidades-itens">
                        <img src="./imagens/Facilidades/flower1.png" alt="imagem representativa da sustentabilidade" />
                        <div className="item-texto">
                            <h3>Sustentabiliade</h3>
                            <p>Moda responsável, que respeita o meio ambiente</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Facilidades;