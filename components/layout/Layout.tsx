import { FunctionComponent, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../iu";

interface Props {
  title?: string;
}

const origin = ( typeof window === 'undefined') ? '' : window.location.origin; 

export const Layout: FunctionComponent <PropsWithChildren<Props>> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Walter Daniel Carrizo" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${title}` }/>
            <meta property="og:description" content={`Esta es la página sobre ${title}` } />
            <meta property="og:image" content={`${origin}/img/banner.png`}/>
        </Head>
        <Navbar />
        <main className='main-pokemon'>
            { children }
        </main>
    </>
  )
}
