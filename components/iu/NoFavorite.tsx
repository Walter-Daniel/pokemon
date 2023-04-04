import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorite = () => {
  return (
    <Container
          css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignContent: 'center'
          }}
        >
          <Text h1>No hay favoritos</Text>
          <Image 
            src='https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-File.png'
            alt='Pikachu saludando'
            height={250}
          />
    </Container>
  )
}
