import { FC } from "react";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokemonId: number;
}


export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

    const router = useRouter();

 


    const onFavoriteClick = () => {
        router.push(`/pokemon/${ pokemonId }`);
    }

  return (
    <>
        <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavoriteClick}>
            <Card.Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
            height={ 140 }
            />
        </Card>
    </>
  )
}
