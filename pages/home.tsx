import FavoritesCategory from '@/src/components/homeAuth/FavoriteCategory'
import FeaturedCategory from '@/src/components/homeAuth/FeaturedCategory'
import FeaturedSection from '@/src/components/homeAuth/FeaturedSection'
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
            <FeaturedCategory/>
        </main>
    </div>
  )
}

export default Home