import React, { useState } from 'react';
import Input from '../atoms/Input';
import { addLection } from '../../actions/user';
import { useDispatch } from 'react-redux';

const Admin = () => {
    const [email, setEmail] = useState("")
    const [lec, setLec] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='beleberda'>
            <p>Добавить пользователю урок</p>
            <input value={email} onChange={(event)=> setEmail(event.target.value)} id='linkText' type="text" className="new-couse-content-inp" placeholder='Почта пользователя' />
            <input value={lec} onChange={(event)=> setLec(event.target.value)} id='linkText' type="text" className="new-couse-content-inp" placeholder='Название лекции' />
            <button onClick={() => dispatch(addLection(email, lec))}>ok</button>
        </div>
    );
};

export default Admin;