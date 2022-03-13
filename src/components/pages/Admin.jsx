import React, { useState } from 'react';
import Input from '../atoms/Input';
import { users, newLection } from '../../actions/user';
import { useDispatch } from 'react-redux';

const Admin = () => {
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='beleberda'>
            <p>Добавить пользователю урок</p>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите почту пользователя..."/>
            {/* <Input value={1} setValue={seth1} type="text" placeholder="Введите название урока..."/> */}
            {/* <button onClick={() => dispatch(newLection(h1, `<p>МНОГО КАКОГО-ТО ТЕКСТА</p>`, 'http://localhost:3000/'))}>ok</button> */}
        </div>
    );
};

export default Admin;