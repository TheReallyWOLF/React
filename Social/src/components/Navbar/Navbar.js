import React from 'react';
import navBarModule from './Navbar.module.css';
import {NavLink} from "react-router-dom"; // Стили для компонента

const Navbar = () => {
    return (
        <nav className={navBarModule.nav}>
            <div className={navBarModule.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;