import React from 'react';
import AwardBl from '../molecules/AwardBl';
import CursesContent from '../molecules/CursesContent';

const Awards = () => {
    return (
        <section id="awards">
            <div className="container">
                <div className="row">
                    <h2 id="awards-zag">Награды</h2>
                    <div className="award-content">
                    <AwardBl image='<img src="">' text='Топ-40 разработчиков мобильных приложений 2019'/>
                


Good Firms
Топ-10 веб-разработчиков
в России

Tagline 50
Топ-50 веб-студий / digital production 2019

Рунет Торговля
Топ-10 рейтинга креативности веб-студий (торговля)

Золотой сайт
Призеры конкурса
в 2017 году

Рунет
Топ-55 разработчиков дизайна мобильных приложений 2019

Спайк
Члены ассоциации

Netcat
Официальный партнер

Золотое приложение
Призеры конкурса
в 2015 году

РАЭК
Участники digital-кластера

MicrosoftPartner
Официальный партнер
c 2010 года

Russoft
Официальный партнер
c 2014 года         
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Awards;