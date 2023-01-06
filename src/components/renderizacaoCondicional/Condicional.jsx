import { useState } from 'react'

import './Formulario.css'


import Botao from './Botao'

const Condicional = () => {
    let print

    const [email, setEmail] = useState()

    const enviarEmail = (e) => {
        e.preventDefault()
        

        if(email) {
            print = (
                <div>
                    <p>O e-mail do utilizador é: {email}.</p>
                </div>
            )
        } else {
            print = (
                <div>
                    <p>O e-mail ainda não foi enviado!!</p>
                </div>
            )
        }

        console.log(print)
    }

    return (
        <div>  
            <h2>Introduza o seu e-mail para enviar o formulário</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)} />
                <Botao evento={enviarEmail} texto={'Enviar o e-mail'} />
            </form>
        </div>
    )
}

export default Condicional