import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "097c0e16-5799-473a-bca9-ec802ba216ad"
    }
})
export const userAPI = {
    getUsers: (page = 1, pageSize = 10) => {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    }
}
