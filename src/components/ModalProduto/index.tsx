import './style.scss'
interface IModal{
    isOpen: boolean
}

export default function Modal ({isOpen}: IModal) {
    if(isOpen){
        return (
            <div className="modal-produto">
                <div>
                    <h2>Titulo</h2>
                    <p>Descrição</p>
                </div>
            </div>
        )
    }return <></>

}   

