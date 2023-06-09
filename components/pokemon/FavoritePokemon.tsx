import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
  pokemons: number[]
}

export const FavoritePokemon: FC<Props> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <>
        <Grid.Container gap={2} direction='row' justify='flex-start'>
          {
            pokemons.map( id => (

              <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <FavoriteCardPokemon pokemonId={id}/>
              </Grid>
            ) )
          }
        </Grid.Container>
    
    </>
  )
}
