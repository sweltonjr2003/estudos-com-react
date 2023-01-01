//Por algum motivo diferenciado não consegui utilizar a tipagem

const Marcas = ({ marca, anoDeLancamento }) => {
    return (
        <>
            <li>{marca} - {anoDeLancamento}</li>
        </>
    )
}

Marcas.defaultProps = {
    marca: 'Não Infromado',
    anoDeLancamento: 0
}

export default Marcas