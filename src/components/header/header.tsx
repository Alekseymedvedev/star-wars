import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import logo from "../../logo.svg"
import cls from './header.module.css'

const Header = () => {
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.inner}>
                    <Link to={'/'}><img src={logo} alt=""/></Link>
                    <nav className={cls.nav}>
                        <NavLink className={cls.link} to={'/'} end>Home</NavLink>
                        <NavLink className={cls.link} to={'characters'}>Characters</NavLink>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </header>
    );
};

export default Header;