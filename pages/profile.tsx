import HeaderAuth from '@/src/components/homeAuth/HeaderAuth'
import UserForm from '@/src/components/profile/user'
import Head from 'next/head'
import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import styles from '../styles/profile.module.scss'
import userService from '@/src/services/userService'
import useSWR from 'swr'

const Profile = () => {
    const { data, error } = useSWR('/getUser', userService.getUser)


    if (error) return error;
    if (!data) return <p>Loading...</p>;
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
                        <Button outline className={styles.renderFormBtn}>DADOS PESSOAIS</Button>
                        <Button outline className={styles.renderFormBtn}>SENHA</Button>
                    </Col>
                    <Col md>
                        <UserForm />                    
                    </Col>
                </Row>
            </Container>
        </main>
    </div>

  )
}

export default Profile