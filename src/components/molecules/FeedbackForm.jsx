import React from 'react';
import MainCarousel from '../organisms/MainCarousel';

const FeedBackForm = (props) => {
    return (
        <form action="#" method='POST' className="feedback-form">
            <input placeholder='ФИО' id="feedback-form-name" type="text" name="name" className="feedback-form-inp" />
            <input placeholder='Телефон' id="feedback-form-phone" type="phone" name="phone" className="feedback-form-inp" />
            <input placeholder='Почта' id="feedback-form-mail" type="mail" name="email" className="feedback-form-inp" />
            <input placeholder='Текст сообщения' id="feedback-form-msg" type="text" name="message" className="feedback-form-inp" />
            <input value='Отправить' id='feedback-form-btn' type="submit" className="feedback-form-inp" />
        </form>
    );
};

export default FeedBackForm;
