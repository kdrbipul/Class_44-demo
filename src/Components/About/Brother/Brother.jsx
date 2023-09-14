import React from 'react';
import BrotherSpecial from '../BrotherSpecial/BrotherSpecial';

const Brother = ({money}) => {
    return (
        <div className='common'>
            <h1>Brother : {money}</h1>
            <BrotherSpecial money={money}></BrotherSpecial>
        </div>
    );
};

export default Brother;