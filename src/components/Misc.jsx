import React, { Fragment } from 'react';
import './Misc.scss';

const handleClick = (callback) => {
    if (!callback)
        return
    callback()
}

export const IconBox = ({ type, icon, callback }) => {
    return (
        <Fragment>
            <div className={`button button-right icon-${icon} btn-${type}`} onClick={() => handleClick(callback)}></div>
        </Fragment>
    );
};
