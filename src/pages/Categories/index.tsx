import ProductsList from "../../components/ProductsList";
import Game from "../../models/Games";

import residentEvilImage from '../../assets/images/resident.png'
import starWarsImage from '../../assets/images/star_wars.png'
import zeldaImage from '../../assets/images/zelda.png'
import diabloImage from '../../assets/images/diablo.png'
import pathOfExileImage from '../../assets/images/poe2.jpg'
import deathStrandingImage from '../../assets/images/deathstranding.jpg'
import marathonGameImage from '../../assets/images/marathon.jpg'
import cyberpunkImage from '../../assets/images/cyberpunk.jpg'

const rpg: Game[] = [
  {
    id: 1,
    title: 'Path of Exile 2',
    category: 'RPG',
    system: 'PC',
    description: 'Jogo de RPG de ação em mundo aberto desenvolvido e publicado pela Grinding Gear Games, sendo a sequência do jogo Path of Exile.',
    infos: ['Single Player', 'Mature 17+'],
    image: pathOfExileImage
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
  },
  {
    id: 5,
    title: 'Cyberpunk 2077',
    category: 'RPG',
    system: 'PC',
    description: 'Jogo de RPG de ação em mundo aberto desenvolvido e publicado pela CD Projekt, sendo o primeiro título da série Cyberpunk.',
    infos: ['Single Player', 'Mature 17+'],
    image: cyberpunkImage
  }
]

const acao: Game[] = [
  {
    id: 6,
    title: 'Marathon',
    category: 'FPS',
    system: 'PC',
    description: 'Jogo de tiro em primeira pessoa desenvolvido e publicado pela Bungie, sendo o primeiro título da série Marathon.',
    infos: ['Single Player', 'Mature 17+'],
    image: marathonGameImage
  },
  {
    id: 7,
    title: 'Death Stranding',
    category: 'Ação',
    system: 'PS4',
    description: 'Jogo de ação e aventura em mundo aberto desenvolvido pela Kojima Productions e publicado pela Sony Interactive Entertainment.',
    infos: ['Single Player', 'Mature 17+'],
    image: deathStrandingImage
  }
]

const Categorias = () => (
  <>
    <ProductsList games={rpg} title="RPG" background="gray"/>
    <ProductsList games={acao} title="Ação" background="black"/>
  </>
)

export default Categorias
