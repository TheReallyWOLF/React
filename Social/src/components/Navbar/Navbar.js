import React from 'react';
import navBarModule from './Navbar.module.css'; // Стили для компонента

const Navbar = () => {
    return (
        <nav className={navBarModule.nav}>
            <div className={navBarModule.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={navBarModule.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={navBarModule.item}>
                <a href="/news">News</a>
            </div>
            <div className={navBarModule.item}>
                <a href="/music">Music</a>
            </div>
            <div className={navBarModule.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;