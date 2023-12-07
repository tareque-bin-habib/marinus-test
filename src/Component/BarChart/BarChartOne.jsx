import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const BarChartOne = () => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('https://marinus-backend.coderslab.com.bd/api/v1/dashboard')
            .then(response => {
                const { monthly_revenue_chart } = response.data;
                setChartData(monthly_revenue_chart);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartOne;