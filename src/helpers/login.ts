import { FormEvent } from "react";
import authService from "../services/authService";
import { NextRouter } from "next/router";



const LoginFunction = async(event: FormEvent<HTMLFormElement>, router: NextRouter, setToastIsOpen:  React.Dispatch<React.SetStateAction<boolean>>, setToastColor: React.Dispatch<React.SetStateAction<string>>, setToastMessage: React.Dispatch<React.SetStateAction<string>>) => {

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);

    if (status === 200) {
        router.push("/home");
    } else {
        setToastColor("bg-danger");
        setToastIsOpen(true);
        setTimeout(() => {
            setToastIsOpen(false);
        }, 1000 * 3);
        setToastMessage("Email ou senha incorretos!");
        }
}

export default LoginFunction