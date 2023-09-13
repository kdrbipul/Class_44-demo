import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Components/Cart/Cart';
import Tshirt from './Tshirt';

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='container'>
            <div>
                {
                    products.map(product =><Tshirt
                        key={product.id}
                        product={product}
                    ></Tshirt>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;