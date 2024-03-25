import React from 'react'
import styles from './styles.module.scss'
import { Container, Button } from 'reactstrap'

const HeaderNoAuth = () => {
  return (
    <div>
        <div className={styles.ctaSection}>
            <img src="/homeNoAuth/logoCta.png" alt="LogoCta" className={styles.imgCta} />
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/homeNoAuth/logoCta.png" alt="LogoCta" className={styles.imgCta} />
        </div>
        <Container>
            <img src='/logoOnebitflix.svg' alt="logoOnebitflix" />
            <div>
                <Button outline color='primary'>Entrar</Button>
            </div>
        </Container>

    </div>

  )
}

export default HeaderNoAuth