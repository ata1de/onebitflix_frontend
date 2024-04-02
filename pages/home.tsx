import HeaderAuth from '@/src/components/homeAuth/HeaderAuth'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />    
        </Head>
        <main>
            <HeaderAuth/>
        </main>
    </div>
  )
}

export default Home