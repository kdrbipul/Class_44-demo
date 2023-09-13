import React from 'react';

const Tshirt = ({product,handleAddToCart}) => {
    const {img,name, id, price,stock,ratings,category} = product;
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    {/* <p className="card-text">{id}</p> */}
                    <p className="card-text">Price : ${price}</p>
                    <p className="card-text">Category : {category}</p>
                    <p className="card-text">Stock : {stock}</p>
                    <p className="card-text">Ratings : {ratings}</p>
                    <button onClick={()=>handleAddToCart(product)} href="#" className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Tshirt;