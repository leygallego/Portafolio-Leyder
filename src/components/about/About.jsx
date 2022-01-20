import React from 'react';
import './about.css';
import coding from './../../images/coding3.png'
import Award from './../../images/certificate.png'



export default function About() {
    return (
        <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={coding}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Quién Soy</h1>
        <p className="a-sub">
          Competencias Profesionales.
        </p>
        <p className="a-desc">
        Desarrollador web FullStack, certificado en auditor de calidad Iso2015, digitador y servicio al cliente. Con experiencia en trabajo Front-end y Back-End para aplicaciones web y movil, auditando procesos de calidad, logística y servicio al cliente. Con competencias en trabajo en equipo, análisis de problemas, capacidad de adaptación y dinamismo
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Awarded on: 22 Nov 2021</h4>
            <p className="a-award-desc">
            This is to certify that Leyder Gallego has successfully completed the EF SET Certificate and has earned the English level: <b>C1 Advanced</b>
            </p>
          </div>
        </div>
        
      </div>
    </div>
    )
}
