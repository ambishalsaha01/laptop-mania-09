import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import LoadChartData from '../../hooks/LoadChartData';

const MyLineChart = () => {
    const [data, setData] = LoadChartData();
    return (
        <LineChart width={600} height={400} data={data}>
            <Line stroke='#8884d8' dataKey={'month'}></Line>
            <Line dataKey={'sell'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <CartesianGrid stroke='#ccc'></CartesianGrid>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    );
};

export default MyLineChart;