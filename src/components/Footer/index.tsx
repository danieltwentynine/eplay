import { Container, FooterSection, SectionTitle, Links, Link } from './styles'

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <Link>RPG</Link>
          <Link>Ação</Link>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <Link>Novidades</Link>
          <Link>Em Destaque</Link>
          <Link>Ofertas</Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY - Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
