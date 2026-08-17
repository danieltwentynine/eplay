import { useParams } from 'react-router-dom'

const Product = () => {
  const teste = useParams()

  return <div>produto {teste.id}</div>
}

export default Product
