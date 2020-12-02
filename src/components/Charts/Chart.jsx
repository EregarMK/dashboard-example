import React from 'react';
import { BarChart, ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, LabelList, Line, Cell } from 'recharts';

const ChartType = ({ children, layout, composed, size }) => {
    if (!composed)
        return <ComposedChart {...size} data={data} layout={layout} barCategoryGap={4} margin={{ right: 40 }}>{children}</ComposedChart>
    return <BarChart {...size} data={data} layout={layout} barCategoryGap={4} margin={{ left: -20, top: 20 }}>{children}</BarChart>
}

const Chart = ({ layout, composed, height }) => {
    const isDesktop = window.innerWidth > 576;

    return (
        <div>
            <ResponsiveContainer>
                <ChartType size={{ width: isDesktop ? 400 : 240, height: height }} data={data} layout={layout} barCategoryGap={4} composed={composed}>
                    <XAxis type={composed ? 'category' : 'number'} hide={!composed} />
                    <YAxis type={composed ? 'number' : 'category'} hide={!composed} />
                    <Tooltip cursor={{ fill: 'transparent', stroke: 'transparent' }} />
                    <Bar dataKey='value' fill='#e5e7e9' stackId='stacked' >
                        <LabelList dataKey='diff' position={composed ? 'top' : 'right'} />
                    </Bar>
                    <Bar dataKey='change' fill='red' stackId='stacked'>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))
                        }
                    </Bar>
                    {composed && <Line type='monotone' dataKey='last' stroke="#ff7300" />}
                </ChartType>
            </ResponsiveContainer>
        </div>
    );
};

const data = [
    {
        diff: '+4%',
        value: 330,
        change: 4,
        last: 326,
        color: '#2ABFD7'
    },
    {
        diff: '+15%',
        value: 300,
        change: 15,
        last: 285,
        color: '#BDD74B'
    },
    {
        diff: '+9%',
        value: 200,
        change: 9,
        last: 191,
        color: '#FF9933'
    },
    {
        diff: '-17%',
        value: 261,
        change: -17,
        last: 278,
        color: '#FC5151'
    },
]

export default Chart;