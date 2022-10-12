import React, {FC} from 'react';
import cls from "./label.module.css";

interface T {
    label?: string
}

const Label: FC<T> = ({label}) => {
    const labelClass = [cls.labels]
    if (label === 'female') {
        labelClass.push(cls.female)
    }
    if (label === 'male') {
        labelClass.push(cls.male)
    }
    if (label === 'hermaphrodite') {
        labelClass.push(cls.hermaphrodite)
    }
    return (
        <>
            {
                label && label !== 'unknown'
                    ? <div className={labelClass.join(' ')}>{label}</div>
                    : ''
            }
        </>
    );
};

export default Label;