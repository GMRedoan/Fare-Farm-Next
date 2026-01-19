import ProductDetailsCard from '@/components/Cards/ProductDetailsCard';
import React from 'react';

const SingleProduct = async (_id) => {
    const res = await fetch(
        `http://localhost:3000/products/${_id}`,
    );

    const data = await res.json();
    return data;
};
const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await SingleProduct(id)

    return (
        <div>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    )
}
export default ProductDetails;