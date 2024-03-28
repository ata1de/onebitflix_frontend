import React from 'react'
import styles from './styles.module.scss'
import { Container } from 'reactstrap'

const Footer = () => {
  return (
    <div>
        <Container className={styles.footer}>
            <img src='/logoOnebitcode.svg' alt='logoFooter' className={styles.footerLogo}/>
            <a href="http://onebitcode.com" target={'_blank'} className={styles.footerLink}>ONEBITCODE.COM</a>
        </Container>
    </div>
  )
}

export default Footer