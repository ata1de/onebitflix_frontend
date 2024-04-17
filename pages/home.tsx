import Footer from '@/src/components/common/footer'
import PageSpinner from '@/src/components/common/spinner'
import FavoritesCategory from '@/src/components/homeAuth/FavoriteCategory'
import FeaturedCategory from '@/src/components/homeAuth/FeaturedCategory'
import FeaturedSection from '@/src/components/homeAuth/FeaturedSection'
import HeaderAuth from '@/src/components/homeAuth/HeaderAuth'
import ListCategories from '@/src/components/homeAuth/ListCategories'
import NewestCategory from '@/src/components/homeAuth/NewestCategory'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }
  return (
    <div>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />    
        </Head>
        <main>
            <FeaturedSection/>
            <FavoritesCategory/>
            <NewestCategory/>
            {/* <FeaturedCategory/> */}
            <ListCategories/>
            <Footer/>
        </main>
    </div>
  )
}

export default Home