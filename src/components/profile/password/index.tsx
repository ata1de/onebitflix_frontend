import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../user/styles.module.scss'
import userService from '@/src/services/userService';
import ToastComponent from '../../common/toast';

const PasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

      // Toat componente
    const [color, setColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        userService.getUser().then((password) => {
            setCurrentPassword(password.password);
            setNewPassword(password.password);
      });
      
    }, []);

    const handlerPassword = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newPassword)
        console.log(confirmPassword)
        console.log(currentPassword)


        if (newPassword !== confirmPassword) {
            setToastIsOpen(true);
            setErrorMessage("Senha e confirmação de senha diferentes!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
        
          return;
        }
      
          if (currentPassword === newPassword) {
            setToastIsOpen(true);
            setErrorMessage("Não coloque a nova senha igual a senha antiga!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
      
          return;
        }
      

        
        const res = await userService.passwordUpdate({
            currentPassword,
            newPassword,
        });

        if (res === 204) {
            setToastIsOpen(true);
            setErrorMessage("Senha alterada com sucesso!");
            setColor("bg-success");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
      
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }

        if (res === 400) {
            setToastIsOpen(true);
            setErrorMessage("Senha atual incorreta!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
        }
    }

  return (
    <div>
        <Form className={styles.formPsw} onSubmit={handlerPassword}>
            <div className={styles.inputNormalDiv}>
                <FormGroup>
                    <Label className={styles.label} for="currentPassword">
                        SENHA ATUAL
                    </Label>
                    <Input
                    name="currentPassword"
                    type="password"
                    id="currentPassword"
                    placeholder="******"
                    required
                    maxLength={12}
                    value={currentPassword}
                    onChange={(event) => {setCurrentPassword(event.currentTarget.value)}}
                    className={styles.input}
                    />
                </FormGroup>
            </div>
            <div className={styles.inputFlexDivPsw}>
                <FormGroup>
                    <Label className={styles.label} for="newPassword">
                        NOVA SENHA
                    </Label>
                    <Input
                    name="newPassword"
                    type="password"
                    id="newPassword"
                    placeholder="******"
                    required
                    value={newPassword}
                    onChange={(event) => {setNewPassword(event.currentTarget.value)}}
                    className={styles.inputFlexPsw}
                    />
                </FormGroup>
                <FormGroup>
                    <Label className={styles.label} for="confirmNewPassword">
                        CONFIRMAR NOVA SENHA
                    </Label>
                    <Input
                        name="confirmNewPassword"
                        type="password"
                        id="confirmNewPassword"
                        placeholder="******"
                        required
                        value={confirmPassword}
                        onChange={(event) => {setConfirmPassword(event.currentTarget.value)}}
                        className={styles.inputFlexPsw}
                    />
                </FormGroup>
            <Button type="submit" className={styles.formBtn} outline>
                Salvar Alterações
            </Button>
            </div>
        </Form>
        <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage}/>
    </div>
  )
}

export default PasswordForm