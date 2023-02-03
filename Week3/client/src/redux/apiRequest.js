import axios from 'axios';
import { loginStart, loginSuccess, loginFailed, registerStart, registerFailed, registerSuccess } from './authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/login`, user);
        console.log("user ne hihi ", user);
        dispatch(loginSuccess(res.data));
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const registerAccout = async(user, dispatch) => {
    dispatch(registerStart());
    try {
        const res = await axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/register`, user);
        dispatch(registerSuccess(res.data));
        console.log("you are registed");
    } catch (error) {
        dispatch(registerFailed())
    }
}

// export const getAllUsers = async (users) => {
//     try
// }