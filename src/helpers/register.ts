import { FormEvent } from "react";
import authService from "../services/authService";
import { NextRouter } from "next/router";



const registerFunction = async(event: FormEvent<HTMLFormElement>, router: NextRouter, setToastIsOpen:  React.Dispatch<React.SetStateAction<boolean>>, setToastMessage: React.Dispatch<React.SetStateAction<string>>) => {

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();
    const params = { firstName, lastName, phone, birth, email, password };

    if (password != confirmPassword) {
      setToastIsOpen(true);
      setTimeout(() => {
      setToastIsOpen(false);
    }, 1000 * 3);
      setToastMessage("Senha e confirmação diferentes.");
          
      return;
    }

    const {data, status} = await authService.register(params)

    if (status === 201) {
      router.push("/login?registred=true");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
      setToastIsOpen(false);
    }, 1000 * 3);
      setToastMessage(data.message);
    }
}

export default registerFunction