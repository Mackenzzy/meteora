import './style.scss'
import produtos from "../../data/Produtos/produto.json";
import BotaoRoxo from '../BotaoRoxo/inde';
interface IModal {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void

}

export default function Modal({ isOpen, setIsOpen }: IModal) {
    if (isOpen) {
        return (
            <div className="modal-fundo">
                {produtos.map((produto, index) => (
                    <div className="fundo-modal2">
                        <div className="topo-modal">
                            <div className="orientacao-topo">
                                <img src="./imagens/assets/v.png" alt="" />
                                <p className="texto-topo">Confira detalhes sobre o produto</p>
                            </div>
                            <img className="fechar-modal" src="./imagens/assets/x.png" alt="" onClick={() => setIsOpen(false)} />
                        </div>

                        <div className="produto-modal" key={index}>


                            <div className="imagem-modal">
                                <img src={produto.imagem} alt="" />
                            </div>



                            <div className="info">

                                <form action="">

                                    <h2 className="titulo">{produto.nome}</h2>
                                    <p className="descricao">{produto.descricao}

                                    </p>
                                    <h3>R${produto.preco}</h3>

                                    <p className="entregue">Vendido e entregue por Riachuelo


                                    </p>
                                    <p>Cores</p>
                                    <div className="cores">
                                        <div className="radio-container" >
                                            <input type="radio" id="azul-claro" name="cor" value="Azul Claro" />
                                            <label htmlFor="azul-claro">Azul Claro</label>
                                        </div>

                                        <div className="radio-container" >
                                            <input type="radio" id="offwhite" name="cor" value="Offwhite" />
                                            <label htmlFor="offwhite">Offwhite</label>
                                        </div>

                                        <div className="radio-container" >
                                            <input type="radio" id="preto" name="cor" value="Preto" />
                                            <label htmlFor="preto">Preto</label>
                                        </div>
                                    </div>
                                    <p>Tamanho</p>
                                    <div className="tamanho">
                                        <div className="radio-container" >
                                            <input type="radio" id="P" name="tamanho" value="P" />
                                            <label htmlFor="P">P</label>
                                        </div>

                                        <div className="radio-container" >
                                            <input type="radio" id="PP" name="tamanho" value="PP" />
                                            <label htmlFor="PP">PP</label>
                                        </div>

                                        <div className="radio-container" >
                                            <input type="radio" id="M" name="tamanho" value="M" />
                                            <label htmlFor="M">M</label>
                                        </div>

                                        <div className="radio-container" >
                                            <input type="radio" id="G" name="tamanho" value="G" />
                                            <label htmlFor="G">G</label>
                                        </div>

                                        <div className="radio-container" >
                                            <input type="radio" id="GG" name="tamanho" value="GG" />
                                            <label htmlFor="GG">GG</label>
                                        </div>

                                    </div>

                                    <BotaoRoxo
                                        texto="Adicionar à sacola" />
                                </form>
                            </div>
                        </div>
                    </div>
                ))};



            </div>
        );
    } else return <></>

}

