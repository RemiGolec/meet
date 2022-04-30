import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';






const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            const data = genres.map((genre) => {
                const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
                return { name: genre, value }
            });
            return data;
        };
        setData(() => getData());
    }, [events]);

    const colors = [
        "#00171cf0",
        "#ff1493",
        "#00d5ff",
        "#2EE59D",
        "#8884d8"
    ];

    return (
        <ResponsiveContainer
            className="pie-chart-wrapper"
            height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {
                        data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index]} />
                        ))
                    }
                </Pie>

            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;
