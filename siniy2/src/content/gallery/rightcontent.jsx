import React from 'react';
import css from './rightcontent.module.css'
import { Link, Outlet } from 'react-router-dom';
function Rightcontent() {
    return (
        <div className={css.big_container}>
            <div className={css.header}>Галерея</div>
            <div className={css.small_container}>
                <div className={css.links}>
                    <Link className={css.link} to='/gallery/1'>Лице зблизька</Link>
                    <Link className={css.link} to='/gallery/2'>Синя курточка</Link>
                    <Link className={css.link} to='/gallery/4'>Вчитель</Link>
                    <Link className={css.link} to='/gallery/5'>Gym. Yeah body</Link>
                    <Link className={css.link} to='/gallery/6'>Дуо</Link>
                    <Link className={css.link} to='/gallery/7'>Школа</Link>
                </div>
                        <Outlet />
            </div>
        </div>
    )
}
export default Rightcontent