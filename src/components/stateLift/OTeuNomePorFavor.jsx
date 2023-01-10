import './Formulario.css'

const OTeuNomePorFavor = ({setNome}) => {
  return (
    <form>
        <input type="text" placeholder="O Seu nome por favor... " onChange={(e) => setNome(e.target.value)}/>
    </form>
  )
}

export default OTeuNomePorFavor