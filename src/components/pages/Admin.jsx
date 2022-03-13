import React, { useState } from 'react';
import Input from '../atoms/Input';
import { users } from '../../actions/user';
import { useDispatch } from 'react-redux';

const Admin = () => {
    const [email, setInput] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='beleberda'>
            <p>Поиск пользователей</p>
            <Input value={email} setValue={setInput} type="text" placeholder="Введите почту нужного пользователя..."/>
            <button onClick={() => dispatch(users(email))}>ok</button>
        </div>
    );
};

export default Admin;