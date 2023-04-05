import { FunctionComponent, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../iu";

interface Props {
  title?: string;
}

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
            <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
        </Head>
        <Navbar />
        <main className='main-pokemon'>
            { children }
        </main>
    </>
  )
}
