import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mozayc</title>
        <meta name="description" content="Build your store with powerfull Mozayc tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mozayc_logo.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}
