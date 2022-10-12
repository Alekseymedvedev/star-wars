import React from 'react';
import cls from './loader.module.css'

const Loader = () => {
    return (
        <div className={cls.loader}>
            <span className={cls.item}></span>
        </div>
    );
};

export default Loader;