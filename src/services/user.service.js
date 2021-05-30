import axios from "axios";
import authHeader from "./auth-header";
import {API_URL, API_URL_COURSES} from "../constants"

// const API_URL = "http://localhost:8080/api/test/";

const getCourses = () => {

    return axios.get(
        API_URL_COURSES, { headers: authHeader()   }
    );
};

const getCourseDetails = (course_id) => {

    return axios.get(
        API_URL_COURSES, { headers: authHeader()   }
    );
};

// const getUserBoard = () => {
//     return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//     return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//     return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
    getCourses,
    // getUserBoard,
    // getModeratorBoard,
    // getAdminBoard,
};