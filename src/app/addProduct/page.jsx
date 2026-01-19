import AddProductForm from '@/components/Form/AddProductForm';
import React from 'react';

const addProduct = () => {
    return (
        <div>
            <div className='py-18 text-center'>
                <h2 className='text-4xl font-bold '>Add Your <span className='text-primary'>Products</span></h2>
                <p className='text-accent'>Please fill up the form for add products</p>
            </div>
            <AddProductForm></AddProductForm>
        </div>
    );
};

export default addProduct;