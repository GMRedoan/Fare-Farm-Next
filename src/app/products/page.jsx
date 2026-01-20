"use client"
import ProductCard from '@/components/Cards/ProductsCard';
import React, { useEffect, useState } from 'react';

 const Products = () => {
      const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='text-3xl md:text-5xl font-bold'>
                    Our <span className='text-primary'>Farm</span> Products
                </h2>
                <p className='text-accent my-3'>
                    Quality crops grown with care and sustainability
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid md:grid-cols-4 gap-6 mx-12 mb-12'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;