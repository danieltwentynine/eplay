import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'


const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Eplay" />
      <nav>
        <Links>
          <LinkItem>
          <Link to="/categories">
            Categorias
          </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/new-releases">
              Novidades
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/promotions">
              Promoções
            </Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho de Compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
