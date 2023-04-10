import React from 'react';
import css from './../rightcontent.module.css'
import { imgArray as imgArray1, name as name1 } from './gallery_img/1/array';
import { imgArray as imgArray2, name as name2 } from './gallery_img/2/array';
import { imgArray as imgArray3, name as name3 } from './gallery_img/3/array';
import { imgArray as imgArray4, name as name4 } from './gallery_img/4/array';
import { imgArray as imgArray5, name as name5 } from './gallery_img/5/array';
import { imgArray as imgArray6, name as name6 } from './gallery_img/6/array';
import { imgArray as imgArray7, name as name7 } from './gallery_img/7/array';
import { useParams } from 'react-router-dom';
const imgArraysArray = [imgArray1, imgArray2, imgArray3, imgArray4, imgArray5, imgArray6, imgArray7]
const names=[name1, name2, name3, name4, name5, name6, name7]

function Category() {
    const { id } = useParams()
    const easyarray = imgArraysArray[id - 1].map((el, index) => 
    <div className={css.card}>
        <img className={css.img} key={index} src={el.img} alt="" />
        <div className={css.text}>{el.text}</div>
    </div>)
    return (
        <div className={css.category}>
            <div className={css.name}>{names[id-1]}</div>
            <div className={css.cards}>
                {easyarray}
            </div>
        </div>)
}
export default Category 