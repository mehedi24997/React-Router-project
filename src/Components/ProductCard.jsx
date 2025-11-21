import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
    const {id, title, description, brand, price, image} = product;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-[400px] h-[300px] object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brand}</div>
      <div className="badge badge-outline">{price}</div>
    </div>
     <div>
        <Link to={`/products-details/${id}`} className='btn btn-primary w-full mt-5'>View Detsils</Link>
     </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;