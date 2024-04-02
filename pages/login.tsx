import React, { useEffect, useState } from 'react'
import styles from '../styles/registerLogin.module.scss'
import Head from 'next/head'
import HeaderGeneric from '@/src/components/common/headerGeneric'
import { Container } from 'reactstrap'
import FormLogin from '@/src/components/login/formLogin'
import Footer from '@/src/components/common/footer'
import ToastComponent from '@/src/components/common/toast'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const [toastColor, setToastColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() =>{
        if (sessionStorage.getItem('onebitflix-token')) {
            router.push('/home')
        }
    }, [])
    
    useEffect(() => {
        const registredSucess = router.query.registred;

        if (registredSucess == 'true') {
           	setToastColor("bg-success");
            setToastIsOpen(true);
                setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage("Cadastro feito com sucesso!");}
        }, [router.query])

    return (
        <div>
            <Head>
                <title>Onebitflix - Login</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />    
            </Head>
            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Quero fazer parte"/>
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
                    <FormLogin setToastIsOpen={setToastIsOpen} setToastMessage={setToastMessage} setToastColor={setToastColor} router={router}/>
                </Container>
                <Footer/>
                <ToastComponent isOpen={toastIsOpen} message={toastMessage} color={toastColor}/>
            </main>
        </div>
  )
}

export default Login