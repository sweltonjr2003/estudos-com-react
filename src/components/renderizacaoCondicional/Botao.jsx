import './Formulario.css'

const Botao = (props) => {
  return (
    <button onClick={props.evento}>{ props.texto }</button>
  )
}

Botao.defaultProps = {
  texto: 'Botao',
  evento: (e) => {
      e.preventDefault()
      alert('Nenhum evento pré-definido')
    }
}

export default Botao