import React from "react";

class ModalNewsletter extends React.Component {
    render() {
        return(
        <div>
                <div className="newsletter-topo">
                    <img src="./imagens/assets/v.png" alt="" />
                    <h3>Email Cadastrado com sucesso!</h3>
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