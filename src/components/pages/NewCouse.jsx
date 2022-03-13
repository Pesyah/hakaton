import React from 'react';
import './NewCouse.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { newLection } from '../../actions/user';

const NewCouse = () => {

    const [h2, seth2] = useState("")
    const [main, setMain] = useState("")
    const [test, setTest] = useState("")

    const dispatch = useDispatch()
    
    return (
        <section id="new-couse">
            <div className="container">
                <div className="row">
                    <form className="new-couse-content" method='POST' action='#'>
                        <h2 className="new-couse-content-zag">Создать новый урок</h2>
                        <input value={h2} onChange={(event)=> seth2(event.target.value)} id='lessonName' type="text" className="new-couse-content-inp" placeholder='Название урока' autofocus='True'/>
                        <textarea value={main} onChange={(event)=> setMain(event.target.value)} id='lessonText' className="new-couse-content-inp new-couse-content-textarea" col='1000' placeholder='Текст урока'></textarea>
                        <input value={test} onChange={(event)=> setTest(event.target.value)} id='linkText' type="text" className="new-couse-content-inp" placeholder='Ссылка на Google-форму' autofocus='True'/>
                        <div onClick={() => {dispatch(newLection(h2, main, test))}} className="new-couse-content-btn-bl">
                            {/* <input type="submit" value='Создать' className="new-couse-content-btn"/> */}
                            создать
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewCouse;