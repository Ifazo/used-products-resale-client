import React from 'react';
import SellerDashboard from './Seller/SellerDashboard';
import UserDashboard from './Users/UserDashboard';

const Dashboard = () => {
    return (
        <>
            <UserDashboard></UserDashboard>
            <SellerDashboard></SellerDashboard>
        </>
    );
};

export default Dashboard;