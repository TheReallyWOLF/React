import React from 'react';
import navBarModule from './Navbar.module.css';
import {NavLink} from "react-router-dom"; // Стили для компонента

const Navbar = () => {
    return (
        <nav className={navBarModule.nav}>
            <div className={navBarModule.item}>
                <NavLink to="/profile" activeClassName={navBarModule.active}>Profile</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/dialogs" activeClassName={navBarModule.active}>Messages</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/users" activeClassName={navBarModule.active}>Users</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/news" activeClassName={navBarModule.active}>News</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/music" activeClassName={navBarModule.active}>Music</NavLink>
            </div>
            <div className={navBarModule.item}>
                <NavLink to="/settings" activeClassName={navBarModule.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;