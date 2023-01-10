const Lista = ({ itens }) => {
    return (
        <>
            <h2>Lista de itens</h2>
            { itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (<p>Ainda não tem nenhum item...</p>)
            }
        </>
    )
}

Lista.defaultProps = {
    itens: []
}

export default Lista