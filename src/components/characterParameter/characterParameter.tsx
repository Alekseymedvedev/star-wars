import React, {FC} from 'react';
import cls from './characterParameter.module.css'

interface type {
    parameter: string
    text: string
    parameterCls?: string
}

const CharacterParameter: FC<type> = ({parameter, text, parameterCls}) => {
    const parameterClass = [cls.parameter]
    if (parameterCls) {
        parameterClass.push(cls.white)
    }
    return (
        <>
            {
                parameter && parameter !== "unknown"
                    ?
                    <div className={parameterClass.join(' ')}>
                        <div className={cls.number}>{parameter}</div>
                        <div className={cls.text}>{parameterCls}</div>
                    </div>
                    : ''
            }
        </>
    );
};

export default CharacterParameter;