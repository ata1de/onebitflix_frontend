import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../user/styles.module.scss'

const PasswordForm = () => {
  return (
    <div>
        <Form className={styles.formPsw}>
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
                        className={styles.inputFlexPsw}
                    />
                </FormGroup>
            <Button className={styles.formBtn} outline>
                Salvar Alterações
            </Button>
            </div>
        </Form>
    </div>
  )
}

export default PasswordForm