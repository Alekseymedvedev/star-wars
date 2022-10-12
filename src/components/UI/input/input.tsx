import React, {FC, useState} from 'react';
import cls from './input.module.css'


interface type {
    debounse: any
}

const Input: FC<type> = ({debounse}) => {
    const [input, SetInput] = useState('')
    return (
        <label className={cls.label}>
            <input
                className={cls.input}
                type="text"
                placeholder="find..."
                value={input}
                onChange={e => {
                    SetInput(e.target.value)
                    debounse(e.target.value)
                }}
            />
        </label>
    );
};

export default Input;