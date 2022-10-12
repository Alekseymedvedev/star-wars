import React from 'react';
// @ts-ignore
import cls from './home.module.css'
// @ts-ignore
import img from '../../images/banner.png'
import {NavLink} from "react-router-dom";
import Header from "../../components/header/header";
const Home = () => {
    return (
     <>
         <Header/>
         <div className={cls.home}>
             <div className="container">
                 <div className={cls.inner}>
                     <div className={cls.box}>
                         <h1 className={cls.title}><strong>Find</strong> all your favorite <strong>character</strong></h1>
                         <div className={cls.text}>You can find out all the information about your favorite characters</div>
                         <NavLink className={cls.btn} to={'characters'}>See more...</NavLink>
                     </div>
                     <img src={img} alt=""/>
                 </div>
             </div>
         </div>
     </>
    );
};

export default Home;