import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Input from '../atoms/Input';
import './Registration.css'
import { login } from '../../actions/user';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='reg-shadow'>
            <div className="reg">
                <h2 className="reg-zag">Авторизация</h2>
                <div className="reg-content">
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
                    <div className="reg-btn-block">
                        <button className="reg-btn" onClick={() => dispatch(login(email, password))}><Link to="/">Войти</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;