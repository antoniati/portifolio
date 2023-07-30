import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Programador Freelancer | Felipe Antoniati - Websites Modernos e Personalizados</title>
        <meta name="description" content="Programdor freelancer especializado em criar websites modernos e personalizados. Trabalho com clientes de diversos setores para fornecer soluções digitais de alta qualidade. Entre em contato e vamos transformar sua visão em realidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
