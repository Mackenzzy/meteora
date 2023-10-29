import React from "react";
import './style.scss';

class ModalNewsletter extends React.Component {
    render() {
        return(
        <div className="newsletter-modal">
                <div className="newsletter-modal-topo">


                    <div className="newsletter-topo-texto">
                    <img src="./imagens/assets/v.png" alt="" />
                    <h3>Email Cadastrado com sucesso!</h3>
                    </div>

                    <img src="./imagens/assets/x.png" alt="" />
                </div>
                <div>
                    <p>Em breve você receberá novidades exclusivas da Meteora</p>
                 </div>
        </div>
        );
    }
}

export default ModalNewsletter