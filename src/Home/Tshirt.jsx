import React from 'react';

const Tshirt = ({product}) => {
    const {img,name, id, price,stock,ratings,category} = product;
    return (
        <div>
            <h1>This is T-shirt</h1>
        </div>
    );
};

export default Tshirt;