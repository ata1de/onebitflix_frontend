import api from "./api";
import { CourseType } from "./courseService";

export type CategoryType = {
    id: number,
    name: string,
    position: number,
    courses?: CourseType[]
}

const categoriesService = {
    getCategories: async () => {
        const token = sessionStorage.getItem('onebitflix-token')

        const res = await api.get('/categories', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch((err) =>{
            console.log(err.response.data.message)

            return err.response
        })

        return res
    },

    getCourses: async (id: number) => {
        const token = sessionStorage.getItem('onebitflix-token')

        const res = await api.get(`/categories/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch((err) =>{
            console.log(err.response.data.message)

            return err.response
        })

        return res

    },
}

export default categoriesService