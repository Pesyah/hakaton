import React, {useState} from 'react';
import Input from '../atoms/Input';
import {registration} from "../../actions/user";
import './Registration.css'

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='reg-shadow'>
            <div className="reg">
                <h2 className="reg-zag">Регистрация</h2>
                <div className="reg-content">
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
                    <div className="reg-btn-block">
                        <button className="reg-btn" onClick={() => registration(email, password)}>Зарегестрироваться</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;