import React, { FormEvent } from 'react'
import { Button , Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../../styles/registerLogin.module.scss'
import registerFunction from '@/src/helpers/register';
import { useRouter } from 'next/router';

interface FormRegisterProps {
    setToastIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

const FormRegister: React.FC<FormRegisterProps> = ({
    setToastIsOpen,
    setToastMessage,
}) => {
    const router = useRouter();

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        registerFunction(event, router, setToastIsOpen, setToastMessage);
        
    };

  return (
    <div>
        <Form className={styles.form} onSubmit={handleRegister}>
            <p className="text-center">
                <strong>Faça sua conta!</strong>
            </p>
            <FormGroup>
                <Label for="firstName" className={styles.label}>
                    NOME
                </Label>
                <Input
                id="firstName"
            name="firstName"
            type="text"
            placeholder="Qual o seu nome?"
            required
            maxLength={20}
            className={styles.inputName}
            />
            </FormGroup>
            <FormGroup>
            <Label for="lastName" className={styles.label}>
                SOBRENOME
            </Label>
            <Input
                id="lastName"
            name="lastName"
            type="text"
            placeholder="Qual o seu sobrenome?"
            required
            maxLength={20}
            className={styles.inputName}
            />
            </FormGroup>
            <FormGroup>
                <Label for="phone" className={styles.label}>
                WHATSAPP / TELEGRAM
            </Label>
                <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                data-mask='[-]+55 (00) 00000-0000'
                required
                className={styles.input}
            />
            </FormGroup>
            <FormGroup>
                <Label for="email" className={styles.label}>
                E-MAIL
            </Label>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite o seu email"
                required
                className={styles.input}
            />
            </FormGroup>
            <FormGroup>
                <Label for="birth" className={styles.label}>
                DATA DE NASCIMENTO
            </Label>
            <Input
                id="birth"
                name="birth"
                type="date"
                min="1930-01-01"
                max="2020-12-31"
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
                placeholder="Digite a sua senha (Min: 6 | Max: 20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
            />
            </FormGroup>
            <FormGroup>
                <Label for="confirmPassword" className={styles.label}>
                CONFIRME SUA SENHA
            </Label>
            <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
            />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
                CADASTRAR
            </Button>
        </Form>
    </div>
  )
}



export default FormRegister