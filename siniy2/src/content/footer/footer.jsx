import React from 'react';
import css from './footer.module.css'
import { Link } from 'react-router-dom';
import instagram from './instagram.png'
import telegram from './telegram.png'
import access from './access.jpg'
function Footer() {
    return (
        <div className="footer">
            <div className={css.container}>
                <img src={access} className={css.access_img} alt="" />
                <div className={css.description_container}>
                    <Link to='/About' className={css.about_link}>About us</Link>
                    <div className={css.text}>по співпраці писати в телеграм</div>
                    <div className={css.text}>aвтор сайту не несе відповідальності</div>
                </div>
                <div className={css.social_link}>
                    <a href="https://instagram.com/____andriy____?igshid=YmMyMTA2M2Y="><img src={instagram} className={css.social_img} alt="inst" /></a>
                    <a href="https://t.me/Who_are_u_now"><img src={telegram} className={css.social_img} alt="tg" /></a>
                </div>
            </div>
        </div>
    )
}
export default Footer