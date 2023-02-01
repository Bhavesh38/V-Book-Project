import ACTIONS from './index'
import axios from 'axios'
import * as api from "../../api/auth.js"
//fetch data from db
//send the data to the DB so that it knows to signin the user
//log in the user ..
export const studentRegister = (formData) => async (dispatch) => {
    try {

        console.log(formData);
        const data = await api.studentRegisteration(formData);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get('/user/infor', {
        headers: { Authorization: token }
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}