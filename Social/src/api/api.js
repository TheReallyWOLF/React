import axios from "axios";

const instance = axios.create({
    withCredentials: true, // разрешить привязку cookie с запросом
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "097c0e16-5799-473a-bca9-ec802ba216ad"
    }
})
// user API
export const userAPI = {
    getUsers: (page = 1, pageSize = 10) => {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`);
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`);
    }
};
// user profile API
export const profileAPI = {
    getProfile: (userId) => {
        return  instance.get(`profile/${userId}`);
    },
    getUserStatus: (userId) => {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status});
    }
}

export const headerAPI = {
    getMe: () => {
        return instance.get(`auth/me`);
    },
    login: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout: () => {
        return instance.delete(`auth/login`);
    }
}
