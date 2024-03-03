import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Box, useTheme} from '@mui/material';

const EmojiPieChart = ({ data, isLoading }) => {
    const theme = useTheme();
    const COLORS = [theme.palette.secondary[300], '#4d2ea1', theme.palette.neutral[100], theme.palette.secondary[500]];
    console.log(data);
    
    // Filter the data based on occurrences > 0
    let renderLabel = function(entry) {
        if(entry.messages > 3000){
            return (`#${entry.channel_name}`);
        }
    }

    if (!data || isLoading) return (
        <Box>
            Loading...
        </Box>
    )

    else { 
        return (
            <ResponsiveContainer>
                <PieChart >
                    <Pie
                        data={data}
                        innerRadius={120*0.6}
                        outerRadius={160*0.8}
                        fill="#8884d7"
                        stroke=""
                        paddingAngle={2}
                        nameKey="channel_name"
                        dataKey="messages"
                        label={renderLabel}
                        labelLine={false}

                        animationBegin={0}
                        animationDuration={1000}
                        animationEasing='ease'

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: theme.palette.background.alt }}
                        itemStyle={{ color: 'theme.palette.background.primary' }}/>
                </PieChart>
            </ResponsiveContainer>
        );
    };
}
export default EmojiPieChart;