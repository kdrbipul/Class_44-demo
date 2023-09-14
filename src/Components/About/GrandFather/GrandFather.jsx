import React, { createContext } from 'react';
import Father from '../Father/Father';
import Fufi from '../Fufi/Fufi';
import Uncle from '../Uncle/Uncle';
import './GrandFather.css'




export const MyContext = createContext(55)

const GrandFather = () => {

    const money = 5000;

    return (
        <div className='common my-5'>
            <h1>Dadu : {money}</h1>
            <div className='d-flex justify-content-between'>
                <MyContext.Provider value={money}>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Fufi></Fufi>
                </MyContext.Provider>
            </div>
            
        </div>
    );
};

export default GrandFather;