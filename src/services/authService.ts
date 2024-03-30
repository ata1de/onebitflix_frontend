import api from "./api";

interface RegisterParams {
  firstName: string;
  lastName: string;
  phone: string;
  birth: string;
  email: string;
  password: string;
}

const authService = {
    register: async(params: RegisterParams) => {
        const res = await api.post('/auth/register', params).catch((err) => {
            if (err.response.status = 400) {
                console.log(err)
                return err.response
            }

            console.log(err)
            return err
        })

        return res
    }
}

export default authService