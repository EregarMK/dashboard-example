import React from 'react';
import './Panel.scss';

const Panel = ({ children, value, name, difference, type }) => {
    return (
        <div className='panel'>
            <div className='h1'>{value}</div>
            <div className='panel-title'>{name} <span className={`right ${type}`}>{difference}</span></div>
            {children}
        </div>
    );
};

export default Panel;