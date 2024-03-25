import React from 'react'
import styles from './styles.module.scss'
import { Container, Button } from 'reactstrap'
import Link from 'next/link'

const HeaderNoAuth = () => {
  return (
    <div>
        <div className={styles.ctaSection}>
            <img src="/homeNoAuth/logoCta.png" alt="LogoCta" className={styles.imgCta} />
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/homeNoAuth/logoCta.png" alt="LogoCta" className={styles.imgCta} />
        </div>
        <Container className={styles.nav}>
            <img src='/logoOnebitflix.svg' alt="logoOnebitflix" className={styles.imgLogoNav}/>
            <div>
                <Link href='/login'>
                     <Button outline className={styles.btnNav}>Entrar</Button>
                </Link>
                <Link href='/register'>
                    <Button outline className={styles.btnNav} >Quero fazer parte</Button>
                </Link>
            </div>
        </Container>

    </div>

  )
}

export default HeaderNoAuth