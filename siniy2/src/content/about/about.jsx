import React from 'react';
import css from './about.module.css'
import myself from './myself2.webp'
function About() {
    return (
        <div className={css.container}>
            <div className={css.header}>Про мене</div>
            <div className={css.text}>
                <div className={css.abzac}>
                    Я Андрій, цей сайт створений на замовлення його головного персонажа - Влада. Основною ідеєю було використати десь скріни, які час від часу Влад робить на мій телефон.
                </div>
                <div className={css.abzac}>
                    Біографію за моєю просьбою склав Влад. В неї входять факти про нього які він згадав за 5хв.
                </div>
                <div className={css.abzac}>
                    Якщо ви знайшли баг або помилку у відображенні якогось елементу або просто помилку в тексті напишіть про це в телеграм.
                </div>
                <div className={css.abzac}>
                    сайт, жарти і фото не мають мети когось образити
                </div>
            </div>
            <img className={css.img} src={myself} alt="" />
        </div>
    )
}
export default About