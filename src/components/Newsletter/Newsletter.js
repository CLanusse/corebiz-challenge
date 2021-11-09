import React from 'react'
import { NewsletterForm } from './NewsletterForm/NewsletterForm'
import './Newsletter.scss'

export const Newsletter = () => {

    return (
        <section className="newsletter-container">
            <div className="contenedor">
                <h2>¡Únete a nuestras novedades y promociones!</h2>
                <NewsletterForm/>
            </div>
        </section>
    )
}
