import React from 'react';
import './Intro.css';
import me from './../../images/Perfil2.jpg'

function Intro() {
    return (
        <div className='i' >
            <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hola, Mi nombre es</h2>
                <h1 className="i-name">Johannes D</h1>  
                <div className="i-title">
                    <div className="i-title-wrapper"> 
                        <div className="i-title-item">Productor de medios audiovisuales</div>
                        <div className="i-title-item">Fotógrafo</div>
                        <div className="i-title-item">Photoshop</div>
                        <div className="i-title-item">After Effects</div>
                        <div className="i-title-item">Lightroom</div>
                        
                    </div>
                </div> 
                <p className="i-desc">
                <b>Productor de medios audiovisuales. </b>Yo plasmo mi realidad en lo que ves. Tú ves la única realidad que yo no quiero ser
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
