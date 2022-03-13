import React from 'react';
import './NewCouse.css'

const NewCouse = () => {
    return (
        <section id="new-couse">
            <div className="container">
                <div className="row">
                    <form className="new-couse-content" method='POST' action='#'>
                        <h2 className="new-couse-content-zag">Создать новый урок</h2>
                        <input id='lessonName' type="text" className="new-couse-content-inp" placeholder='Название урока' autofocus='True'/>
                        <textarea id='lessonText' className="new-couse-content-inp new-couse-content-textarea" col='1000' placeholder='Текст урока'></textarea>
                        <input id='linkText' type="text" className="new-couse-content-inp" placeholder='Ссылка на Google-форму' autofocus='True'/>
                        <div className="new-couse-content-btn-bl">
                            <input type="submit" value='Создать' className="new-couse-content-btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewCouse;