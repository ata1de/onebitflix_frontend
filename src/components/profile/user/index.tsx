import React from 'react'
import { Form } from 'reactstrap'
import styles from './styles.module.scss'
import FormChange from '../formChange'
import { UserType } from '@/src/services/userService'

interface props {
  user: UserType
}

const UserFrom = ({ user }: props) => {
  const name = user.firstName
  const lastName = user.lastName 
  const abreviation = name[0] + lastName[0]

  return (
    <div className={styles.form}>
        <Form>
            <div className={styles.formName}>
                <p className={styles.nameAbbreviation}>{abreviation}</p>
                <p className={styles.userName}>{`${user.firstName} ${user.lastName}`}</p>
            </div>
            <div className={styles.memberTime}>
                <img src="/profile/iconUserAccount.svg" alt="iconProfile" className={styles.memberTimeImg}/>
                <p className={styles.memberTimeText}>Membro desde <br /> 20 de Abril de 2020</p>
            </div>
        </Form>
        <hr />
        <FormChange/>
    </div>
  )
}

export default UserFrom