import React from 'react';
import Brother from '../Brother/Brother';

const Father = ({money}) => {
    return (
        <div className='common'>
            <h1>Father : {money}</h1>
            <Brother money={money}></Brother>
        </div>
    );
};

export default Father;