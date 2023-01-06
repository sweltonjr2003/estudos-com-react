import Botao from './Botao'

import Swal from 'sweetalert2'

const EventoComProps = () => {

    const meuEvento = () => {
        Swal.fire(
            'O Evento foi activado com sucesso',
            '',
            'success'
        )
    }

    const segundoEvento = () => {
        Swal.fire(
            'Segundo Evento activado com sucesso!!',
            '',
            'success'
        )
    }

    return (
        <>
            <Botao evento={meuEvento} texto={"Primeiro Evento"} />
            <br />
            <br />
            <Botao evento={segundoEvento} texto={'Segundo Evento'} />
        </>
    )
}

export default EventoComProps