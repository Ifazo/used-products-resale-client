import React from 'react';
import AddProduct from './seller/AddProduct';
import MyProducts from './seller/MyProducts';

const Dashboard = () => {
    return (
        <>
            <MyProducts></MyProducts>
            <AddProduct></AddProduct>
        </>
    );
};

export default Dashboard;