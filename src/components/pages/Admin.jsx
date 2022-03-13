import React, { useState } from 'react';
import Input from '../atoms/Input';
import { users, newLection } from '../../actions/user';
import { useDispatch } from 'react-redux';
import './Admin.css'

const Admin = () => {
    const [email, setEmail] = useState("")
    const [lec, setLec] = useState("")
    const dispatch = useDispatch()

    return (
        <section id="admin-panel">
            <div className="container">
                <div className='row'>
                    <h2 className='admin-panel-zag'>Добавить пользователю урок</h2>
                    <input value={email} onChange={(event)=> setEmail(event.target.value)} id='linkText' type="text" className="new-couse-content-inp" placeholder='Почта пользователя' />
                    <input value={lec} onChange={(event)=> setLec(event.target.value)} id='linkText' type="text" className="new-couse-content-inp" placeholder='Название лекции' />
                    {/* <button onClick={() => dispatch(newLection(h1, `<p>МНОГО КАКОГО-ТО ТЕКСТА</p>`, 'http://localhost:3000/'))}>ok</button> */}
                </div>
            </div>
        </section>
    );
};

export default Admin;