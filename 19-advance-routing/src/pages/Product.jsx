import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1 className="flex justify-center gap-10 font-extrabold text-3xl py-8">
                <Link to="/product/men">Men</Link>
                <Link to="/product/women">Women</Link>
                <Link to="/product/kids">Kids</Link>
            </h1>
            <h1>Product</h1>
            <Outlet />
        </div>
    )
}

export default Product