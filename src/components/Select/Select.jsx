import React, { Fragment, useState } from 'react';
import { IconBox } from '../Misc';
import './Select.scss';

const Select = ({ icon, boxType, options }) => {
    const [isOpened, toggleIsOpened] = useState(false);
    const [selectedId, changeSelectedId] = useState('');
    const hasOptions = options && Array.isArray(options) && options.length;

    return (
        <div className='select-wrapper flex' onClick={() => toggleIsOpened(!isOpened)}>
            {hasOptions && (
                <Fragment>
                    <span>{selectedId.length ? options.find(item => item.id === selectedId).name : options[0].name} <span className='icon-down-dir'></span></span>
                    <div className={`select-options ${!isOpened ? 'hidden' : ''}`}>
                        {options.map((item, key) => <div className='select-option' key={key} onClick={() => changeSelectedId(item.id)}>{item.name}</div>)}
                    </div>
                </Fragment>
            )}
            <IconBox icon={icon} type={boxType} />
        </div>
    );
};

export default Select;