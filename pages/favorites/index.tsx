import { NextPage } from 'next';

import { Layout } from '@/components/layout';

import { Pokemon } from '@/interface';
import { NoFavorite } from '@/components/iu';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import { FavoritePokemon } from '@/components/pokemon';

interface Props {
  pokemon: Pokemon;
}

const FavoritesPage: NextPage<Props> = ({ pokemon }) => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);
  
  useEffect(() => {

    setFavoritePokemon( localFavorites.pokemons() );
   
  }, [])
  

  return (
    <Layout title='Favoritos'>
        {
          favoritePokemon.length === 0 
            ? ( <NoFavorite /> )
            : ( <FavoritePokemon pokemons={favoritePokemon} /> )
            }
    </Layout>
  )
};

export default FavoritesPage;
