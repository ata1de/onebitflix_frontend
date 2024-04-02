import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Form, Input } from 'reactstrap'
import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useRouter } from 'next/router'

// Medida para falar que tem um modal na pagina
Modal.setAppElement("#__next");

const HeaderAuth = () => {
    const router = useRouter()

    const handlerOutUser = () => {
      sessionStorage.clear()
      router.push('/')
    }
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
    
    const handleCloseModal = () => {
      setModalOpen(false);
    };
    return (
      <div>
          <Container className={styles.nav}>
              <Link href="/home">
                  <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
              </Link>
              <div className="d-flex align-items-center">
                  <Form>
                      <Input
                      name="search"
                      type="search"
                      placeholder="Pesquisar"
                      className={styles.input}
                      />
                  </Form>
                  <img src="homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImg}/>
                  <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>            
                </div>
                <Modal
                  isOpen={modalOpen}
                  onRequestClose={handleCloseModal}
                  shouldCloseOnEsc={true}
                  className={styles.modal}
                  overlayClassName={styles.overlayModal}
                >
                    <Link href='/profile' className="text-decoration-none">
                      <p className={styles.modalText}>Meus dados</p>
                    </Link>
                    <p className={styles.modalText} onClick={handlerOutUser}>Sair</p>
                </Modal>
        </Container>
      </div>
    )
}

export default HeaderAuth