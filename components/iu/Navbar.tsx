import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'

export const Navbar = () => {

   const { theme } = useTheme();

  return (
    <div className='navbar-pokemon' style={{
        backgroundColor: theme?.colors.gray100.value
    }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt='Icono de la aplicación'
        width={70}
        height={70}
      />
      <Text color='white' h2>P</Text>
      <Text h3>okémon</Text>
      <Spacer css={{ flex: 1 }}/>
      <Text>Favortitos</Text>
      </div>
  )
}
