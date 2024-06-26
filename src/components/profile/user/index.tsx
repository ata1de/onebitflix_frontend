import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from 'reactstrap'
import styles from './styles.module.scss'
import userService, { UserType } from '@/src/services/userService'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import ToastComponent from '../../common/toast'
import { useRouter } from 'next/router'



const UserForm = () => {
  const router = useRouter()

  // Toat componente
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // PUT/user/current
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [ changedEmail, setChangeEmail] = useState('')
  const [created_at, setCreated_at] = useState('')

  // contruir a data e o mês
  const date = new Date(created_at)
  const month = date.toLocaleDateString("default", { month: "long" });

  useEffect(() => {
    userService.getUser().then((user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setChangeEmail(user.email);
      setCreated_at(user.createdAt);
    });
  }, []);

  const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const res = await userService.userUpdate({
      firstName,
      lastName,
      phone,
      email,
      created_at,
    });
  
    if (res === 200) {
      setToastIsOpen(true);
      setErrorMessage("Informações alteradas com sucesso!");
      setColor("bg-success");
      setTimeout(() => setToastIsOpen(false), 1000 * 3);
      if (email !== changedEmail) {
        sessionStorage.clear();
        router.push('/')
      }
    } else {
      setToastIsOpen(true);
      setErrorMessage("Você não pode mudar para esse email!");
      setColor("bg-danger");
      setTimeout(() => setToastIsOpen(false), 1000 * 3);
    }
  };

  return (
    <div className={styles.form}>
        <Form>
            <div className={styles.formName}>
                <p className={styles.nameAbbreviation}>{firstName.slice(0, 1)}{lastName.slice(0, 1)}</p>
                <p className={styles.userName}>{`${firstName} ${lastName}`}</p>
            </div>
            <div className={styles.memberTime}>
                <img src="/profile/iconUserAccount.svg" alt="iconProfile" className={styles.memberTimeImg}/>
                <p className={styles.memberTimeText}>Membro desde <br /> {`${date.getDate()} de ${month} de ${date.getFullYear()}`}</p>
            </div>
        </Form>
        <hr />
        <Form onSubmit={handleUserUpdate}>
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
                        value={firstName}
                        onChange={(event) => { setFirstName(event.target.value) }}
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
                    value={lastName}
                    onChange={(event) => { setLastName(event.target.value) }}
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
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
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
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    />
                </FormGroup>

                <Button className={styles.formBtn} outline>
                    Salvar Alterações
                </Button>
            </div>
          </div>
        </Form>
        <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage}/>
    </div>
  )
}

export default UserForm