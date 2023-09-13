import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Components/Cart/Cart';
import Tshirt from './Tshirt';
import './Home.css';

const Home = () => {
    const products = useLoaderData();
    // console.log(products);

    const handleAddToCart =()=>{
        console.log(handleAddToCart);
    }


    return (
        <div className='container home_container my-5'>
            <div className='product_container'>
                {
                    products.map(product =><Tshirt
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart_container text-center'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;