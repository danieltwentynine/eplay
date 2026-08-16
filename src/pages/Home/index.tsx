import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"
import Game from "../../models/Games"

import residentEvilImage from '../../assets/images/resident.png'
import starWarsImage from '../../assets/images/star_wars.png'
import zeldaImage from '../../assets/images/zelda.png'
import diabloImage from '../../assets/images/diablo.png'
import pathOfExileImage from '../../assets/images/poe2.jpg'
import deathStrandingImage from '../../assets/images/deathstranding.jpg'
import marathonGameImage from '../../assets/images/marathon.jpg'
import cyberpunkImage from '../../assets/images/cyberpunk.jpg'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS4',
    description: 'Jogo de ação e aventura em terceira pessoa desenvolvido e publicado pela Capcom, sendo o quarto título principal da série Resident Evil.',
    infos: ['Single Player', 'Mature 17+'],
    image: residentEvilImage
  },
  {
    id: 2,
    title: 'Star Wars: Survival',
    category: 'RPG',
    system: 'PC',
    description: 'Jogo de RPG de ação em mundo aberto desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment.',
    infos: ['Single Player', 'Mature 17+'],
    image: starWarsImage
  },
  {
    id: 3,
    title: 'Zelda: Breath of the Wild',
    category: 'RPG',
    system: 'Switch',
    description: 'Jogo de ação e aventura em mundo aberto desenvolvido e publicado pela Nintendo, sendo o décimo nono título principal da série The Legend of Zelda.',
    infos: ['Single Player', 'Everyone 10+'],
    image: zeldaImage
  },
  {
    id: 4,
    title: 'Diablo IV',
    category: 'RPG',
    system: 'PC',
    description: 'Jogo de RPG de ação em mundo aberto desenvolvido e publicado pela Blizzard Entertainment, sendo o quarto título principal da série Diablo.',
    infos: ['Single Player', 'Mature 17+'],
    image: diabloImage
  }
]

const MaisVendidos: Game[] = [
  {
    id: 5,
    title: 'Path of Exile 2',
    category: 'RPG',
    system: 'PC',
    description: 'Jogo de RPG de ação em mundo aberto desenvolvido e publicado pela Grinding Gear Games, sendo a sequência do jogo Path of Exile.',
    infos: ['Single Player', 'Mature 17+'],
    image: pathOfExileImage
  },
  {
    id: 6,
    title: 'Death Stranding',
    category: 'Ação',
    system: 'PS4',
    description: 'Jogo de ação e aventura em mundo aberto desenvolvido pela Kojima Productions e publicado pela Sony Interactive Entertainment.',
    infos: ['Single Player', 'Mature 17+'],
    image: deathStrandingImage
  },
  {
    id: 7,
    title: 'Marathon',
    category: 'FPS',
    system: 'PC',
    description: 'Jogo de tiro em primeira pessoa desenvolvido e publicado pela Bungie, sendo o primeiro título da série Marathon.',
    infos: ['Single Player', 'Mature 17+'],
    image: marathonGameImage
  },
  {
    id: 8,
    title: 'Cyberpunk 2077',
    category: 'RPG',
    system: 'PC',
    description: 'Jogo de RPG de ação em mundo aberto desenvolvido e publicado pela CD Projekt, sendo o primeiro título da série Cyberpunk.',
    infos: ['Single Player', 'Mature 17+'],
    image: cyberpunkImage
  }
]

const Home = () => (
  <>
        <Banner />
        <ProductsList games={promocoes} title="Promoções" background="gray" />
        <ProductsList games={MaisVendidos} title="Mais Vendidos" background="black" />
      </>
)

export default Home
