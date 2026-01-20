import ProductDetailsCard from '@/components/Cards/ProductDetailsCard';
import React from 'react';

const SingleProduct = async (_id) => {
    const res = await fetch(
        `https://fare-farm.vercel.app/products/${_id}`,
    );

    const data = await res.json();
    return data;
};
const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await SingleProduct(id)

    return (
        <div>
            <div className='text-center mt-10'>
                <h2 className='font-bold text-3xl md:text-5xl'>Details of your <span className='text-primary'>desired</span> products</h2>
                <p className='text-accent mt-4'>Pure authentic product for you</p>
            </div>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    )
}
export default ProductDetails;