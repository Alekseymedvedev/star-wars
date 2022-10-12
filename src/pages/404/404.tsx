import React from 'react';
import {Link} from "react-router-dom";
import cls from './404.module.css'
import img1 from '../../images/404.png'
import img2 from '../../images/404-1.png'
const ErrorPage= () => {
    return (
        <div className={cls.errorPage}>
            <div className={cls.box}>
                <img src={img2} alt=""/>
                <img className={cls.planet} src={img1} alt=""/>
            </div>
            <Link className={cls.back} to={'/'}>Return</Link>
        </div>
    );
};

export default ErrorPage;