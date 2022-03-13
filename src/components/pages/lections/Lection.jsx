import React, {useState} from 'react';
import './Lection.css'

const Lection = () => {
    return (
        <section id="lection">
            <div className="container">
                <div className="row">
                    <h2 className="lection-zag">Заголовок урока</h2>
                    <p className="lection-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet veritatis vero odit, delectus dolor quis! Libero modi numquam rerum placeat ex reprehenderit ratione blanditiis et provident nihil aspernatur, odio ipsam.</p>
                    <a href="https://yandex.ru/video/search?text=spongebob%201%20%D1%81%D0%B5%D1%80%D0%B8%D1%8F&where=all" className="lection-a">Вика, 36лет. В 30км от вас. Подробнее...</a>
                </div>
            </div>
        </section>
    );
};
export default Lection;