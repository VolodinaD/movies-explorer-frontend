import React from 'react';
import './AboutProject.css';

function AboutProject(props) {
    return (
        <section id="project" className="project">
            <h2 className="project__title">О проекте</h2>
            <div className="project__container">
                <div className="project__text">
                    <h3 className="project__text_title">Дипломный проект включал 5 этапов</h3>
                    <p className="project__text_paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__text">
                    <h3 className="project__text_title">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__text_paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__duration">
                <div className="project__duration_backend">1 неделя</div>
                <div className="project__duration_frontend">4 недели</div>
            </div>
            <div className="project__development">
                <p className="project__development_backend">Back-end</p>
                <p className="project__development_frontend">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject; 