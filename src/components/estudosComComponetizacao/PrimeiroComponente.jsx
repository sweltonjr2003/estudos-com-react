// Aqui o objectivo é estudar sobre a criação de Componentes no react js

import Frase from "./Frase"

const PrimeiroComponente = () => {
    return (
        <div className="primeiro-componente">
            <p>Meu primeiro componente</p>
            <Frase /> dentro do primeiro componente
        </div>
    )
}

export default PrimeiroComponente