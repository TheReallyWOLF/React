import React from 'react';
import navBarModule from './Navbar.module.css'; // Стили для компонента

const Navbar = () => {
    return (
        <nav className={navBarModule.nav}>
            <div className={navBarModule.item}>
                <a>Profile</a>
            </div>
            <div className={navBarModule.item}>
                <a>Messages</a>
            </div>
            <div className={navBarModule.item}>
                <a>News</a>
            </div>
            <div className={navBarModule.item}>
                <a>Music</a>
            </div>
            <div className={navBarModule.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;