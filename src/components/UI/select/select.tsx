import React, {FC, useState} from 'react';
import cls from './select.module.css'

interface type {
    onChange?: any
}

const Select: FC<type> = ({onChange}) => {
    const [select, SetSelect] = useState('')
    return (
        <select
            className={cls.select}
            value={select}
            onChange={e => {
                SetSelect(e.target.value)
                onChange(e.target.value)
            }}
        >
            <option disabled value="">Sort</option>
            <option value="name">Name</option>
            <option value="gender">Gender</option>
        </select>
    );
};

export default Select;