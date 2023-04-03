import { SmallPokemon } from '@/interface'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${ pokemon.id }`);
  }

  return (
    <>
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={pokemon.id}>
                <Card 
                  isHoverable 
                  isPressable
                  onClick={ onPokemonClick }
                  >
                  <Card.Body>
                       <Card.Image 
                          src={pokemon.img}
                          width="100%"
                          height={ 140 }
                          />
                  </Card.Body>
                  <Card.Footer>
                    <Row justify='space-between'>
                      <Text transform='capitalize'>{ pokemon.name }</Text>
                      <Text>#{ pokemon.id }</Text>
                    </Row>
                  </Card.Footer>

                </Card>
              </Grid>
    </>
  )
}
