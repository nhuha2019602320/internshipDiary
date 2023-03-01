import axios from 'axios';
import { loginStart, loginSuccess, loginFailed, registerStart, registerFailed, registerSuccess } from './authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/login`, user);
        console.log("user ne hihi ", user);
        dispatch(loginSuccess(res.data));
        console.log("userLogin", res.data);
        if(res.data.admin === true)
            navigate("/admin")
        else
            navigate("/")
            
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const registerAccout = async(user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/register`, user);
        dispatch(registerSuccess(res.data));
        alert("Register Successfully");
        navigate("/login")
        console.log("you are registed");
    } catch (error) {
        dispatch(registerFailed())
    }
}

// export const getAllUsers = async (users) => {
//     try
// }