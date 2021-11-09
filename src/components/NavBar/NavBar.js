import React from 'react'
import './NavBar.scss'
import logo from '../../assets/logo-black.svg'
import { SearchBar } from './SearchBar/SearchBar'
import { CartWidget } from './CartWidget/CartWidget'
import { ProfileWidget } from './ProfileWidget/ProfileWidget'
import { MobileMenu } from './MobileMenu/MobileMenu'

export const NavBar = () => {

    return (
        <header className="header">
            <div className="contenedor">
                <div className="navbar-container">
                    <MobileMenu/>
                    <img src={logo} className="logo" alt="logo"/>
                    <SearchBar/>

                    <nav className="icons">
                        <ProfileWidget hide={true}/>
                        <CartWidget/>
                    </nav>
                </div>
            </div>
        </header>
    )
}
