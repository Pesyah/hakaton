import React, {useState} from 'react';
import Input from '../atoms/Input';
import {registration} from "../../actions/user";
import './Registration.css'
import { Link } from 'react-router-dom';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setsurname] = useState("")
    const [otchestvo, setotchestvo] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")

    return (
        <div className='reg-shadow'>
            <div className="reg">
                <h2 className="reg-zag">Регистрация</h2>
                <div className="reg-content">
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
                    <br />
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
                    <br />
                    <Input value={name} setValue={setName} type="text" placeholder="Введите Имя..."/>
                    <br />
                    <Input value={surname} setValue={setsurname} type="text" placeholder="Введите Фамилию..."/>
                    <br />
                    <Input value={otchestvo} setValue={setotchestvo} type="text" placeholder="Введите Отчество..."/>
                    <br />
                    <Input value={phoneNumber} setValue={setphoneNumber} type="text" placeholder="Введите телефон..."/>
                    <div className="reg-btn-block">
                        <button className="reg-btn" onClick={() => registration(email, password, name, surname, otchestvo, phoneNumber)}>Зарегестрироваться</button>
                    </div>
                    <Link to="/login">У меня уже есть аккаунт</Link>
                </div>
            </div>
        </div>
    )
};
export default Registration;