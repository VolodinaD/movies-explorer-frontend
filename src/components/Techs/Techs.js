import React from 'react';
import './Techs.css';

function Techs(props) {
    return (
        <section id="techs" className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__container">
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__technologies">
                    <div className="techs__technology">HTML</div>
                    <div className="techs__technology">CSS</div>
                    <div className="techs__technology">JS</div>
                    <div className="techs__technology">React</div>
                    <div className="techs__technology">Git</div>
                    <div className="techs__technology">Express.js</div>
                    <div className="techs__technology">mongoDB</div>
                </div>
            </div>
        </section>
    );
}

export default Techs; 