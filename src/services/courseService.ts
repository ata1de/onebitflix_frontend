import api from "./api";

export type EpisodeType = {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    videoUrl: string;
    secondsLong: number;
};
export type CourseType = {
    id: number;
    name: string;
    thumbnailUrl: string;
    synopsis: string;
    episodes?: EpisodeType[]
};

const courseService = {
    getNewestCourses: async() => {
        const res = await api.get('/courses/newest').catch((err) => {
            console.log(err)

            return err.response
        })

        return res
    },

    getFeaturedCourses: async() => {
        const token = sessionStorage.getItem('onebitflix-token');

        const res = await api.get('/courses/featured', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch((err) =>{
            console.log(err.response.data.message)

            return err.response
        })

        return res

    },

    postAddFavorite: async (courseId: number | string) => {
        const token = sessionStorage.getItem('onebitflix-token');

        const res = await api.post('/favorites', {courseId} , {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch((err) =>{
            return err.response

        })

        return res
    },

    deleteFavorite: async (courseId: number | string) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.delete(`/favorites/${courseId}`, {
            headers:
                {
                    Authorization: `Bearer ${token}`
                },

            // data: {courseId}
        })
            .catch((error) => {
                console.log(error.response.data.message);
                return error.response;
            });
        
            return res;
    },

    getFavoritesCourses: async () => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.get("/favorites", {
            headers:
                {
                    Authorization: `Bearer ${token}`
                },
        }).catch((error) => {
                console.log(error.response.data.message);
                return error.response;
        });
        
        return res;
    },

    postLike: async (courseId: number | string) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.post(`/likes`, {courseId},{
            headers:
                {
                    Authorization: `Bearer ${token}`
                },
        }).catch((error) => {
                console.log(error.response.data.message);
                return error.response;
        });
        
        return res;
    },

    deleteLike: async (courseId: number | string) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.delete(`/likes/${courseId}`, {
            headers:
                {
                    Authorization: `Bearer ${token}`
                },
        }).catch((error) => {
                console.log(error.response.data.message);
                return error.response;
        });
        
        return res;
    },

    getSearch: async (name: string) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.get(`/courses/search?name=${name}`, {
            headers:
                {
                    Authorization: `Bearer ${token}`
                },
        }).catch((error) => {
                console.log(error.response.data.message);
                return error.response;
        });
        
        return res;
    },

    getEpisodes: async (id: string | number) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.get(`/courses/${id}`, {
            headers:
                {
                    Authorization: `Bearer ${token}`
                },
        }).catch((error) => {
                console.log(error.response.data.message);
                return error.response;
        });
        
        return res;
    },

}

export default courseService