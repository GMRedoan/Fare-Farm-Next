import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-5xl font-bold text-red-500'> 404 | Page not found</h2>
            <Link href={'/home'} className='btn btn-primary mt-8 rounded-xl font-bold'>Go to Home</Link>
        </div>
    );
};

export default notFound;