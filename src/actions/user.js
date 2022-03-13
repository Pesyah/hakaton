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
        alert(response.data.message)
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
            localStorage.setItem('userLevel', response.data.userLevel)
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
            localStorage.setItem('openTests', JSON.stringify(response.data.openTests))
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}

export const newLection = (h2, main, test) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/NewLection`, {
                h2,
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

export const lections = (openTests) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/lections`, {
                openTests
            })
            localStorage.setItem('openLec', JSON.stringify(response.data.openLec))
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}