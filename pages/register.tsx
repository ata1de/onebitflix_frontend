import HeaderGeneric from '@/src/components/common/headerGeneric'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/registerLogin.module.scss'
import FormRegister from '@/src/components/register/formRegister'
import { Container } from 'reactstrap'
import Footer from '@/src/components/common/footer'
import ToastComponent from '@/src/components/common/toast'


const Register = () => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <div>
        <Head>  
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            <script src="https://jsuites.net/v4/jsuites.js"></script>
        </Head>
        <main className={styles.main}>
          <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login"/>
          <Container className="py-5">
            <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
              <FormRegister setToastIsOpen={setToastIsOpen} setToastMessage={setToastMessage} />
          </Container>
          <Footer/>
          <ToastComponent color='bg-danger' isOpen={toastIsOpen} message={toastMessage}/>
      </main>
    </div>
  )
}

export default Register