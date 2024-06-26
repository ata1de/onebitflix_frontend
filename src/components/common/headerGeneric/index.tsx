import React from 'react'
import styles from './styles.module.scss'
import { Button, Container } from 'reactstrap'
import Link from 'next/link'

interface props {
    logoUrl: string,
    btnUrl: string,
    btnContent: string,
  }
  
const HeaderGeneric = ({logoUrl, btnUrl, btnContent}: props) => {
  return (
    <div>
        <div className={styles.header}>
            <Container className={styles.headerContainer}>
                <Link href={logoUrl}>
                    <img src="/logoOnebitcode.svg" alt="logoRegister" className={styles.headerLogo} />
                </Link>
                <Link href={btnUrl}>
                    <Button outline color='light' className={styles.headerBtn}>{btnContent}</Button>
                </Link>
            </Container>
        </div>
    </div>
  )
}

export default HeaderGeneric