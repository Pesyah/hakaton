import React, { useState } from 'react';
import Input from '../atoms/Input';
import { addLection } from '../../actions/user';
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
                    <div className="new-couse-content-btn-bl">
                        <button className='new-couse-content-btn' onClick={() => dispatch(addLection(email, lec))}>Добавить</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;