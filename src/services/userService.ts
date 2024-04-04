import api from "./api"

export type UserType = {
    id: number
    firstName: string
    lastName: string
    phone: string
    birth: Date
    email: string
    password: string
    role: 'admin' | 'user'
}

const userService = {
    getUser: async() => {
        const token = sessionStorage.getItem('onebitflix-token')

        const res = await api.get('/users/current', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch((error) => {
            console.log(error)
            return error.response
        })

        return res
    }
}

export default userService