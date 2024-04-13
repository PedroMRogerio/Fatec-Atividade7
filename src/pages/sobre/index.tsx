import { Link } from "react-router-dom"

function Sobre(){
    return (
        <div>
            <h1>Sobre</h1>
            <p>Site criado por: Amanda, Pedro e Vitor.</p>
            <Link to='/'>Voltar para Home</Link>
        </div>
    )
}

export default Sobre