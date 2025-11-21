import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';
import { FaCartPlus } from 'react-icons/fa';
import { IoBagAdd } from 'react-icons/io5';

const ProductsDetails = () => {
    const data = useLoaderData()
    const {title, description, brand, price, image} = data;
    return (
        <div className='flex justify-center items-center gap-10'>
           <div>
            <img className='w-[400px] h-[500px] object-cover' src={image} alt="" />
           </div>
           <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-green-500'>Nane : {title}</h1>
            <div className='space-y-4'>
                <p>Brand : {brand}</p>
                <p>Description : {description}</p>
                <p>Price : ${price}</p>
                <div className='flex gap-5 mt-10'>
                    <button className='btn btn-primary text-lg'><FaCartPlus />Add to Card</button>
                    <button className='btn btn-secondary text-lg'><IoBagAdd />Buy Now</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ProductsDetails;