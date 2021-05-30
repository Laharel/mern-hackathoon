import axios from "axios";
import {API_URL_LOGIN, API_URL_REFRESH, API_URL_REGISTER} from '../constants'
// const API_URL = "http://localhost:8080/api/auth/";

// need first_name and last_name
const register = (first_name, last_name, email, username, password) => {
    return axios.post(API_URL_REGISTER, {
        username,
        email,
        password,
        first_name,
        last_name,
    });
};

// email instead of username
const login = (email, password) => {
    return axios
        .post(API_URL_LOGIN, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.access) {
            localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};