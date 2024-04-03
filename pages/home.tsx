import FavoritesCategory from '@/src/components/homeAuth/FavoriteCategory'
import FeaturedSection from '@/src/components/homeAuth/FeaturedCategory'
import HeaderAuth from '@/src/components/homeAuth/HeaderAuth'
import NewestCategory from '@/src/components/homeAuth/NewestCategory'
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
            <FeaturedSection/>
            <NewestCategory/>
            <FavoritesCategory/>
        </main>
    </div>
  )
}

export default Home