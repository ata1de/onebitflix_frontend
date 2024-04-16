import HeaderAuth from '@/src/components/homeAuth/HeaderAuth'
import UserForm from '@/src/components/profile/user'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import styles from '../styles/profile.module.scss'
import userService from '@/src/services/userService'
import useSWR from 'swr'
import PasswordForm from '@/src/components/profile/password'
import PageSpinner from '@/src/components/common/spinner'
import { useRouter } from 'next/router'

const Profile = () => {
    const [form, setForm] = useState("userForm");
    
    const { data, error } = useSWR('/getUser', userService.getUser)

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
        return <PageSpinner />;}


    if (error) return error;
    if (!data) return <PageSpinner/>
  return (
    <div>
        <Head>
            <title>Onebitflix - Meus Dados</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <div className={styles.header}> 
	            <HeaderAuth />
            </div>
            <Container className='py-5'>
                <p className={styles.title}>Minha conta</p>
                <Row>
                    <Col>
                        <Button 
                        outline 
                        className={styles.renderFormBtn} 
                        onClick={() => {setForm('userForm')}}
                        style = {{color: form === 'userForm' ? '#ff0044' : 'white'}}
                        >DADOS PESSOAIS</Button>
                        <Button 
                        outline 
                        className={styles.renderFormBtn} 
                        onClick={() => {setForm('passwordForm')}}
                        style={{ color: form === "passwordForm" ? "#ff0044" : "white" }}
                        >SENHA</Button>
                    </Col>
                    <Col md>
                        {form === "userForm" ? <UserForm /> : <PasswordForm />}                    
                    </Col>
                </Row>
            </Container>
        </main>
    </div>

  )
}

export default Profile