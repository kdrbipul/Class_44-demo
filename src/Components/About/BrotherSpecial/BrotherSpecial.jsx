import React, { useContext } from 'react';
import { MyContext } from '../GrandFather/GrandFather';

const BrotherSpecial = () => {
    const mon = useContext(MyContext)
    return (
        <div className='common'>
            <h1>Vai Special : {mon} </h1>
        </div>
    );
};

export default BrotherSpecial;