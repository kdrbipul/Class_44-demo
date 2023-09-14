import React from 'react';
import FufiSister from '../FufiSister/FufiSister';

const Fufi = ({money}) => {
    return (
        <div className='common'>
            <h1>Fufi : {money}</h1>
            <FufiSister money={money}></FufiSister>
        </div>
    );
};

export default Fufi;