import React, { useContext } from 'react';
import { MyContext } from '../GrandFather/GrandFather';

const BrotherSpecial = () => {
    const [money, setMoney] = useContext(MyContext)
    return (
        <div className='common'>
            <h1>Vai Special : {money} </h1>
            <button onClick = {()=>setMoney(money + 100)}>Add Money</button>
        </div>
    );
};

export default BrotherSpecial;