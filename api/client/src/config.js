import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://kdn-movie-app.herokuapp.com/"
})