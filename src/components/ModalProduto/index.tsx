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
                    <div className="produto-modal" key={index}>

                        <div className="imagem">
                            <img src={produto.imagem} alt="" />
                        </div>



                        <div className="info">

                            <form action="">

                                <h2>{produto.nome}</h2>
                                <p>{produto.descricao}</p>
                                <h3>R$ {produto.preco}</h3>

                                <h4>Vendido e entregue por Riachuelo</h4>
                                <p>Cores</p>
                                <div className="cores">
                                    <input type="radio" id="azul-claro" name="cor" value="Azul Claro" />
                                    <label htmlFor="azul-claro">Azul Claro</label>

                                    <input type="radio" id="offwhite" name="cor" value="Offwhite" />
                                    <label htmlFor="offwhite">Offwhite</label>

                                    <input type="radio" id="preto" name="cor" value="Preto" />
                                    <label htmlFor="preto">Preto</label>
                                </div>

                                <BotaoRoxo
                                    texto="Adicionar à sacola" />
                                <button onClick={() => setIsOpen(!isOpen)}>Fechar</button>
                            </form>
                        </div>
                    </div>
                ))};



            </div>
        );
    } else return <></>

}

