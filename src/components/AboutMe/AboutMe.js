import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe(props) {
    return (
        <section id="student" className="student">
            <h2 className="student__title">Студент</h2>
            <div className="student__container">
                <div id="info" className="student__info">
                    <h3 className="student__info_name">Дарья</h3>
                    <p className="student__info_profession">Госслужащая, 25 лет</p>
                    <p className="student__info_about">
                        Я родилась в Подольске, в настоящий момент живу и работаю в Москве. 
                        Закончила факультет систем управления, информатики и электроэнергетики МАИ. 
                        Я люблю слушать музыку и ходить на концерты, а ещё увлекаюсь плаванием. 
                        Недавно занялась веб-разработкой. С 2020 года нахожусь на государственной службе, 
                        занимаюсь развитием систем и сетей связи в России. 
                        Курс по веб-разработке помог мне отвлечься от нервной работы. 
                        Веб-разработка для меня, скорее, хобби, она мне доставляет удовольствие.
                    </p>
                    <a href="https://github.com/VolodinaD" target="_blank" className="student__info_link" rel="noreferrer" >Github</a>
                </div>
                <img id="photo" className="student__photo" src={photo} alt="Фото" />
            </div>
        </section>
    );
}

export default AboutMe;