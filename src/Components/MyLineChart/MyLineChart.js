import React, { useEffect, useState } from 'react';
import { Line, LineChart } from 'recharts';

const MyLineChart = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <LineChart width={400} height={400} data={data}>
            <Line dataKey={'month'}></Line>
            <Line dataKey={'sell'}></Line>
        </LineChart>
    );
};

export default MyLineChart;