import { useState } from 'react'

import './Formulario.css'

import Swal from 'sweetalert2'

const Formulario = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const login = (e) => {
        e.preventDefault()
        console.log(email + ' - ' + password)
        Swal.fire(
            'Sessão-Iniciada com sucesso!!',
            '',
            'success'
        )
    }

    return (
        <>
            <form onSubmit={login}>
                <h2>Iniciar-Sessão</h2>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" name="email" id="email" placeholder='Digitar o e-mail' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Palavra-Passe</label>
                    <input type="password" name="password" id="password" placeholder='Palavra-Passe' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button>Iniciar-Sessão</button>
                </div>
                {email} - {password}
            </form>
        </>
    )
}

export default Formulario