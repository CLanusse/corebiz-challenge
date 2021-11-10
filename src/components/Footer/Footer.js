import React from 'react'
import './Footer.scss'
import mailIcon from '../../assets/mail-icon.svg'
import headsetIcon from '../../assets/headset-icon.svg'
import corebiz from '../../assets/logo-white.svg'
import { VtexIcon } from './VtexIcon/VtexIcon'

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="contenedor footer-container">

                <div className="footer-info">
                    <h3>Ubicación</h3>
                    <ul>
                        <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
                        <li>Alphavile SP</li>
                        <li>brasil@corebiz.ag</li>
                        <li>+55 11 3090 1039</li>
                    </ul>
                </div>

                <div className="footer-buttons">
                    <button className="footer-btn">
                        <img src={mailIcon} className="btn-icon" alt="mail icon"/>
                        Contáctanos
                    </button>
                    <button className="footer-btn">
                        <img src={headsetIcon} className="btn-icon" alt="headset icon"/>
                        Habla con un consultor
                    </button>
                </div>

                <div className="footer-icons">
                    <div className="footer-icon">
                        <p>Desarrollado por</p>
                        <img src={corebiz} alt="corebiz icon" className="corebiz-icon"/>
                    </div>
                    <div className="footer-icon">
                        <p>Powered by</p>
                        <VtexIcon/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
