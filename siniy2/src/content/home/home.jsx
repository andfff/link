import React from 'react';
import { Link } from 'react-router-dom';
import css from './home.module.css'
import logo from './avatar.webp'
function Home() {
    return (
        <div className={css.container}>
            <div className={css.header}>Головна</div>
            <div className={css.img_description}>
                <img className={css.avatar} src={logo} alt="" />
                <div className={css.description}>
                    Вітаю на SV, тут ти можеш знайти цілу колекцію матеріалу на Влада, частину з якої він запропонував сам для нашого сайту
                </div>
            </div>
            <div className={css.links}>
            <Link to='/quotes' className={css.link}>quotes</Link>
            <Link to='/gallery/1' className={css.link}>gallery</Link>
            <Link to='/home' className={css.link}>Home</Link>
            </div>
            <div className={css.bio_head}>Біографія</div>
            <div className={css.bio_text}>
                Влад народився 23 березня 2007 року. в дитинстві багато плакав, любив дурачки, били ремнем і палкою поки виріс, у віці 12 років вперше на довгий час залишався на котиківці. В 13 років на котиківці вкусив пес за сраку через місяць другий упав з драбини, в березні записався і до сих пір ходить в зал на пауерліфтинг, а в 14 обісцявся бо згадав що забув ключі на котиківці, бився з дівкою(програв), часто літом їздить в табір, останнім часом часто пропадає в туалеті з поносом...
            </div>
        </div>
    )
}
export default Home