import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const Navbar = () => {

   const { theme } = useTheme();

  return (
    <div className='navbar-pokemon' style={{
        backgroundColor: theme?.colors.gray100.value
    }}>
      
      <Link href='/'>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt='Icono de la aplicación'
          width={70}
          height={70}
        />
        <Text h2 color='white'>P</Text>
        <Text h3 color='white'>okémon</Text>
      </Link>
      
      <Spacer css={{ flex: 1 }}/>
      <Link href='/favorites'>
          <Text>Favortitos</Text>
      </Link>
      </div>
  )
}
