import { useParams } from "react-router-dom"

const Param = () => {
    const id = useParams().something

  return (
    <div>Param: {id}</div>
  )
}

export default Param