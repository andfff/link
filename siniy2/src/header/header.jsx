import React from 'react';
import css from './header.module.css'
import { Link } from 'react-router-dom';
import logo from './icon.png'

function Header() {
    return (
        <div className="header">
            <div className={css.container}>
                <img className={css.img} src={logo} alt="" />
                <Link to='/admin' className={css.link}>admin </Link>
                <div className={css.void}></div>
                <div className={css.links}>
                    <Link to='/quotes' className={css.link}>quotes</Link>
                    <Link to='/gallery/1' className={css.link}>Gallery</Link>
                    <Link to='/' className={css.link}>Home</Link>
                </div>
            </div>
        </div>
    )
}
export default Header