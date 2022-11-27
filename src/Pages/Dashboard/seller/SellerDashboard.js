import React from 'react';
import AddProduct from './AddProduct';
import MyProducts from './MyProducts';

const SellerDashboard = () => {
    return (
        <div>
            <MyProducts></MyProducts>
            <AddProduct></AddProduct>
        </div>
    );
};

export default SellerDashboard;