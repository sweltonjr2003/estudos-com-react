import './Formulario.css'

const Botao = ({ texto, evento }) => {

  return <button onClick={evento}>{ texto }</button>
}

Botao.defaultProps = {
  texto: 'Botão',
  evento: () => alert ('Nenhum evento pré-definido')
}

export default Botao