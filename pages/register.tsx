import HeaderGeneric from '@/src/components/common/headerGeneric'
import Head from 'next/head'
import React from 'react'



const Register = () => {
  return (
    <div>
        <Head>  
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
		</Head>
        <main>
            <HeaderGeneric logoUrl='/' btnContent='Quero fazer login' btnUrl='/login'/>
        </main>
    </div>
  )
}

export default Register