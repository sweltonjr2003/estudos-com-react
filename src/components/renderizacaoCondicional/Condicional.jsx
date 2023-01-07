import { useState } from 'react'

import './Formulario.css'


import Botao from './Botao'

const Condicional = () => {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    const enviarEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)
    }

    return (
        <div>  
            <h2>Introduza o seu e-mail para enviar o formulário</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)} />
                <Botao evento={enviarEmail} texto={'Enviar o e-mail'} />
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail de utilizador é: {userEmail}</p>
                </div>
            )}
        </div>
    )
}

export default Condicional