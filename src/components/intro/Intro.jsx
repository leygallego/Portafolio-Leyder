import React from 'react';
import './Intro.css';
import me from './../../images/Perfil2.png'

function Intro() {
    return (
        <div className='i' >
            <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hola, Mi nombre es</h2>
                <h1 className="i-name">Léyder Gallego</h1>  
                <div className="i-title">
                    <div className="i-title-wrapper"> 
                        <div className="i-title-item">Full Stack Web Developer</div>
                        <div className="i-title-item">React</div>
                        <div className="i-title-item">NodeJS</div>
                        <div className="i-title-item">Express</div>
                        <div className="i-title-item">Sequelize</div>
                        <div className="i-title-item">Redux</div>
                        <div className="i-title-item">Firebase</div>
                        <div className="i-title-item">PostgreSQL</div>
                    </div>
                </div> 
                <p className="i-desc">
                <b>Full Stack web Developer</b>, disfruto de la programación, Soy curioso por naturaleza y me encanta investigar, leer y usar mis conocimientos en la vida diaria
                    </p> 
            </div>
            
            </div>
            
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="Portfolio owner" className="i-img" />
            </div>
        </div>
    )
}

export default Intro 
