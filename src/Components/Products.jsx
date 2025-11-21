import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

const Products = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 justify-center items-center mt-20'>
            {
                data.map((product) => <ProductCard product={product}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default Products;