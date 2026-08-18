import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Assassin&apos;s Creed Unity is a historical action-adventure game that
          plunges players into the chaotic streets of Paris during the
          18th-century French Revolution. The story follows Arno Dorian, a young
          man who joins the Assassin Brotherhood to avenge his adoptive
          father&apos;s murder and uncover the sinister Templar conspiracy
          fueling the bloody uprising. Navigating a massive, 1:1 scale
          recreation of historical Paris, players utilize fluid parkour
          mechanics to scale landmarks like Notre-Dame, blend into dense,
          rioting crowds for stealth, and customize their gear and skills for
          either silent assassinations or open combat. Alongside its
          single-player narrative, which features a tragic romance between Arno
          and a Templar named Élise, the game integrates online cooperative
          missions allowing up to four players to tackle complex historical
          heists together.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Assassin&apos;s Creed Unity is a 2014 action-adventure game developed
          by by Ubisoft Montreal and published by Ubisoft. It was released in
          November 2014 for PlayStation 4, Windows, and Xbox One, and in
          December 2020 for Stadia.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>fotos</div>
      </Section>
    </>
  )
}

export default Product
