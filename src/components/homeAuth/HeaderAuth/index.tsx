import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import { Container, Form, Input } from 'reactstrap'
import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import userService from '@/src/services/userService'

// Medida para falar que tem um modal na pagina
Modal.setAppElement("#__next");

const HeaderAuth = () => {
    const [initials, setInitials] = useState("");
    const [searchName, setSearchName] = useState('')

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

    
    // UseEffect para as iniciais no usuário
    useEffect(() => {
      userService.getUser().then((user) => {
        const firstNameInitial = user.firstName.slice(0, 1);
        const lastNameInitial = user.lastName.slice(0, 1);
        setInitials(firstNameInitial + lastNameInitial);
      });
    }, []);

    // Função para a barra de pesquisa
    const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      router.push(`/search?name=${searchName}`);
      setSearchName("");
    };

    const handlerSearchClick = () => {
      router.push(`/search?name=${searchName}`);
      setSearchName("");
    }

    return (
      <div>
          <Container className={styles.nav}>
              <Link href="/home">
                  <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
              </Link>
              <div className="d-flex align-items-center">
                <Form onSubmit={handleSearch}>
                    <Input
                    name="search"
                    type="search"
                    placeholder="Pesquisar"
                    className={styles.input}
                    value={searchName}
                    onChange={(event) => {
                      setSearchName(event.currentTarget.value.toLowerCase());
                    }}
                    />
                  </Form>
                  <img onClick={handlerSearchClick} src="/homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImg}/>
                  <p className={styles.userProfile} onClick={handleOpenModal}>{initials}</p>            
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