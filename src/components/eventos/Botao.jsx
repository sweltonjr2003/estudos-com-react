import Swal from "sweetalert2"

const Botao = () => {
    const dispararAlerta = () => {
        Swal.fire('Você clicou no botão')
    }

  return (
    <button onClick={dispararAlerta}>Clique em mim!!</button>
  )
}

export default Botao