import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-container container'>
            <div className="dashboard-items">
                <h2>Month Wise Sell</h2>
                <MyLineChart></MyLineChart>
            </div>
            <div className="dashboard-items">
                <h2>Investment vs Revenue</h2>
                <MyPieChart></MyPieChart>
            </div>
        </div>
    );
};

export default Dashboard;