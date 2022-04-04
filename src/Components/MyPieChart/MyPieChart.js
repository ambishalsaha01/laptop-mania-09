import React from 'react';
import { Pie, PieChart } from 'recharts';
import LoadChartData from '../../hooks/LoadChartData';

const MyPieChart = () => {
    const [data, setData] = LoadChartData();
    return (
        <PieChart width={550} height={400}>
            <Pie data={data} dataKey={'revenue'} cx={200} cy={200} outerRadius={60} fill={'#8884d8'}></Pie>
            <Pie data={data} dataKey={'investment'} cx={200} cy={200} innerRadius={70} outerRadius={90} fill={'#82ca9d'} label></Pie>
        </PieChart>
    );
};

export default MyPieChart;