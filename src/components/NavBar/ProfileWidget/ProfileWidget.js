import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import './ProfileWidget.scss'

export const ProfileWidget = ({hide}) => {

    return (
        <div className={`profile-widget ${hide && 'mobile-hidden'}`}>
            <FaRegUser className="profile-icon"/>
            Mi Cuenta
        </div>
    )
}
