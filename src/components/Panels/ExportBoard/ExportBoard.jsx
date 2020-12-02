import React from 'react';
import { IconBox } from '../../Misc';

const ExportBoard = () => {
    return (
        <div className='flex flex-right'>
            <IconBox type='secondary' icon='download' callback={() => window.print()} />
            <IconBox type='secondary' icon='print' callback={() => window.print()} />
        </div>
    );
};

export default ExportBoard;