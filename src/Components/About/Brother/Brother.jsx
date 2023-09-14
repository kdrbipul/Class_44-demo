import React, { useContext } from 'react';
import BrotherSpecial from '../BrotherSpecial/BrotherSpecial';
import { MyContext } from '../GrandFather/GrandFather';

const Brother = () => {
    // const mon = useContext(MyContext)
    return (
        <div className='common'>
            <h1>Brother :  </h1>
            <BrotherSpecial></BrotherSpecial>
        </div>
    );
};

export default Brother;