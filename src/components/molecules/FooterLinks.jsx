import React from 'react';
import FooterLink from '../atoms/FooterLink';

const FooterLinks = () => {
    return (
        <div className="col-xs-12 footer-links">
            <ul className="col-xs-6 border-right">
                <h2 className="footer-links-zag">Опции</h2><br/>
                <FooterLink href='#' text='Пользовательское соглашение'/><br/>
                <FooterLink href='#' text='Политика конфиденциальности'/><br/>
                <FooterLink href='#' text='Инвесторы'/><br/>
                <FooterLink href='#' text='Заявки'/><br/>
                <FooterLink href='#' text='Маркетинг'/><br/>
            </ul>
            <ul className="col-xs-6 footer-links-right-col">
                <h2 className="footer-links-zag">Связь</h2><br/>
                <FooterLink href='#' text='Партнерство'/><br/>
                <FooterLink href='#' text='Помощь'/><br/>
                <FooterLink href='#' text='Отзывы'/><br/>
                <FooterLink href='#' text='Соц. сети'/><br/>
                <FooterLink href='#' text='Сообщить об ошибке'/><br/>
            </ul>
        </div>
    );
};

export default FooterLinks;
