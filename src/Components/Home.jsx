import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';
import { useState } from 'react';

const Home = () => {
    const data = useLoaderData();
    const product = data.filter((product) => product.isPopular)
    

   const [products, setProducts] = useState(product)

   const handleSearchProducts = (e) => {
   e.preventDefault()
   const searchValue  = e.target.search.value
   const filterProducts = data.filter((product) => product.title.includes(searchValue))
   setProducts(filterProducts)
   }
    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://cdn.mos.cms.futurecdn.net/ecFDEaoLxfRSh47BdyDQWg-1920-80.jpg"
      className="w-[500px] h-[600px] object-cover rounded-lg shadow"
    />
    <div>
      <h1 className="text-5xl font-bold">AirPods Max with USB-C just hit lowest price at Amazon for Presidents' Day</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            </div>
            <div>
             <h1 className='flex justify-center items-center text-5xl font-bold text-green-500 mt-20'>Here Are is Products</h1>
            </div>
            <div>
             < form onSubmit={handleSearchProducts} className='flex flex-col justify-center items-center gap-5 mt-10  '>
             <input className='outline-2 outline-green-500 w-6/12 py-2 px-4 rounded-xl' type="search" name="search" id="" />

             <button className='btn btn-outline btn-success w-1/12 rounded-xl'>Submit</button>
             </form>
            </div>
            <div className='grid grid-cols-3 gap-10 justify-center items-center mt-20'>
                {
                    products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;