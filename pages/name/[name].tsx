import { useEffect, useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths  } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '@/components/layout';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '@/interface';
import { getPokemonInfo, localFavorites } from '@/utils';


interface Props {
  pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {

    console.log(pokemon)

  const [isInFavorites, setIsInFavorites] = useState( false );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id );
    setIsInFavorites(!isInFavorites);

    if( isInFavorites ) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }

    })
  };

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites( pokemon.id ))
  }, [pokemon.id])

  return (
    <Layout title={ pokemon.name }>
        <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
          <Grid xs={ 12 } sm={ 4 }>
            <Card isHoverable css={{ padding: '30px' }}>
              <Card.Body>
                <Card.Image 
                  src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.pmg' }
                  alt={ pokemon.name }
                  width="100%"
                  height={ 200 }
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={ 12 } sm={ 8 } >
            <Card>
              <Card.Header css={{  display: 'flex', justifyContent: 'space-between' }} >
                <Text h1 transform='capitalize'>
                  { pokemon.name }
                </Text>
                <Button
                  color='gradient'
                  ghost={ !isInFavorites }
                  onPress={ onToggleFavorite }
                >
                  { isInFavorites ? 'Quitar de Favoritos' : 'Guardar en Favoritos' }
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={ 30 }>
                  Sprites:
                </Text>
                <Container display='flex' direction='row'>
                  <Image 
                    src={ pokemon.sprites.front_default }
                    alt={ pokemon.name }
                    width={ 120 }
                    height={ 120 }
                  />
                  <Image 
                    src={ pokemon.sprites.back_default }
                    alt={ pokemon.name }
                    width={ 120 }
                    height={ 120 }
                  />
                  <Image 
                    src={ pokemon.sprites.front_shiny }
                    alt={ pokemon.name }
                    width={ 120 }
                    height={ 120 }
                  />
                  <Image 
                    src={ pokemon.sprites.back_shiny }
                    alt={ pokemon.name }
                    width={ 120 }
                    height={ 120 }
                  />
                </Container>
              </Card.Body>
            </Card>

          </Grid>

        </Grid.Container>
    </Layout>
  )
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
    const pokemonNames: string[] = data.results.map( pokemon => pokemon.name )

  return {
    paths: pokemonNames.map( name => ({
        params: { name }
    })),
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string };

  return {
    props: {
      pokemon:await getPokemonInfo( name )
    }
  }
};

export default PokemonByName;
