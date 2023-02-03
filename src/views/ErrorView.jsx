import { Link } from "react-router-dom"

const ErrorView = () => {
  return (
    <div>
        Infelizmente não foi possivel encontrar a rota :-(
        <p><Link to={'/'}>Voltar para home</Link></p>
    </div>
  )
}

export default ErrorView