import React from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import styles from '../user/styles.module.scss'

const FormChange = () => {
  return (
    <div className={styles.inputs}>
        <div className={styles.inputFlexDiv}>
            <FormGroup>
                    <Label className={styles.label} for="firstName">
                        NOME
                    </Label>
                    <Input
                    name="firstName"
                    type="text"
                    id="firstName"
                    placeholder="Qual o seu primeiro nome?"
                    required
                    maxLength={20}
                    className={styles.inputFlex}
                    value={"Name"}
                    />
            </FormGroup>
            <FormGroup>
                    <Label className={styles.label} for="lastName">
                    SOBRENOME
                </Label>
                <Input
                name="lastName"
                type="text"
                id="lastName"
                placeholder="Qual o seu último nome?"
                required
                maxLength={20}
                className={styles.inputFlex}
                value={"Test"}
                />
            </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
            <FormGroup>
                <Label className={styles.label} for="phone">
                    WHATSAPP / TELEGRAM
                </Label>
                <Input
                name="phone"
                type="tel"
                id="phone"
                placeholder="(xx) 9xxxx-xxxx"
                required
                className={styles.input}
                value={"+55 (21) 99999-9999"}
                />
            </FormGroup>
            <FormGroup>
                <Label className={styles.label} for="email">
                    E-MAIL
                </Label>
                <Input
                name="email"
                type="email"
                id="email"
                placeholder="Coloque o seu email"
                required
                className={styles.input}
                value={"testeemail@gmail.com"}
                />
            </FormGroup>

            <Button className={styles.formBtn} outline>
                Salvar Alterações
            </Button>
        </div>
    </div>
  )
}

export default FormChange