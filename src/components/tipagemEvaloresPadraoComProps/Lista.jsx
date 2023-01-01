import Marcas from "./Marcas"

const Lista = () => {
    return (
        <>
            <ul>
                <Marcas marca={"Fiat"} anoDeLancamento={1968} />
                <Marcas />
            </ul>
        </>
    )
}

export default Lista