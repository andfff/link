import React from 'react';
import css from './admin_page.module.css'
import img1 from './private/1.webp'
import img2 from './private/2.webp'
import img3 from './private/3.webp'
import img4 from './private/4.webp'
import img5 from './private/5.webp'
import img6 from './private/6.webp'
import img7 from './private/7.webp'
import img8 from './private/8.webp'
import img9 from './private/9.webp'
import img10 from './private/10.webp'
import img11 from './private/11.webp'

import video1 from './private/1.mp4'
import video2 from './private/2.mp4'
import video3 from './private/3.mp4'

const cardArray=[
    {img:img1, text:'майбутня повія'},
    {img:img2, text:'надувся телєпузік'},
    {img:img3, text:'три бухі довбойоба'},
    {img:img4, text:'квадратний пиздолиз'},
    {img:img5, text:'йобаний сир'},
    {img:img6, text:'підтверджую'},
    {img:img7, text:'хто б не заєбався за 7 років'},
    {img:img8, text:'майстер свого діла'},
    {img:img9, text:'Я!'},
    {img:img10, text:'собі полижи'},
    {img:img11, text:'шукайти на дайвинчику'},
]
const videoArray=[
    video1, video2, video3
]

function AdminPage(){
    const imgArray2 = cardArray.map((el, index) => 
    <div className={css.card}>
        <img className={css.img} key={index} src={el.img} alt="" />
        <div className={css.text}>{el.text}</div>
    </div>)
    const videoArray2=videoArray.map(el=> 
        <div className={css.video_card}>
            <video className={css.video} src={el} preload='metadata' controls>
            </video>
        </div>
        )
    
    return(
        <div className={css.container}>
           <div className={css.header}>Для своїх</div>
           <div className={css.cards}>
            {imgArray2}
            {videoArray2}
           </div>
        </div>
    )    
}
export default AdminPage