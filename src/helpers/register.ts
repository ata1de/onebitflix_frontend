import { FormEvent } from "react";
import authService from "../services/authService";
import { NextRouter, useRouter } from "next/router";



const registerFunction = async(event: FormEvent<HTMLFormElement>, router: NextRouter) => { 

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();
    const params = { firstName, lastName, phone, birth, email, password };

    if (password!==confirmPassword) {
      alert('A senha e a confirmação estão diferentes')
      return 
    }

    const {data, status} = await authService.register(params)

    if (status === 201){
        router.push("/login?registred=true");
    } else {
      alert(data.message);
    }
}

export default registerFunction