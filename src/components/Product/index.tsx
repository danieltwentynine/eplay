import Tag from '../Tag'
import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit deleniti molestias atque esse nisi? Praesentium rerum laudantium commodi doloribus, iure similique amet obcaecati! Dolorem asperiores error eius vitae a similique.
    </Descricao>
  </Card>
)

export default Product
