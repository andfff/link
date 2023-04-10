import React, {useEffect} from 'react';
import css from './quotes.module.css'
import Quotes_list from './quotes_list';
function Quotes(){
    const jsx_list=Quotes_list.map(value=><div className={css.text}>{value}</div>)
    return(
        <div className={css.container}>
            <div className={css.header}>Цитати</div>
            {jsx_list}
            </div>
    )
}
export default Quotes