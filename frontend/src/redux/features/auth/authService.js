import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const API_URL = `${BACKEND_URL}/api/v1/users/`;

console.log(API_URL)

// Register user
// this will send the userdata to the backend as part of the req.body
const  register = async (userData) => {
    const response = await axios.post(API_URL + "register" , userData, {
        withCredentials: true,
    })
    return response.data
}
// login user
const  login = async (userData) => {
    const response = await axios.post(API_URL + "login" , userData)
    return response.data
}

// logout user
const  logout = async (userData) => {
    const response = await axios.get(API_URL + "logout")
    return response.data.message
}

const authService = {
    register,
    login,
    logout,
}

export default authService