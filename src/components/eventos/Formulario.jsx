import syles from './Formulario.module.css'

import Swal from 'sweetalert2'

const Formulario = () => {
    const login = (e) => {
        e.preventDefault()
        Swal.fire(
            'Sessão-Iniciada com sucesso!!',
            '',
            'success'
        )
    }

    return (
        <form onSubmit={login}>
            <h1>Iniciar-Sessão</h1>
            <input type="email" name="email" id="email" placeholder='Digitar o e-mail'/>
            <input type="password" name="password" id="password" placeholder='Palavra-Passe' />
            <button>Iniciar-Sessão</button>
        </form>
    )
}

export default Formulario