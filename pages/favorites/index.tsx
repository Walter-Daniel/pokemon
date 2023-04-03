import { GetStaticProps, NextPage, GetStaticPaths  } from 'next';

import { Layout } from '@/components/layout';
import { pokeApi } from '../../api';
import { Pokemon } from '@/interface';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';


interface Props {
  pokemon: Pokemon;
}

const FavoritesPage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon)
  return (
    <Layout title='Favoritos'>
        <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
          <Text h1> Favoritos </Text>

        </Grid.Container>
    </Layout>
  )
};

export default FavoritesPage;
