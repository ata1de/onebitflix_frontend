import React, { FormEvent } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../../styles/registerLogin.module.scss'
import { NextRouter } from 'next/router'
import LoginFunction from '@/src/helpers/login'

interface FormLoginProps {
    setToastIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setToastMessage: React.Dispatch<React.SetStateAction<string>>;
    setToastColor: React.Dispatch<React.SetStateAction<string>>;
    router: NextRouter
}

const FormLogin: React.FC<FormLoginProps> = ({
    setToastIsOpen,
    setToastMessage,
    setToastColor,
    router,
}) => {
    
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        LoginFunction(event, router, setToastIsOpen, setToastColor, setToastMessage)
    }

  return (
    <div>
    <Form className={styles.form} onSubmit={handleLogin}>
	    <p className="text-center">
	        <strong>Faça seu login abaixo!</strong>
        </p>
        <FormGroup>
            <Label for="email" className={styles.label}>
            E-MAIL
            </Label>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Qual o seu email?"
                required
                className={styles.input}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password" className={styles.label}>
            SENHA
            </Label>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Qual a sua senha?"
                required
                className={styles.input}
            />
        </FormGroup>
        <Button outline className={styles.formBtn}>
                ENTRAR
        </Button>
	</Form>
    </div>
  )
}

export default FormLogin