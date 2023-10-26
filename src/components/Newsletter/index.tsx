import React from "react";
import './style.scss';

class Newsletter extends React.Component {
    render() {
        return (
            <div className="newsletter">
                <div className="borda">
                   <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <b className="bold">Cadastre-se</b></p>
                    <form action="">
                        <input type="text" placeholder="Email" />
                        <button>Enviar</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Newsletter;