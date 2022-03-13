import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export const registration = async (email, password, username, surname, otchestvo, phoneNumber) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password,
            username,
            surname,
            otchestvo,
            phoneNumber
        })
        console.log(response)
        // alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`, 
                                            {headers:{Authorization:`bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.clear()
        }
    }

}

export const user = (email) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/user`, {
                email
            })
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}

export const newLection = (h1, main, test) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/NewLection`, {
                h1,
                main,
                test
            })
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}

export const addLection = (email, lection) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/addLection`, {
                email,
                lection
            })
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}
